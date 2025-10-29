import PrismaClient from '../../prisma/index.js';
import CartItemsEntity from '../../../domain/entities/CartItemsEntity/CartItemsEntity.js';

export default class CartItemsRepository {
  static async findCartItemsByCartId(tx, cartId, productId) {
    const cartItems = await tx.cartItems.findFirst({
      where: {
        cartId: cartId,
        productId: productId
      },
      select: {
        id: true,
        quantity: true,
        price: true,
        cartId: true,
        productId: true,
      },
    });
    return cartItems ? new CartItemsEntity(cartItems) : null;
  }

  static async createCartItems(tx, request) {
    const cartItems = await tx.cartItems.create({
      data: request,
      select: {
        id: true,
        quantity: true,
        price: true,
        cartId: true,
        productId: true,
      },
    });

    return cartItems ? new CartItemsEntity(cartItems) : null;
  }

  static async updateCartItemsQuantity(tx, dataId, request) {
    const cartItems = await tx.cartItems.update({
      where: {
        id: dataId,
      },
      data: request,
      select: {
        id: true,
        quantity: true,
        price: true,
        cartId: true,
        productId: true,
      },
    });
    return cartItems ? new CartItemsEntity(cartItems) : null;
  }

  static async removeCartItems(tx, dataId) {
    const cartItems = await tx.cartItems.delete({
      where: {
        id: dataId,
      },
      select: {
        id: true,
        quantity: true,
        price: true,
        cartId: true,
        productId: true,
      }
    })

    return cartItems ? new CartItemsEntity(cartItems) : null;
  }
}
