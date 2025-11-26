import EncryptedKey from '../../valuesObjects/licensesKeyVo/EncryptedKey.js';
import PlainText from '../../valuesObjects/licensesKeyVo/plainText.js';
import LicensesKeyEntity from '../../entities/licensesKeyEntity/LicensesKeyEntity.js';
import OwnerId from '../../valuesObjects/licensesKeyVo/ownerId.js';
import Status from '../../valuesObjects/licensesKeyVo/Status.js';
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

  // ...existing code...
  static update(request, existingLicense, status, ownerId) {
    let encryptedKey = existingLicense.getEncryptedKey();
    let keyHash = existingLicense.getKeyHash();
    let plainText = existingLicense.getPlainText();

    const OwnerIdVO = new OwnerId(ownerId);
    const StatusVO = new Status(status);

    // Jika admin mengirim plainText baru, enkripsi ulang
    if (request.plainText) {
      const plainTextVo = new PlainText(request.plainText);
      const encrypted = LicenseHelper.encryptKey(plainTextVo.plainText);
      encryptedKey = encrypted.encryptedKey;
      keyHash = encrypted.keyHash;
      plainText = plainTextVo.plainText;
    }

    // Tentukan nilai akhir dengan fallback yang aman
    const finalStatus =
      request.status !== undefined && request.status !== null
        ? Number(request.status)
        : StatusVO && StatusVO.status !== undefined
        ? Number(StatusVO.status)
        : Number(existingLicense.getStatus());

    let finalOwnerId;
    if (request.ownerId !== undefined && request.ownerId !== null) {
      finalOwnerId = Number(request.ownerId);
      if (Number.isNaN(finalOwnerId)) finalOwnerId = null;
    } else if (OwnerIdVO && OwnerIdVO.ownerId !== undefined && OwnerIdVO.ownerId !== null) {
      finalOwnerId = Number(OwnerIdVO.ownerId);
      if (Number.isNaN(finalOwnerId)) finalOwnerId = null;
    } else if (typeof existingLicense.getOwnerId === 'function') {
      finalOwnerId = existingLicense.getOwnerId();
    } else {
      finalOwnerId = null;
    }

    return new LicensesKeyEntity({
      id: existingLicense.getId(),
      plainText,
      encryptedKey,
      keyHash,
      activationLimit: Number(request.activationLimit ?? existingLicense.getActivationLimit()),
      status: finalStatus,
      soldAt: request.soldAt ?? existingLicense.getSoldAt(),
      ownerId: finalOwnerId,
      productId: Number(request.productId ?? existingLicense.getProductId()),
      supplierId: Number(request.supplierId ?? existingLicense.getSupplier()),
    });
  }
  // ...existing code...

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
