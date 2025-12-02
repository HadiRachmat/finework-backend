import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANT from '../../../configuration/Constant.js';

export default class Method {
  constructor(method) {
    const validatedMethod = [
      CONSTANT.BASE_METHOD_PAYMENT_EWALET_TRANSFER,
      CONSTANT.BASE_METHOD_PAYMENT_BANK_TRANSFER,
      CONSTANT.BASE_METHOD_PAYMENT_CASH,
    ];
    if (!validatedMethod.includes(method)) {
      throw new ResponseError(400, ' Invalid payment method value ');
    }
    this.method = method;
  }
}
