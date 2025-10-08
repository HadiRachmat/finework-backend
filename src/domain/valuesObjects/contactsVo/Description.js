import ResponseError from '../../../error/ResponseError.js';

export default class Description {
  constructor(description) {
    if (typeof description !== 'string') {
      return new ResponseError(400, 'Description must be a string');
    }

    if (description.length < 10 || description.length > 200) {
      return new ResponseError(400, 'Description must be between 10 and 200 characters');
    }

    if (description === null || description === undefined || description === '') {
      this.description = null;
      return;
    }

    this.description = description;
  }
}
