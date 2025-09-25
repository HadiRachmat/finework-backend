// src/prisma/client.js
import { PrismaClient } from '../../generated/prisma/index.js';
import logger from '../configuration/logging.js';

export const prismaClient = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
    { emit: 'event', level: 'error' },
  ],
});

prismaClient.$on('query', (e) => {
  logger.info(`[QUERY] ${e.query} -- params: ${e.params} -- duration: ${e.duration}ms`);
});

prismaClient.$on('info', (e) => {
  logger.info(`[INFO] ${e.message}`);
});

prismaClient.$on('warn', (e) => {
  logger.warn(`[WARN] ${e.message}`);
});

prismaClient.$on('error', (e) => {
  logger.error(`[ERROR] ${e.message}`);
});
