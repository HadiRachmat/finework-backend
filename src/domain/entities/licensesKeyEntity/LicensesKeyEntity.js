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
    supplierId,
    supplier = [],
    ownerId = null,
    iid = null,
    activatedBy = null,
    activatedAt = null,
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
    this.supplier = supplier || [];
    this.ownerId = ownerId || null;
    this.iid = iid || null; // stored hashed IID
    this.activatedBy = activatedBy || null;
    this.activatedAt = activatedAt || null;
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

  getSupplierId() {
    return this.supplierId;
  }

  getSupplier() {
    return this.supplier;
  }
  
  getOwnerId() {
    return this.ownerId;
  }

  getIid() {
    return this.iid;
  }

  getActivatedBy() {
    return this.activatedBy;
  }

  getActivatedAt() {
    return this.activatedAt;
  }
}
