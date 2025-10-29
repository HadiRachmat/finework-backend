export default class CartItemsEntity {
  constructor({ id, cartId, productId, quantity, price }) {
    this.id = id;
    this.cartId = cartId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }

  getId() {
    return this.id;
  }

  getCartId() {
    return this.cartId;
  }

  getProductId() {
    return this.productId;
  }

  getQuantity() {
    return this.quantity;
  }

  getPrice() {
    return this.price;
  }
}
