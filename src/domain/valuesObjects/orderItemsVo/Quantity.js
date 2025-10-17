import ResponseError from '../../../error/ResponseError.js';

export default class Quantity {
  constructor(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new ResponseError(400, 'Quantity must be a positive integer');
    }
    this.quantity = quantity;
  }
}
