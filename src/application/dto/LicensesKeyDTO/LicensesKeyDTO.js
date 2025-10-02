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
    productId,
    product,
    supplierId,
  }) {
    this.id = id;
    this.encryptedKey = encryptedKey;
    this.keyHash = keyHash;
    this.plainText = plainText;
    this.activationLimit = activationLimit;
    this.status = status;
    this.soldAt = soldAt;
    this.productId = productId;
    this.product = product ? new ProductDTO(product) : null;;
    this.supplierId = supplierId;
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
      productId: entity.getProductId(),
      product: entity.getProduct(),
      supplierId: entity.getSupplier(),
    });
  }
}
