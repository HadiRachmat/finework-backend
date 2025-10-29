import ResponseError from '../../../error/ResponseError.js';

export default class Quantity {
  constructor(quantity) {
    if (typeof quantity !== 'number') {
      throw new ResponseError(400, 'invalid, quantity is must be a Number not string');
    }
    this.quantity = quantity;
  }
}
