import CartDTO from '../../dto/cartDTO/CartDTO.js';

export default class CartMappers {
  static toDTO(cartEntity) {
    return CartDTO.fromEntity(cartEntity);
  }
}
