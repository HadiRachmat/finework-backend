import ResponseError from '../../../error/ResponseError.js';

export default class BankName {
  constructor (bankName) {
    if (typeof bankName !== 'string' || bankName.trim().length === 0) {
      throw new ResponseError(400, 'Invalid field of bank name, must be a non-empty string');
    }

    this.bankName = bankName;
  }
}