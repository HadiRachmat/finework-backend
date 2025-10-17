export default class OrdersItemsEntity {
  constructor({ id, quantity, price, orderId, productId }) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.orderId = orderId;
    this.productId = productId;
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

  getOrderId() {
    return this.orderId;
  }

  getProductId() {
    return this.productId;
  }
}
