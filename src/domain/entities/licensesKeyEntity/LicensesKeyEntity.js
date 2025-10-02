export default class LicenseKeyEntity {
  constructor({
    id,
    encryptedKey,
    keyHash,
    plainText,
    activationLimit,
    status,
    soldAt,
    productId = null,
    product,
    supplierId = [],
  }) {
    this.id = id;
    this.encryptedKey = encryptedKey;
    this.keyHash = keyHash;
    this.activationLimit = activationLimit;
    this.status = status;
    this.soldAt = soldAt;
    this.plainText = plainText || null;
    this.productId = productId || null;
    this.product = product;
    this.supplierId = supplierId || null;
  }

  getId() {
    return this.id;
  }

  getEncryptedKey() {
    return this.encryptedKey;
  }

  getKeyHash() {
    return this.keyHash;
  }

  getPlainText() {
    return this.plainText;
  }

  getActivationLimit() {
    return this.activationLimit;
  }

  getStatus() {
    return this.status;
  }

  getSoldAt() {
    return this.soldAt;
  }

  getProductId() {
    return this.productId;
  }

  getProduct() {
    return this.product;
  }

  getSupplier() {
    return this.supplierId;
  }
}
