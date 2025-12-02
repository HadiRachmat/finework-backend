import ResponseError from '../../../error/ResponseError.js';

export default class PaymentId {
  constructor(paymentId) {
    if (typeof paymentId !== 'number') {
      throw new ResponseError(400, 'Invalid field of payment ID, must be a number');
    }

    this.paymentId = paymentId;
  }
}
