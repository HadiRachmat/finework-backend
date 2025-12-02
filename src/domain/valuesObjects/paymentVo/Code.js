import ResponseError from '../../../error/ResponseError.js';

export default class Code {
  constructor(code) {
    if (typeof code !== 'string' || code.length === 0) {
      throw new ResponseError(400, ' Invalid payment code value ');
    }
    this.code = code;
  }
}
