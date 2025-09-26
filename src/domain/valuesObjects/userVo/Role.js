import ResponseError from '../../../error/ResponseError.js';
import * as CONSTANTS from '../../../configuration/Constant.js';

export default class Role {
  constructor(role) {
    const validateRole = [
      CONSTANTS.BASE_ROLE_ADMIN,
      CONSTANTS.BASE_ROLE_STAFF,
      CONSTANTS.BASE_ROLE_CUSTOMER,
    ];
    if (!role) {
      throw new ResponseError(400, 'role is required');
    }
    if (typeof role !== 'number') {
      throw new ResponseError(400, 'role must be a number');
    }
    if (!validateRole.includes(role)) {
      throw new ResponseError(400, 'role is not valid');
    }
    this.role = role;
  }
}
