import Fullname from '../../valuesObjects/userVo/Fullname.js';
import Email from '../../valuesObjects/userVo/Email.js';
import UserEntity from '../../entities/userEntity/UserEntity.js';
import ResponseError from '../../../error/ResponseError.js';

export default class UserFactory {
  static updateProfile(fullname, email) {
    const fullnameVo = new Fullname(fullname);
    const emailVo = new Email(email);

    const userEntity = new UserEntity({
      fullname: fullnameVo.fullname,
      email: emailVo.email,
    });

    return userEntity;
  }
}
