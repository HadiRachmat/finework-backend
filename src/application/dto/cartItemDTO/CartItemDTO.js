export default class CartItemDTO {
  constructor({ id, cartId, productId, quantity, price }) {
    this.id = id;
    this.cartId = cartId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
  static fromEntity(cartItemEntity) {
    return new CartItemDTO({
      id: cartItemEntity.getId(),
      cartId: cartItemEntity.getCartId(),
      productId: cartItemEntity.getProductId(),
      quantity: cartItemEntity.getQuantity(),
      price: cartItemEntity.getPrice(),
    });
  }
}
