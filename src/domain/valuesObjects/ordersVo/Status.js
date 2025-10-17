import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANT from '../../../configuration/Constant.js';

export default class Status {
  constructor(status) {
    const statusValues = [CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE];
    if (!statusValues.includes(status)) {
      throw new ResponseError(400, `status must be ${statusValues.join(' or ')}`);
    }
    this.status = status;
  }
}
