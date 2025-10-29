import ResponseError from '../../../error/ResponseError.js';

export default class Price {
  constructor(price) {
    if (typeof price !== 'string') {
      throw new ResponseError(400, 'invalid, price is must be a String not number');
    }

    this.price = price;
  }
}
