import Amount from '../../valuesObjects/paymentVo/Amount.js';
import Method from '../../valuesObjects/paymentVo/Method.js';
import Code from '../../valuesObjects/paymentVo/Code.js';
import Status from '../../valuesObjects/paymentVo/Status.js';
import OrderId from '../../valuesObjects/paymentVo/OrderId.js';
import ResponseError from '../../../error/ResponseError.js';

export default class PaymentFactory {
  static createPayment({ amount, method, code, status, orderId } = {}) {
    const AmountVo = new Amount(amount);
    const MethodVo = new Method(method);
    const CodeVo = new Code(code);
    const StatusVo = new Status(status);
    const OrderIdVo = new OrderId(orderId);

    return {
      amount: AmountVo.amount,
      method: MethodVo.method,
      code: CodeVo.code,
      status: StatusVo.status,
      orderId: OrderIdVo.orderId,
    };
  }
}
