import ResponseError from '../../../error/ResponseError.js';

export default class Contact {
  constructor(contact) {
    if (typeof contact !== 'string') {
      throw new ResponseError(400, 'Contact must be a string');
    }
    if (contact.length < 5 || contact.length > 50) {
      throw new ResponseError(400, 'Contact must be between 5 and 50 characters');
    }
    this.contact = contact;
  }
}
