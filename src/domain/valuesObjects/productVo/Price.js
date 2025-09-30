import ResponseError from '../../../error/ResponseError.js';

export default class Price {
  constructor(price) {
    if (typeof price !== 'string') {
      throw new ResponseError(400, 'Invalid to send Price');
    }
    if (price.length < 1 || price.length > 100) {
      throw new ResponseError(400, 'price must be between 1 and 100 characters');
    }
    this.price = price;
  }
}
