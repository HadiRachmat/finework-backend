export default class PaymentConfirmationDTO {
  constructor({ id, bankName, bankAccountName, code, status, paymentId, payment } = {}) {
    this.id = id;
    this.bankName = bankName;
    this.bankAccountName = bankAccountName;
    this.code = code;
    this.status = status;
    this.paymentId = paymentId;
    this.payment = payment;
  }

  static fromEntity(entity) {
    return new PaymentConfirmationDTO({
      id: entity.getId(),
      bankName: entity.getBankName(),
      bankAccountName: entity.getBankAccountName(),
      code: entity.getCode(),
      status: entity.getStatus(),
      paymentId: entity.getPaymentId(),
      payment: entity.getPayment(),
    });
  }
}
