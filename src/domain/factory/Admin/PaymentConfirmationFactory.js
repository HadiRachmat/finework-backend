import Status from '../../valuesObjects/paymentConfirmationVo/Status.js';
import PaymentConfirmationEntity from '../../entities/paymentConfirmationEntity/PaymentConfirmationEntity.js';

export default class PaymentConfirmationFactory {
  static updateStatusPaymentConfirmationRequest (status)  {
    const StatusVo = new Status(status);
    
    const paymentConfirmation = new PaymentConfirmationEntity({
      status: Number(StatusVo.status),
    });
    
    return paymentConfirmation;
  }
}