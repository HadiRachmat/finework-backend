import PasswordEncrypted from '../../infrastructure/security/PasswordHash.js';
import ResponseError from '../../error/ResponseError.js';
export default class PasswordEncryptedService {
  static async hashPassword(password) {
    if (typeof password !== 'string') {
      throw new ResponseError(400, 'password must be a string');
    }

    return await PasswordEncrypted.hashPassword(password);
  }

  static async comparePassword(password, hashedPassword) {
    if (typeof password !== 'string' || typeof hashedPassword !== 'string') {
      throw new ResponseError(400, 'password and hashedPassword must be strings');
    }
    return await PasswordEncrypted.comparePassword(password, hashedPassword);
  }
}
