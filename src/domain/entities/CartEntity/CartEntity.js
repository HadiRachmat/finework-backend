export default class CartEntity {
  constructor({ id, userId, status, cartItems }) {
    this.id = id;
    this.userId = userId;
    this.status = status;
    this.cartItems = cartItems ?? null;

  }

  getId() {
    return this.id;
  }

  getUserId() {
    return this.userId;
  }

  getStatus() {
    return this.status
  }

  getCartItems() {
    return this.cartItems;
  }
}
