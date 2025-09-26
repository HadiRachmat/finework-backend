import Fullname from '../../valuesObjects/userVo/Fullname.js';
import Email from '../../valuesObjects/userVo/Email.js';
import Password from '../../valuesObjects/userVo/Password.js';
import Role from '../../valuesObjects/userVo/Role.js';
import Status from '../../valuesObjects/userVo/Status.js';
import UserEntity from '../../entities/userEntity/UserEntity.js';

export default class AdminUserFactory {
  static create({ fullname, email, password, role, status }) {
    const userFullname = new Fullname(fullname);
    const userEmail = new Email(email);
    const userPassword = new Password(password);
    const userRole = new Role(role);
    const userStatus = new Status(status);

    const user = new UserEntity({
      fullname: userFullname,
      email: userEmail,
      password: userPassword,
      role: userRole,
      status: userStatus,
    });
    return user;
  }
}
