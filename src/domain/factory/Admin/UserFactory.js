import Fullname from '../../valuesObjects/userVo/Fullname.js';
import Email from '../../valuesObjects/userVo/Email.js';
import Password from '../../valuesObjects/userVo/Password.js';
import Role from '../../valuesObjects/userVo/Role.js';
import Status from '../../valuesObjects/userVo/Status.js';
import PasswordEncryptedService from '../../services/PasswordEncryptedService.js';
import UserEntity from '../../entities/userEntity/UserEntity.js';
import logger from '../../../configuration/logging.js';

export default class AdminUserFactory {
  static async create({ fullname, email, password, role, status }) {
    const userFullname = new Fullname(fullname);
    const userEmail = new Email(email);
    const userPassword = new Password(password);
    const userRole = new Role(role);
    const userStatus = new Status(status);

    const hashedPassword = await PasswordEncryptedService.hashPassword(userPassword.password);

    const user = new UserEntity({
      fullname: userFullname.fullname,
      email: userEmail.email,
      password: hashedPassword,
      role: userRole.role,
      status: userStatus.status,
    });
    return user;
  }

  static async update({ fullname, email, role, status }) {
    const userFullname = new Fullname(fullname);
    const userEmail = new Email(email);
    const userRole = new Role(role);
    const userStatus = new Status(status);

    const user = new UserEntity({
      fullname: userFullname.fullname,
      email: userEmail.email,
      role: userRole.role,
      status: userStatus.status,
    });
    return user;
  }
}
