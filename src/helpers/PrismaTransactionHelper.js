import PrismaClient from '../infrastructure/prisma/index.js';
import ResponseError from '../error/ResponseError.js';
import logger from '../configuration/logging.js';

const TransactionHelper = async (callback) => {
  try {
    const result = await PrismaClient.$transaction(async (tx) => {
      return await callback(tx);
    });
    return result;
  } catch (error) {
    // Log full error for debugging and include original message in the thrown error
    logger.error(`Transaction error: ${error.stack || error.message}`);
    throw new ResponseError(500, `Transaction Failed: ${error.message}`);
  }
};

export default {
  TransactionHelper,
};
