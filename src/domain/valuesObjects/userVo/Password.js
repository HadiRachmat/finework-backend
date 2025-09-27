import ResponseError from '../../../error/ResponseError.js';

export default class Password {
  constructor(password) {
    if (typeof password !== 'string') {
      throw new ResponseError(400, 'password must be a string');
    }
    if (password.length < 6 || password.length > 50) {
      throw new ResponseError(400, 'password must be between 6 and 50 characters');
    }
    this.password = password;
  }
}
