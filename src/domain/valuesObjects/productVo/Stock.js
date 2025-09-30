import ResponseError from '../../../error/ResponseError.js';

export default class Status {
  constructor(stock) {
    if (typeof stock !== 'number') {
      throw new ResponseError(400, 'Invalid to send Stock');
    }
    this.stock = stock;
  }
}
