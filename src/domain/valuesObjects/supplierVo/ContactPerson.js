import logger from '../../../configuration/logging.js';
import ResponseError from '../../../error/ResponseError.js';

export default class ContactPerson {
  constructor(contactPerson) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    if (!phoneRegex.test(contactPerson)) {
      logger.error(`Invalid phone number format: ${JSON.stringify(contactPerson)}`);
      throw new ResponseError(400, 'not including phone number format');
    }
    if (typeof contactPerson === 'number' || contactPerson.length < 10) {
      throw new ResponseError(
        400,
        'Contact Person must be a valid phone number with at least 10 digits'
      );
    }
    this.contactPerson = contactPerson;
  }
}
