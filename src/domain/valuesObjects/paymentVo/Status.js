import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANT from '../../../configuration/Constant.js';

export default class Status {
  constructor(status) {
    const validatedStatus = [
      CONSTANT.BASE_PAYMENT_STATUS_PENDING,
      CONSTANT.BASE_PAYMENT_STATUS_COMPLETED,
      CONSTANT.BASE_PAYMENT_STATUS_FAILED,
    ];
    if (!validatedStatus.includes(status)) {
      throw new ResponseError(400, ' Invalid payment status value ');
    }
    this.status = status;
  }
}
