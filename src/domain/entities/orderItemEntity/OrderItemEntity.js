export default class OrdersItemsEntity {
  constructor({ id, quantity, price, productId, product, orderId, order }) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.productId = productId;
    this.product = product ?? null;
    this.orderId = orderId;
    this.order = order ?? null;
  }

  getId() {
    return this.id;
  }

  getQuantity() {
    return this.quantity;
  }

  getPrice() {
    return this.price;
  }

  getProductId() {
    return this.productId;
  }
}
