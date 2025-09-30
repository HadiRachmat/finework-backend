import ResponseError from '../../../error/ResponseError.js';
import * as CONTACT from '../../../configuration/Constant.js';

export default class Status {
  constructor(status) {
    const validatedStatus = [CONTACT.BASE_STATUS_ACTIVE, CONTACT.BASE_STATUS_INACTIVE];
    if (!validatedStatus.includes(status)) {
      throw new ResponseError(
        400,
        `status must be ${CONTACT.BASE_STATUS_ACTIVE} or ${CONTACT.BASE_STATUS_INACTIVE}`
      );
    }
    if (typeof status !== 'number') {
      throw new ResponseError(400, 'Invalid to send Status');
    }
    this.status = status;
  }
}
