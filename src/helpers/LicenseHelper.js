import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = Buffer.from(process.env.LICENSE_SECRET_KEY, 'hex');
const IV_LENGTH = 16; // AES block size

const encryptKey = (plainText) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);

  let encrypted = cipher.update(plainText, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const encryptedKey = iv.toString('hex') + ':' + encrypted;

  const keyHash = crypto.createHash('sha256').update(plainText).digest('hex');

  return { encryptedKey, keyHash };
};

const decryptedKey = (encryptedKey) => {
  const [ivHex, encrypted] = encryptedKey.split(':');
  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, Buffer.from(ivHex, 'hex'));

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

const hashKey = (plainText) => {
  return crypto.createHash('sha256').update(plainText).digest('hex');
};

export default {
  encryptKey,
  decryptedKey,
  hashKey,
};
