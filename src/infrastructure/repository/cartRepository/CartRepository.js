import PrismaClient from '../../prisma/index.js';
import ProductRepository from '../productsRepository/ProductRepository.js';
import CartEntity from '../../../domain/entities/CartEntity/CartEntity.js';
import CartItemsEntity from '../../../domain/entities/CartItemsEntity/CartItemsEntity.js';

export default class CartRepository {
  // ambil cart items untuk user; karena model CartItems tidak mendefinisikan relation `product`
  // kita ambil product secara terpisah via ProductRepository
  static async findCartItemsByUserId(userId, tx = null) {
    const db = tx ?? PrismaClient;

    // cari cart id dulu (Carts.userId unique di schema)
    const cart = await db.carts.findUnique({ where: { userId } });
    if (!cart) return [];

    const items = await db.cartItems.findMany({
      where: { cartId: cart.id },
      select: {
        id: true,
        cartId: true,
        productId: true,
        quantity: true,
        price: true,
      },
    });

    // ambil product untuk setiap item melalui repository (paralel)
    const itemsWithProduct = await Promise.all(
      items.map(async (i) => {
        const productEntity = await ProductRepository.findById(i.productId);
        const product = productEntity
          ? {
              id: productEntity.getId(),
              price: productEntity.getPrice(),
              stock: productEntity.getStock(),
            }
          : null;
        return {
          id: i.id,
          cartId: i.cartId,
          productId: i.productId,
          quantity: i.quantity,
          priceSnapshot: i.price,
          product,
        };
      })
    );

    return itemsWithProduct;
  }

  static async createCart(tx, cartRequest) {
    const newCart = await tx.carts.create({
      data: cartRequest,
      select: {
        id: true,
        userId: true,
        status: true,
      },
    });
    return newCart ? new CartEntity(newCart) : null;
  }

  static async createCartItem(tx, cartItemRequest) {
    const newCartItem = await tx.cartItems.create({
      data: cartItemRequest,
      select: {
        id: true,
        quantity: true,
        price: true,
        productId: true,
        cartId: true,
      },
    });
    return newCartItem ? new CartItemsEntity(newCartItem) : null;
  }

  // hapus semua cartItems untuk user dalam transaksi (tx required)
  static async clearCart(tx, userId) {
    // temukan cart id
    const cart = await tx.carts.findUnique({ where: { userId } });
    if (!cart) return null;
    return tx.cartItems.deleteMany({ where: { cartId: cart.id } });
  }
}
