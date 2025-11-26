import ResponseError from "../../../error/ResponseError.js";
import * as CONSTANT from '../../../configuration/Constant.js';

export default class Status {
  constructor(status) {
    const validStatuses = [
      CONSTANT.BASE_LICENSES_STATUS_AVAILABLE,
      CONSTANT.BASE_LICENSES_STATUS_SOLD,
      CONSTANT.BASE_LICENSES_STATUS_ACTIVATED,
      CONSTANT.BASE_LICENSES_STATUS_DEACTIVATED,
    ];
    if (!validStatuses.includes(status)) {
      throw new ResponseError(400, 'Invalid status value');
    }
    if(status === null || status === undefined) {
     throw new ResponseError(400, 'Status is required');
    }
    
    this.status = status;
  }
}