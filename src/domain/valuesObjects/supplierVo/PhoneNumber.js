import ResponseError from '../../../error/ResponseError.js';

export default class PhoneNumber {
  constructor(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
      throw new ResponseError(400, 'Phone number must be a string with at least 10 digits');
    }
    this.phoneNumber = phoneNumber;
  }
}
