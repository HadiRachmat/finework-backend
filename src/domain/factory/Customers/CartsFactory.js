import CartEntity from '../../entities/CartEntity/CartEntity.js';
import CartItemsEntity from '../../entities/CartItemsEntity/CartItemsEntity.js';
import Price from '../../valuesObjects/CartItemsVo/Price.js';
import Quantity from '../../valuesObjects/CartItemsVo/Quantity.js';
import Status from '../../valuesObjects/CartVo/Status.js';
import UserId from '../../valuesObjects/CartVo/UserId.js';

export default class CartsFactory {
  static createCart({ id, userId, status }) {
    // 🏗️ Bentuk entity Cart utama
    return new CartEntity({
      id,
      userId: new UserId(userId).userId,
      status: new Status(status).status,
      // cartItems: cartItems,
    });
  }

  static createCartItem({ id, productId, quantity, price }) {
    return new CartItemsEntity({
      id,
      productId,
      quantity: new Quantity(quantity).quantity,
      price: new Price(price).price,
    });
  }
}
