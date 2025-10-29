import ResponseError from "../../../error/ResponseError.js";
export default class UserId {
  constructor(userId){
    if(typeof userId !== 'number'){
      throw new ResponseError(400, 'invalid, userId is must be a Number not string');
    }
    this.userId = userId;
  }
}