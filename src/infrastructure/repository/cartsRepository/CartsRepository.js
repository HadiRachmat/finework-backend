import CartEntity from '../../../domain/entities/CartEntity/CartEntity.js';
import PrismaClient from '../../prisma/index.js';

export default class CartsRepository {
  static async createCart(tx, request) {
    const cart = await tx.carts.create({
      data: request,
      select: {
        id: true,
        status: true,
        userId: true,
        cartItems: true,
      },
    });

    return cart ? new CartEntity(cart) : null;
  }

  static async findAllCartsWithoutTx(userId) {
    const carts = await PrismaClient.carts.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        status: true,
        userId: true,
        cartItems: true,
      },
    });
    return carts ? carts.map((cart) => new CartEntity(cart)) : [];
  }

  static async findByIdWithoutTx(cartId, userId) {
    const cart = await PrismaClient.carts.findUnique({
      where: {
        id: cartId,
        userId: userId,
      },
      select: {
        id: true,
        status: true,
        userId: true,
        cartItems: true,
      },
    });

    return cart ? new CartEntity(cart) : null;
  }

  static async findCartByUserId(tx, userId) {
    const cart = await tx.carts.findUnique({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        status: true,
        userId: true,
        cartItems: true,
      },
    });

    return cart ? new CartEntity(cart) : null;
  }

  // Create Data Transaction
  static async createCartTransaction(callback) {
    return await PrismaClient.$transaction(async (tx) => callback(tx));
  }
}
