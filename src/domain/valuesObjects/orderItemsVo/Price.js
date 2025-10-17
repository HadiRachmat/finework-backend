import ResponseError from '../../../error/ResponseError.js';

export default class Price {
  constructor(price) {
    if (!price || isNaN(price) || price < 0) {
      throw new ResponseError(400, 'Price must be a non-negative number');
    }
    this.price = price;
  }
}
