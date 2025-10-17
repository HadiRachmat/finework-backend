import OrdersEntity from '../../entities/orderEntity/OrdersEntity.js';
import OrdersItemsEntity from '../../entities/orderItemEntity/OrderItemEntity.js';
import Amount from '../../valuesObjects/ordersVo/Amount.js';
import Status from '../../valuesObjects/ordersVo/Status.js';
import Quantity from '../../valuesObjects/orderItemsVo/Quantity.js';
import Price from '../../valuesObjects/orderItemsVo/Price.js';
import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANT from '../../../configuration/Constant.js';

export default class OrderFactory {
  static create({ userId, orders, products }) {
    if (!userId) {
      throw new ResponseError(400, 'userId is required to create an order');
    }

    if (!orders || orders.length === 0) {
      throw new ResponseError(400, 'Order must have at least one item');
    }

    const orderItems = orders.map((item) => {
      const product = products.find((prod) => prod.getId() === item.productId);
      if (!product) {
        throw new ResponseError(400, `Product with ID ${item.productId} not found`);
      }

      const quantityVo = new Quantity(item.quantity);
      const priceVo = new Price(product.getPrice());
      return new OrdersItemsEntity({
        id: null,
        quantity: quantityVo.quantity,
        price: priceVo.price,
        orderId: null,
        productId: product.getId(),
      });
    });

    const totalAmount = orderItems.reduce((total, item) => {
      return total + item.getPrice() * item.getQuantity();
    }, 0);

    const amountVo = new Amount(totalAmount.toString());
    const statusVo = new Status(CONSTANT.BASE_PAYMENT_STATUS_PENDING);
    return new OrdersEntity({
      id: null,
      userId,
      amount: amountVo.amount,
      status: statusVo.status,
      orderItems: orderItems,
    });
  }
}
