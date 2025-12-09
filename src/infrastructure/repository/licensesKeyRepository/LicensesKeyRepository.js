import PrismaClient from '../../prisma/index.js';
import LicenseKeyEntity from '../../../domain/entities/licensesKeyEntity/LicensesKeyEntity.js';
import LicensesHelper from '../../../helpers/LicenseHelper.js';
export default class LicensesKeyRepository {
  static async create(request) {
    const { plainText, ...dbData } = request;

    // whitelist allowed fields for create to avoid passing relation objects or id/createdAt
    const allowedFields = [
      'encryptedKey',
      'keyHash',
      'activationLimit',
      'status',
      'soldAt',
      'ownerId',
      'iid',
      'activatedBy',
      'activatedAt',
      'productId',
      'supplierId',
    ];

    const data = {};
    for (const key of allowedFields) {
      if (Object.prototype.hasOwnProperty.call(dbData, key)) {
        data[key] = dbData[key];
      }
    }

    const license = await PrismaClient.licensesKey.create({
      data: data,
      select: {
        id: true,
        encryptedKey: true,
        keyHash: true,
        activationLimit: true,
        status: true,
        soldAt: true,
        ownerId: true,
        iid: true,
        activatedBy: true,
        activatedAt: true,
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

  static async findAllLicenses(plainText = false) {
    const licenses = await PrismaClient.licensesKey.findMany({
      select: {
        id: true,
        encryptedKey: true,
        keyHash: true,
        activationLimit: true,
        status: true,
        soldAt: true,
        ownerId: true,
        iid: true,
        activatedBy: true,
        activatedAt: true,
        productId: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        },
        supplierId: true,
        supplier: {
          select: {
            id: true,
            supplierName: true,
          },
        },
      },
    });

    // return licenses.map((license) => {
    //   let plainTextValue = null;
    //   if (plainText) {
    //     plainTextValue = LicensesHelper.decryptedKey(license.encryptedKey);
    //   }
    //   return new LicenseKeyEntity({
    //     ...license,
    //     plainText: plainTextValue,
    //   });
    // });

    let result = [];
    for (const license of licenses) {
      let plainTextValue = null;
      if (plainText) {
        plainTextValue = LicensesHelper.decryptedKey(license.encryptedKey);
      }
      result.push(
        new LicenseKeyEntity({
          ...license,
          plainText: plainTextValue,
        })
      );
    }
    return result;
  }

  static async findByOwner(userId, plainText = false) {
    const licenses = await PrismaClient.licensesKey.findMany({
      where: { ownerId: userId },
      select: {
        id: true,
        encryptedKey: true,
        keyHash: true,
        activationLimit: true,
        status: true,
        soldAt: true,
        ownerId: true,
        iid: true,
        activatedBy: true,
        activatedAt: true,
        productId: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const result = [];
    for (const license of licenses) {
      let plainTextValue = null;
      if (plainText) {
        plainTextValue = LicensesHelper.decryptedKey(license.encryptedKey);
      }
      result.push(
        new LicenseKeyEntity({
          ...license,
          plainText: plainTextValue,
        })
      );
    }

    return result;
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
        ownerId: true,
        iid: true,
        activatedBy: true,
        activatedAt: true,
        productId: true,
        product: {
          select: {
            id: true,
            name: true,
          },
        },
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

  static async update(id, request) {
    const { plainText, ...dbData } = request;

    // whitelist allowed fields for update to avoid passing entire entity (including id/relations)
    const allowedFields = [
      'encryptedKey',
      'keyHash',
      'activationLimit',
      'status',
      'soldAt',
      'ownerId',
      'iid',
      'activatedBy',
      'activatedAt',
      'productId',
      'supplierId',
    ];

    const data = {};
    for (const key of allowedFields) {
      if (Object.prototype.hasOwnProperty.call(dbData, key)) {
        data[key] = dbData[key];
      }
    }

    const license = await PrismaClient.licensesKey.update({
      where: { id },
      data,
      select: {
        id: true,
        encryptedKey: true,
        keyHash: true,
        activationLimit: true,
        status: true,
        soldAt: true,
        ownerId: true,
        iid: true,
        activatedBy: true,
        activatedAt: true,
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
      plainText: request.plainText, // tetap tambahkan plainText dari request jika ada
    });
  }

  static async remove(dataId) {
    const licenses = await PrismaClient.licensesKey.delete({
      where: {
        id: dataId,
      },
    });

    return licenses ? new LicenseKeyEntity(licenses) : [];
  }
}
