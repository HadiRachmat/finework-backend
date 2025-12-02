import ResponseError from '../../../error/ResponseError.js';

export default class Code {
  constructor(code) {
    if (typeof code !== 'string' || code.trim().length === 0) {
      throw new ResponseError(400, 'Invalid field of code, must be a non-empty string');
    }
    if (!code.startsWith('PAY')) {
      throw new ResponseError(400, 'Invalid field of code, must start with "PAY"');
    }
    this.code = code;
  }
}
