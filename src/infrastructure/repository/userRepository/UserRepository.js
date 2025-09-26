import PrismaClient from '../../prisma/index.js';
import UserEntity from '../../../domain/entities/userEntity/UserEntity.js';

export default class UserRepository {
  static async findById(dataId) {
    const user = await PrismaClient.users.findUnique({
      where: {
        id: dataId,
      },
      select: {
        id: true,
        fullname: true,
        email: true,
        role: true,
        status: true,
        contacts: true,
        testimonials: true,
        orders: true,
      },
    });

    return user ? new UserEntity(user) : null;
  }

  static async findByEmail(email) {
    const user = await PrismaClient.users.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        fullname: true,
        email: true,
        password: true,
        role: true,
        status: true,
        contacts: true,
        testimonials: true,
        orders: true,
      },
    });

    return user ? new UserEntity(user) : null;
  }

  static async create(request) {
    const user = await PrismaClient.users.create({
      data: request,
      select: {
        id: true,
        fullname: true,
        email: true,
        role: true,
        status: true,
        contacts: true,
        testimonials: true,
        orders: true,
      },
    });

    return new UserEntity(user);
  }

  static async findAllUser() {
    const user = await PrismaClient.users.findMany({
      select: {
        id: true,
        fullname: true,
        email: true,
        role: true,
        status: true,
      },
    });

    return user.map((data) => new UserEntity(data));
  }

  static async update(dataId, request) {
    const user = await PrismaClient.users.update({
      where: {
        id: dataId,
      },
      data: request,
      select: {
        id: true,
        fullname: true,
        email: true,
        role: true,
        status: true,
        contacts: true,
        testimonials: true,
        orders: true,
      },
    });
  }

  static async removeUser(dataId) {
    const user = await PrismaClient.users.delete({
      where: {
        id: dataId,
      },
    });

    return user ? new UserEntity(user) : null;
  }
}
