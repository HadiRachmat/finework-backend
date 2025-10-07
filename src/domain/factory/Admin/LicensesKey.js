import EncryptedKey from '../../valuesObjects/licensesKeyVo/EncryptedKey.js';
import PlainText from '../../valuesObjects/licensesKeyVo/plainText.js';
import LicensesKeyEntity from '../../entities/licensesKeyEntity/LicensesKeyEntity.js';
import ResponseError from '../../../error/ResponseError.js';
import LicenseHelper from '../../../helpers/LicenseHelper.js';

export default class LicensesKey {
  // Factory create baru
  static create({ plainText, activationLimit, status, soldAt, productId, supplierId }) {
    const plainTextVo = new PlainText(plainText);

    const { encryptedKey, keyHash } = LicenseHelper.encryptKey(plainTextVo.plainText);

    const licensesEntity = new LicensesKeyEntity({
      plainText: plainTextVo.plainText,
      encryptedKey,
      keyHash,
      activationLimit: Number(activationLimit),
      status: Number(status),
      soldAt,
      productId: Number(productId),
      supplierId: Number(supplierId),
    });

    return licensesEntity;
  }

  static update(request, existingLicense) {
    let encryptedKey = existingLicense.getEncryptedKey();
    let keyHash = existingLicense.getKeyHash();
    let plainText = existingLicense.getPlainText();

    // Jika admin mengirim plainText baru, enkripsi ulang
    if (request.plainText) {
      const plainTextVo = new PlainText(request.plainText);
      const encrypted = LicenseHelper.encryptKey(plainTextVo.plainText);
      encryptedKey = encrypted.encryptedKey;
      keyHash = encrypted.keyHash;
      plainText = plainTextVo.plainText;
    }

    return new LicensesKeyEntity({
      id: existingLicense.getId(),
      plainText,
      encryptedKey,
      keyHash,
      activationLimit: Number(request.activationLimit ?? existingLicense.getActivationLimit()),
      status: Number(request.status ?? existingLicense.getStatus()),
      soldAt: request.soldAt ?? existingLicense.getSoldAt(),
      productId: Number(request.productId ?? existingLicense.getProductId()),
      supplierId: Number(request.supplierId ?? existingLicense.getSupplier()),
    });
  }

  // Factory hydrate (dari DB)
  static reconstitute({
    id,
    encryptedKey,
    keyHash,
    activationLimit,
    status,
    soldAt,
    productId,
    supplierId,
  }) {
    const encryptedVo = new EncryptedKey(encryptedKey, keyHash); // disini validasi jalan
    return new LicensesKeyEntity({
      id,
      plainText: encryptedVo.getPlainText(),
      encryptedKey: encryptedVo.encryptedKey,
      keyHash: encryptedVo.keyHash,
      activationLimit,
      status,
      soldAt,
      productId: Number(productId),
      supplierId: Number(supplierId),
    });
  }
}
