import Fullname from '../../valuesObjects/userVo/Fullname.js';
import Email from '../../valuesObjects/userVo/Email.js';
import Password from '../../valuesObjects/userVo/Password.js';
import Role from '../../valuesObjects/userVo/Role.js';
import Status from '../../valuesObjects/userVo/Status.js';
import PasswordEncryptedService from '../../services/PasswordEncryptedService.js';
import UserEntity from '../../entities/userEntity/UserEntity.js';
import ResponseError from '../../../error/ResponseError.js';

export default class AuthFactory {
  static async register({ fullname, email, password, role, status }) {
    const userFullname = new Fullname(fullname);
    const userEmail = new Email(email.trim().toLowerCase());
    const userPassword = new Password(password);
    const userRole = new Role(role);
    const userStatus = new Status(status);

    const hashedPassword = await PasswordEncryptedService.hashPassword(userPassword.password);

    const user = new UserEntity({
      fullname: userFullname.fullname,
      email: userEmail.email,
      password: hashedPassword,
      role: userRole.role || 3,
      status: userStatus.status,
    });
    return user;
  }

  static async login({ email, password, hashedPassword }) {
    const userEmail = new Email(email);
    const userPassword = new Password(password);

    const isPasswordMatch = await PasswordEncryptedService.comparePassword(
      password,
      hashedPassword
    );
    if (!isPasswordMatch) {
      throw new ResponseError(400, 'Invalid password: password does not match');
    }

    const login = new UserEntity({
      email: userEmail.email,
      password: hashedPassword,
    });
    return login;
  }
}
