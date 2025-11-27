import 'dotenv/config';
import AdminUserFactory from '../../domain/factory/Admin/UserFactory.js';
import UserRepository from '../repository/userRepository/UserRepository.js';
import PrismaClient from '../prisma/index.js';
import * as CONSTANT from '../../configuration/Constant.js';
import logger from '../../configuration/logging.js';

const requestSeedUsers = [
  {
    fullname: 'Admin',
    email: 'admin@example.com',
    password: 'Admin123123',
    role: CONSTANT.BASE_ROLE_ADMIN,
    status: 1,
  },
  {
    fullname: 'Staff 1',
    email: 'staff1@example.com',
    password: 'staff1123123',
    role: CONSTANT.BASE_ROLE_STAFF,
    status: 1,
  },
  {
    fullname: 'Customer1',
    email: 'customer1@example.com',
    password: 'Customer1123123',
    role: CONSTANT.BASE_ROLE_CUSTOMER,
    status: 1,
  },
];

async function seedUsers() {
  try {
    for (const userData of requestSeedUsers) {
      const existingUser = await UserRepository.findByEmail(userData.email);
      if (existingUser) {
        logger.info(
          `User with email ${userData.email} already exists. Skipping seeding for this user.`
        );
        continue;
      } else {
        const userRequest = await AdminUserFactory.create(userData);
        const createUser = await UserRepository.create(userRequest);
        logger.info(`Seeded user: ${createUser.email}`);
      }
    }
  } catch (error) {
    logger.error('Error seeding users:', error);
    process.exit(1);
  } finally {
    await PrismaClient.$disconnect();
  }
}

seedUsers();
