import logger from '../../../configuration/logging.js';
import ResponseError from '../../../error/ResponseError.js';

export default class Contact {
  constructor(contact) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    if (!phoneRegex.test(contact)) {
      logger.error(`Invalid phone number format: ${JSON.stringify(contact)}`);
      throw new ResponseError(400, 'not including phone number format');
    }
    if (typeof contact === 'number' || contact.length < 10) {
      throw new ResponseError(400, 'Contact must be a valid phone number with at least 10 digits');
    }
    this.contact = contact;
  }
}
