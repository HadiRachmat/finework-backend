import CartItemDTO from '../../dto/cartItemDTO/CartItemDTO.js';

export default class CartItemMappers {
  static toDTO(cartItemEntity) {
    return CartItemDTO.fromEntity(cartItemEntity);
  }
}
