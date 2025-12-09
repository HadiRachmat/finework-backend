export default class CartDTO {
  constructor({ id, status, cartItems }) {
    this.id = id;
    // this.userId = userId;
    this.status = status;
    this.cartItems = cartItems ?? [] ;
  }
  static getFromEntity(cartEntity) {
    return new CartDTO({
      id: cartEntity.getId(),
      // userId: cartEntity.getUserId(),
      status: cartEntity.getStatus(),
      cartItems: cartEntity.getCartItems(),
    });
  }
  static fromEntity(cartEntity) {
    return new CartDTO({
      id: cartEntity.getId(),
      // userId: cartEntity.getUserId(),
      status: cartEntity.getStatus(),
      cartItems: cartEntity.getCartItems(),
    });
  }
}
