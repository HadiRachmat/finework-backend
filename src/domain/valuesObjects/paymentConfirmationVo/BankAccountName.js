import ResponseError from '../../../error/ResponseError.js';

export default class BankAccountName {
  constructor(bankAccountName) {
    if (typeof bankAccountName !== 'string' || bankAccountName.trim().length === 0) {
      throw new ResponseError(
        400,
        'Invalid field of bank account name, must be a non-empty string'
      );
    }

    this.bankAccountName = bankAccountName;
  }
}
