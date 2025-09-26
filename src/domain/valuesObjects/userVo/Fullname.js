import ResponseError from '../../../error/ResponseError.js';

export default class Fullname {
  constructor(fullname) {
    if (typeof fullname !== 'string') {
      throw new ResponseError(400, 'fullname must be a string');
    }
    if (fullname.length < 3 || fullname.length > 100) {
      throw new ResponseError(400, 'fullname must be between 3 and 100 characters');
    }
    this.fullname = fullname;
  }
}
