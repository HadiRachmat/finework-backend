export default class CartEntity {
  constructor({ id, userId, status, cartItems, user } = {}) {
    this.id = id;
    this.userId = userId;
    this.status = status;
    // only set cartItems when provided to avoid passing `null` to repositories/prisma
    if (typeof cartItems !== 'undefined') this.cartItems = cartItems;
    // only set user when provided to avoid passing `undefined` as explicit property
    if (typeof user !== 'undefined') this.user = user;
  }

  getId() {
    return this.id;
  }

  getUserId() {
    return this.userId;
  }

  getStatus() {
    return this.status;
  }

  getCartItems() {
    return this.cartItems;
  }
  getUser() {
    return this.user;
  }
}
