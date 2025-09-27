import ResponseError from "../../../error/ResponseError.js";

export default class AttachmentAbleType {
  constructor(attachmentAbleType) {
    const validTypes = [ 'product', 'user', 'payment_confirmation', 'testimonials']
    if (typeof attachmentAbleType !== 'string' || !validTypes.includes(attachmentAbleType)) {
      throw new ResponseError(400, 'Invalid attachmentable type =======');
    }
    this.attachmentAbleType = attachmentAbleType;
  }

}