import Price from '../../valuesObjects/orderItemsVo/Price.js';
import Quantity from '../../valuesObjects/orderItemsVo/Quantity.js';
import OrdersItemsEntity from '../../entities/orderItemEntity/OrderItemEntity.js';
import ResponseError from '../../../error/ResponseError.js';

export default class OrderItemsFactory {
  static create({ id, product, quantity, orderId }) {
    const quantityVo = new Quantity(quantity);
    const priceVo = new Price(product.price);

    if (quantityVo.quantity > product.stock) {
      throw new ResponseError(400, `Insufficient stock for product ID ${product.id}`);
    }

    const orderItemsEntity = new OrdersItemsEntity({
      id,
      quantity: quantityVo.quantity,
      price: priceVo.price,
      productId: product.id,
      orderId: orderId,
    });
    return orderItemsEntity;
  }
}
