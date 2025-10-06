import ResponseError from '../../../error/ResponseError.js';

export default class SupplierEntity {
  constructor(name){
    if (typeof name !== 'string' || name.length < 3) {
      throw new ResponseError(400, 'Name must be a string with at least 3 characters');
    }
    this.name = name;
  }
}