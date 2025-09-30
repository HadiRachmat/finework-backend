import ResponseError from '../../../error/ResponseError.js';

export default class Description {
  constructor(description) {
    if (typeof description !== 'string') {
      throw new ResponseError(400, 'Invalid to send Description');
    }

    if (description.length < 10 || description > 255) {
      throw new ResponseError(400, 'description must be between 10 and 255 characters');
    }

    this.description = description
  }
}
