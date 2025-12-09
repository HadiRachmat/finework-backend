import CartsFactory from '../../../../domain/factory/Customers/CartsFactory.js';
import CartsRepository from '../../../../infrastructure/repository/cartsRepository/CartsRepository.js';
import CartItemsRepository from '../../../../infrastructure/repository/cartItemsRepository/CartItemRepository.js';
import CartItemMappers from '../../../../application/mappers/cartItemMappers/CartItemMappers.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import CartMappers from '../../../../application/mappers/cartMappers/CartMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import PrismaTransactionHelper from '../../../../helpers/PrismaTransactionHelper.js';
import CartRepository from '../../../../infrastructure/repository/cartRepository/CartRepository.js';

const createCartService = async (userId, request) => {
  const userCustomer = await UserRepository.findById(userId);
  if (!userCustomer) {
    throw new ResponseError(404, `User with ID ${userId} not found`);
  }

  const product = await ProductRepository.findById(request.productId);
  if (!product) {
    throw new ResponseError(404, `Product with ID ${request.productId} not found`);
  }

  const pricePerItems = product.getPrice();
  const quantity = Number(request.quantity);

  const createCart = await PrismaTransactionHelper.TransactionHelper(async (tx) => {
    // 1) cari cart open milik user (schema punya unique userId sehingga findUnique cocok)
    let activeCart = await CartsRepository.findCartByUserId(tx, userCustomer.getId());

    // 2) jika tidak ada, buat cart baru
    if (!activeCart) {
      const newCartReq = CartsFactory.createCart({
        status: CONSTANT.BASE_CART_STATUS_OPEN,
        user: { connect: { id: userCustomer.getId() } },
      });
      activeCart = await CartRepository.createCart(tx, newCartReq);
      if (!activeCart) throw new ResponseError(500, 'Failed to create cart');
    }

    const cartId = typeof activeCart.getId === 'function' ? activeCart.getId() : activeCart.id;

    // 3) cek apakah cartItem untuk product ini sudah ada
    let existingItem = await CartItemsRepository.findCartItemsByCartId(tx, cartId, product.getId());

    if (existingItem) {
      // update quantity & price
      const existingQty =
        typeof existingItem.getQuantity === 'function'
          ? existingItem.getQuantity()
          : existingItem.quantity;
      const newQty = existingQty + (Number(quantity) || 1);
      const newPrice = pricePerItems * newQty;

      const updatedItem = await CartItemsRepository.updateCartItemsQuantity(
        tx,
        existingItem.getId ? existingItem.getId() : existingItem.id,
        {
          quantity: newQty,
          price: String(newPrice),
        }
      );
      if (!updatedItem) throw new ResponseError(500, 'Failed to update cart item');

      return { cart: activeCart, cartItem: updatedItem };
    }

    // 4) jika belum ada, buat cart item baru
    const createItemReq = {
      cartId,
      productId: product.getId(),
      quantity: Number(quantity) || 1,
      price: String(pricePerItems * (Number(quantity) || 1)),
    };

    const createdItem = await CartItemsRepository.createCartItems(tx, createItemReq);
    if (!createdItem) throw new ResponseError(500, 'Failed to create cart item');

    return { cart: activeCart, cartItem: createdItem };
  });

  const finalData = {
    message: 'Success Create Cart',
    data: {
      cart: CartMappers.getDTO(createCart.cart),
      cartItems: CartItemMappers.toDTO(createCart.cartItem),
    },
  };
  return finalData;
};

const getAllCartsCustomer = async (userId) => {
  const carts = await CartsRepository.findAllCartsWithoutTx(userId);
  return {
    message: 'Success Get All Carts',
    data: carts.map((cart) => CartMappers.getDTO(cart)),
  };
};

const getByIdCartCustomer = async (userId, cartId) => {
  const userCustomer = await UserRepository.findById(userId);
  if (!userCustomer) {
    throw new ResponseError(404, `User with ID ${userId} not found`);
  }
  const cart = await CartsRepository.findByIdWithoutTx(cartId, userCustomer.getId());
  if (!cart) {
    throw new ResponseError(404, `Cart  not found for User ID ${userId}`);
  }
  return {
    message: 'Success Get Cart By ID',
    data: CartMappers.toDTO(cart),
  };
};

export default { createCartService, getAllCartsCustomer, getByIdCartCustomer };
