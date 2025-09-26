import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANTS from '../../../configuration/Constant.js';

export default class Status {
  constructor(status) {
    const validateStatus = [CONSTANTS.BASE_STATUS_ACTIVE, CONSTANTS.BASE_STATUS_INACTIVE];
    if (typeof status !== 'number') {
      throw new ResponseError(400, 'status must be a number');
    }
    if (!validateStatus.includes(status)) {
      throw new ResponseError(400, 'status is not valid');
    }
    this.status = status;
  }
}
