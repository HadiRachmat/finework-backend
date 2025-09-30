import ResponseError from '../../../error/ResponseError.js';

export default class Name {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new ResponseError(400, `forbidden for give name of ${name}`);
    }
    if (name.length < 3 || name.length > 50) {
      throw new ResponseError(400, `name must be between 3 and 50 characters long`);
    }
    this.name = name;
  }
}
