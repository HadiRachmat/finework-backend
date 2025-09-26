import ResponseError from '../../../error/ResponseError.js';

export default class AttachemtnAbleId {
  constructor(attachmentAbleId) {
    if (!attachmentAbleId) {
      throw new ResponseError(400, 'please provide attachmentAbleId');
    }
    if (typeof attachmentAbleId !== 'number') {
      throw new ResponseError(400, 'Invalid attachmentAbleId');
    }
    this.attachmentAbleId = attachmentAbleId;
  }
}
