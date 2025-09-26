import ResponseError from '../../../error/ResponseError.js';

export default class FileSize {
  constructor(filesize) {
    if (typeof filesize !== 'number' || filesize < 0) {
      throw new ResponseError(400, 'Invalid filesize');
    }
    this.filesize = filesize;
  }
}
