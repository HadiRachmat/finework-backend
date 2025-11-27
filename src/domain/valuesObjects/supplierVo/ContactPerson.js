import logger from '../../../configuration/logging.js';
import ResponseError from '../../../error/ResponseError.js';

export default class ContactPerson {
  constructor(contactPerson) {
    if (typeof contactPerson !== 'string' || contactPerson.trim() === '') {
      logger.error('ContactPerson must be a non-empty string');
      throw new ResponseError('ContactPerson must be a non-empty string', 400);
    }
    this.contactPerson = contactPerson;
  }
}
