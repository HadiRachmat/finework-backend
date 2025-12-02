import PaymentDTO from '../../dto/paymentsDTO/PaymentsDTO.js';

export default class PaymentMappers {
  static toDTO(entity) {
    return PaymentDTO.fromEntity(entity);
  }
}
