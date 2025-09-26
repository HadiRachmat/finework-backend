import ResponseError from '../../../error/ResponseError.js';

export default class FileName {
  constructor(filename) {
    if (!filename) {
      throw new ResponseError(400, 'please provide filename');
    }
    if (typeof filename !== 'string' || filename.trim() === '') {
      throw new ResponseError(400, 'Invalid filename');
    }
    this.filename = filename;
  }
}
