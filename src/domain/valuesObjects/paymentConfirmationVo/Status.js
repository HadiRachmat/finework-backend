import * as CONSTANT from '../../../configuration/Constant.js';
import ResponseError from '../../../error/ResponseError.js';

export default class Status {
  constructor(status) {
    const validStatuses = [
      CONSTANT.BASE_PAYMENT_STATUS_PENDING,
      CONSTANT.BASE_PAYMENT_STATUS_COMPLETED,
      CONSTANT.BASE_PAYMENT_STATUS_FAILED,
      CONSTANT.BASE_PAYMENT_STATUS_PROCESSING,
    ];
    if (typeof status !== 'number' || !validStatuses.includes(status)) {
      throw new ResponseError(
        400,
        `Invalid field of status, must be one of ${validStatuses.join(', ')}`
      );
    }
    this.status = status;
  }
}
