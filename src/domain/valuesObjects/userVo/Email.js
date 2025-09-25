import ResponseError from '../../../error/ResponseError.js';

export default class Email {
  constructor(email) {
    if (!email) {
      throw new ResponseError(400, 'email is required');
    }
    if (typeof email !== 'string') {
      throw new ResponseError(400, 'email must be a string');
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new ResponseError(400, 'email is not valid');
    }
    this.email = email;
  }
}
