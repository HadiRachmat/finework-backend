import ResponseError from '../../../error/ResponseError.js';
import LicencesHelper from '../../../helpers/LicenseHelper.js';

export default class EncryptedKey {
  constructor(encryptedKey, keyHash) {
    if (typeof encryptedKey !== 'string' || typeof keyHash !== 'string') {
      throw new ResponseError(400, 'Invalid encrypted key or hash');
    }

    // decrypt
    const plain = LicencesHelper.decryptedKey(encryptedKey);

    // pastikan hash cocok
    const generatedHash = LicencesHelper.hashKey(plain);
    if (generatedHash !== keyHash) {
      throw new ResponseError(400, 'Hash does not match decrypted license key');
    }

    this.encryptedKey = encryptedKey;
    this.keyHash = keyHash;
    this.plainText = plain; // simpan hasil decrypt
  }

  getPlainText() {
    return this.plainText;
  }
}
