import * as CONSTANT from '../../../configuration/Constant.js';
import ResponseError from '../../../error/ResponseError.js';

export default class Status {
  constructor(status) {
    const validStatuses = [CONSTANT.BASE_CART_STATUS_OPEN, CONSTANT.BASE_CART_STATUS_CANCELLED];
    if (!validStatuses.includes(status)) {
      throw new ResponseError(400, `invalid, status must be one of: ${validStatuses.join(', ')}`);
    }
    this.status = status;
  }
}
