import { v4 as uuidv4 } from 'uuid';

/**
 * GENERATE PAYMENT CODE
 * @param {*} prefix
 * @param {*} length
 * @returns
 */
export function generatePaymentCode(prefix = 'PAY', length = 8) {
  const shortPaymentCode = uuidv4().replace(/-/g, '').slice(0, length).toUpperCase();
  return `${prefix}-${shortPaymentCode}`;
}
