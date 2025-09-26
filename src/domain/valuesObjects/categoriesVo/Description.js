import ResponseError from '../../../error/ResponseError.js';

export default class Description {
  constructor(description) {
    if (description && typeof description !== 'string') {
      throw new ResponseError(400, 'description must be sting dataType');
    }
    if (description && description.trim().length < 3) {
      throw new ResponseError(400, 'Description must be at least 3 characters long');
    }
    if (description && description.trim().length > 255) {
      throw new ResponseError(400, 'Description must be less than 255 characters long');
    }
    this.description = description;
  }
}
