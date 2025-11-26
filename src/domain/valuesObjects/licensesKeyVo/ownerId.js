import logger from '../../../configuration/logging.js';
import ResponseError from '../../../error/ResponseError.js';

export default class OwnerId {
  constructor(ownerId) {
    if (ownerId === null || ownerId === undefined) {
      return null;
    }
    if (typeof ownerId !== 'number') {
      throw new ResponseError(400, 'Invalid ownerId value');
    }
    this.ownerId = ownerId;
  }
}
