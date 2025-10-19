import OrdersEntity from '../../entities/orderEntity/OrdersEntity.js';
import OrdersItemsEntity from '../../entities/orderItemEntity/OrderItemEntity.js';
import Amount from '../../valuesObjects/ordersVo/Amount.js';
import Status from '../../valuesObjects/ordersVo/Status.js';
import Quantity from '../../valuesObjects/orderItemsVo/Quantity.js';
import Price from '../../valuesObjects/orderItemsVo/Price.js';
import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANT from '../../../configuration/Constant.js';

export default class OrderFactory {
  static create({ id, userId, orderItems }) {
    const totalAmount = orderItems.reduce(
      (sum, items) => sum + items.getPrice() * items.getQuantity(),
      0
    );
    const amountVo = new Amount(totalAmount.toString());
    const statusVo = new Status(CONSTANT.BASE_PAYMENT_STATUS_PENDING);

    const orderEntity = new OrdersEntity({
      id: id,
      userId,
      amount: amountVo.amount,
      status: statusVo.status,
      orderItems: orderItems,
    });
    return orderEntity;
  }
}
