import ResponseError from "../../../error/ResponseError.js";

export default class FileType {
  constructor(filetype) {
    if (typeof filetype !== 'string' || filetype.trim() === '') {
      throw new ResponseError(400, 'Invalid filetype');
    }
    this.filetype = filetype;
  }
}