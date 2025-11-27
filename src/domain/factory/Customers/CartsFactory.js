import CartEntity from '../../entities/CartEntity/CartEntity.js';
import CartItemsEntity from '../../entities/CartItemsEntity/CartItemsEntity.js';
import Price from '../../valuesObjects/CartItemsVo/Price.js';
import Quantity from '../../valuesObjects/CartItemsVo/Quantity.js';
import Status from '../../valuesObjects/CartVo/Status.js';
import UserId from '../../valuesObjects/CartVo/UserId.js';

export default class CartsFactory {
  static createCart({ id, userId, status, user, cartItems } = {}) {
    // 🏗️ Bentuk entity Cart utama
    // Jangan selalu sertakan `cartItems` sebagai array kosong — biarkan undefined
    // sehingga repository tidak akan meneruskan nested empty array ke Prisma.
    const payload = {
      id,
      status: new Status(status).status,
      user,
    };

    if (typeof userId !== 'undefined') payload.userId = new UserId(userId).userId;

    if (typeof cartItems !== 'undefined') payload.cartItems = cartItems;

    return new CartEntity(payload);
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
