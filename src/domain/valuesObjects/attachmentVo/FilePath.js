import ResponseError from "../../../error/ResponseError.js";

export default class FilePath {
  constructor(filepath) {
    if (typeof filepath !== 'string' || filepath.trim() === '') {
      throw new ResponseError(400, 'Invalid filepath');
    }
    this.filepath = filepath;
  }
}