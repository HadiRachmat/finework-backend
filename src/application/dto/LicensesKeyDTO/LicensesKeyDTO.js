import ProductDTO from '../../dto/productsDTO/ProductDTO.js';

export default class LicensesKeyDTO {
  constructor({
    id,
    encryptedKey,
    keyHash,
    plainText,
    activationLimit,
    status,
    soldAt,
    ownerId = null,
    activatedBy = null,
    activatedAt = null,
    productId,
    product,
    supplierId,
    supplier,
  }) {
    this.id = id;
    this.encryptedKey = encryptedKey;
    this.keyHash = keyHash;
    this.plainText = plainText;
    this.activationLimit = activationLimit;
    this.status = status;
    this.soldAt = soldAt;
    this.ownerId = ownerId;
    this.activatedBy = activatedBy;
    this.activatedAt = activatedAt;
    this.productId = productId;
    this.product = product ? new ProductDTO(product) : null;
    this.supplierId = supplierId;
    this.supplier = supplier;
  }

  static fromEntity(entity) {
    return new LicensesKeyDTO({
      id: entity.getId(),
      encryptedKey: entity.getEncryptedKey(),
      keyHash: entity.getKeyHash(),
      plainText: entity.getPlainText(),
      activationLimit: entity.getActivationLimit(),
      status: entity.getStatus(),
      soldAt: entity.getSoldAt(),
      ownerId: entity.getOwnerId(),
      activatedBy: entity.getActivatedBy(),
      activatedAt: entity.getActivatedAt(),
      productId: entity.getProductId(),
      product: entity.getProduct(),
      supplierId: entity.getSupplierId(),
      supplier: entity.getSupplier(),
    });
  }

  static fromEntityCustomer(entity) {
    return new LicensesKeyDTO({
      id: entity.getId(),
      encryptedKey: entity.getEncryptedKey(),
      keyHash: entity.getKeyHash(),
      plainText: entity.getPlainText(),
      status: entity.getStatus(),
      soldAt: entity.getSoldAt(),
      ownerId: entity.getOwnerId(),
      activatedBy: entity.getActivatedBy(),
      activatedAt: entity.getActivatedAt(),
      productId: entity.getProductId(),
      product: entity.getProduct(),
    });
  }
}
