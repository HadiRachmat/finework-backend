import OrdersEntity from '../../entities/orderEntity/OrdersEntity.js';
import Amount from '../../valuesObjects/ordersVo/Amount.js';
import Status from '../../valuesObjects/ordersVo/Status.js';
import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANT from '../../../configuration/Constant.js';

export default class OrderFactory {
  static create({ id, userId, status, orderItems = [] }) {
    const totalAmount = orderItems.reduce(
      (sum, items) => sum + items.getPrice() * items.getQuantity(),
      0
    );
    const amountVo = new Amount(totalAmount.toString());
    const statusVo = new Status(status || CONSTANT.BASE_ORDER_STATUS_PENDING);

    return new OrdersEntity({
      id,
      userId,
      amount: amountVo.amount,
      status: statusVo.status,
      orderItems,
    });
  }
}
