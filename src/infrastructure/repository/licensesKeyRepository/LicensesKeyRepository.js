import PrismaClient from '../../prisma/index.js';
import LicenseKeyEntity from '../../../domain/entities/licensesKeyEntity/LicensesKeyEntity.js';
import LicensesHelper from '../../../helpers/LicenseHelper.js';
export default class LicensesKeyRepository {
  static async create(request) {
    const { plainText, ...dbData } = request;
    const license = await PrismaClient.licensesKey.create({
      data: dbData,
      select: {
        id: true,
        encryptedKey: true,
        keyHash: true,
        activationLimit: true,
        status: true,
        soldAt: true,
        productId: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return new LicenseKeyEntity({
      ...license,
      plainText: request.plainText, // plainText tidak disimpan di DB
    });
  }

  static async findById(dataId, plainText = false) {
    const license = await PrismaClient.licensesKey.findUnique({
      where: { id: dataId },
      select: {
        id: true,
        encryptedKey: true,
        keyHash: true,
        activationLimit: true,
        status: true,
        soldAt: true,
        productId: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        }
      },
    });
    if (!license) return null;

    let plainTextValue = null;
    if (plainText) {
      plainTextValue = LicensesHelper.decryptedKey(license.encryptedKey);
    }

    return new LicenseKeyEntity({
      ...license,
      plainText: plainTextValue,
    });
  }
}
