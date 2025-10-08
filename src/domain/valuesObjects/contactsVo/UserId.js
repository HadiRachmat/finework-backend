import ResponseError from '../../../error/ResponseError.js';

export default class UserId {
  constructor(userId) {
    if (typeof userId !== 'number') {
      throw new ResponseError(400, 'UserId must be a Number');
    }
    this.userId = userId;
  }
}
