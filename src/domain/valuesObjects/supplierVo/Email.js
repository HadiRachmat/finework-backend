import ResponseError from '../../../error/ResponseError.js';

export default class Email {
  constructor(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ResponseError(400, 'Invalid email format');
    }
    this.email = email;
  }
}
