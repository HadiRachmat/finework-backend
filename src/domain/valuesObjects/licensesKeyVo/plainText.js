import ResponseError from '../../../error/ResponseError.js';

export default class PlainText {
  constructor(plainText) {
    if (typeof plainText !== 'string') {
      throw new ResponseError(400, 'Invalid plain text');
    }
    this.plainText = plainText;
  }
}
