import PaymentConfirmationDTO from '../../dto/paymentConfirmationDTO/PaymentConfirmationDTO.js';
export default class PaymentConfirmationMappers {
  static toDTO(entity) {
    return PaymentConfirmationDTO.fromEntity(entity);
  }
}
