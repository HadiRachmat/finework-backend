import ResponseError from '../../../error/ResponseError.js';

export default class Amount {
  constructor(amount) {
    if (typeof amount !== 'string') {
      throw new ResponseError(400, ' Invalid payment amount value ');
    }
    this.amount = amount;
  }
}
