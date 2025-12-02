import ResponseError from '../../../error/ResponseError.js';

export default class OrderId {
  constructor(orderId) {
    if (typeof orderId !== 'number') {
      throw new ResponseError(400, 'data type must be number');
    }
    this.orderId = orderId;
  }
}
