export default class PaymentConfirmationEntity {
  constructor ({id, bankName, bankAccountName, code, status, paymentId, payment} ={}) {
    this.id = id;
    this.bankName = bankName;
    this.bankAccountName = bankAccountName;
    this.code = code;
    this.status = status;
    this.paymentId = paymentId;
    this.payment = payment;
  }
  getId() {
    return this.id;
  }
  getBankName() {
    return this.bankName;
  }
  getBankAccountName() {
    return this.bankAccountName;
  }
  getCode() {
    return this.code;
  }
  getStatus() {
    return this.status;
  }
  getPaymentId() {
    return this.paymentId;
  }
  getPayment() {
    return this.payment;
  }
}