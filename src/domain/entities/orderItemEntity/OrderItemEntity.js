export default class OrdersItemsEntity {
  constructor({ id, quantity, price, productId }) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
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

  getProductId() {
    return this.productId;
  }
}
