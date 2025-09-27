import ResponseError from '../../../error/ResponseError.js';

export default class Name {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new ResponseError(400, 'name must be str  ing dataType');
    }
    if (name.trim().length < 3) {
      throw new ResponseError(400, 'Name must be at least 3 characters long');
    }

    this.name = name;
  }
}
