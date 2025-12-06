import Status from '../../valuesObjects/paymentConfirmationVo/Status.js';
import PaymentEntity from '../../entities/paymentEntity/PaymentEntity.js';

export default class PaymentFactory {
  static updateStatusPaymentRequest(status) {
    const StatusVo = new Status(status);

    const payment = new PaymentEntity({
      status: StatusVo.status,
    });

    return payment;
  }
}
