export default class PaymentDTO {
  constructor({ id, amount, method, code, status, order = null } = {}) {
    this.id = id;
    this.amount = amount;
    this.method = method;
    this.code = code;
    this.status = status;
    this.order = order;
  }

  static fromEntity(paymentEntity) {
    return new PaymentDTO({
      id: paymentEntity.getId(),
      amount: paymentEntity.getAmount(),
      method: paymentEntity.getMethod(),
      code: paymentEntity.getCode(),
      status: paymentEntity.getStatus(),
      order: paymentEntity.getOrder(),
    });
  }
}
