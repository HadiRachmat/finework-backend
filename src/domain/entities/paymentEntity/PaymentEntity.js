export default class PaymentEntity {
  constructor({ id, amount, method, code, status, orderId, order } = {}) {
    this.id = id;
    this.amount = amount;
    this.method = method;
    this.code = code;
    this.status = status;
    this.orderId = orderId;
    this.order = order;
  }
  getId() {
    return this.id;
  }
  getAmount() {
    return this.amount;
  }
  getMethod() {
    return this.method;
  }
  getCode() {
    return this.code;
  }
  getStatus() {
    return this.status;
  }
  getOrderId() {
    return this.orderId;
  }
  getOrder() {
    return this.order;
  }
}
