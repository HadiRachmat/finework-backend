import ResponseError from '../../../error/ResponseError.js';

export default class supplierName {
  constructor(supplierName) {
    if (typeof supplierName !== 'string' || supplierName.length < 3) {
      throw new ResponseError(400, 'Supplier Name must be a string with at least 3 characters');
    }
    this.supplierName = supplierName;
  }
}
