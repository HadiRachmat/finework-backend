import CartsFactory from '../../../../domain/factory/Customers/CartsFactory.js';
import CartsRepository from '../../../../infrastructure/repository/cartsRepository/CartsRepository.js';
import CartItemsRepository from '../../../../infrastructure/repository/cartItemsRepository/CartItemRepository.js';
import CartItemMappers from '../../../../application/mappers/cartItemMappers/CartItemMappers.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import CartMappers from '../../../../application/mappers/cartMappers/CartMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';

const createCartService = async (userId, request) => {
  const cartRequestFactory = CartsFactory.createCart({
    userId: userId,
    // jika client tidak mengirim status, gunakan default BASE_CART_STATUS_OPEN
    status: request.status ?? CONSTANT.BASE_CART_STATUS_OPEN,
    // cartItems: request.cartItems,
  });

  // Ambil product dari DB supaya price authoritative (jangan percaya input client)
  const product = await ProductRepository.findById(request.productId);
  if (!product) {
    throw new ResponseError(404, `Product with ID ${request.productId} not found`);
  }

  // optional: cek stock saat menambah ke cart
  if (product.stock != null && product.stock < request.quantity) {
    throw new ResponseError(400, `Insufficient stock for product ID ${request.productId}`);
  }

  const cartItemsRequestFactory = CartsFactory.createCartItem({
    productId: request.productId,
    quantity: request.quantity,
    // ambil price dari product di DB (authoritative)
    price: product.price,
  });

  const cart = await CartsRepository.createCartTransaction(async (tx) => {
    let findCartByUserId = await CartsRepository.findCartByUserId(tx, userId);

    if (!findCartByUserId) {
      // ✅ Bentuk payload sesuai format Prisma
      const createCartData = {
        status: cartRequestFactory.getStatus(),
        user: {
          connect: { id: cartRequestFactory.getUserId() },
        },
      };

      findCartByUserId = await CartsRepository.createCart(tx, createCartData);
    }

    // const findProductId = await ProductRepository.findById(cartItemsRequestFactory.getProductId());
    const findExistingCartItem = await CartItemsRepository.findCartItemsByCartId(
      tx,
      findCartByUserId.getId(),
      cartItemsRequestFactory.getProductId()
    );

    if (findExistingCartItem) {
      const updatedCartItems = await CartItemsRepository.updateCartItemsQuantity(
        tx,
        findExistingCartItem.getId(),
        { quantity: findExistingCartItem.getQuantity() + cartItemsRequestFactory.getQuantity() } // ✅ object
      );
      return {
        message: 'Success Update Cart Items Quantity',
        data: CartItemMappers.toDTO(updatedCartItems), // pakai CartItemMappers
      };
    } else {
      const requestCartItems = {
        cartId: findCartByUserId.getId(),
        productId: cartItemsRequestFactory.getProductId(),
        quantity: cartItemsRequestFactory.getQuantity(),
        price: cartItemsRequestFactory.getPrice(),
      };
      const createNewCartItems = await CartItemsRepository.createCartItems(tx, requestCartItems);

      return {
        message: 'Success Create New Cart Items',
        data: CartItemMappers.toDTO(createNewCartItems), // pakai CartItemMappers
      };
    }
  });

  const finalData = {
    message: 'Success Create Cart',
    cart: cart,
  };

  return finalData;
};

const getAllCartsCustomer = async (userId) => {
  const carts = await CartsRepository.findAllCartsWithoutTx(userId);
  return {
    message: 'Success Get All Carts',
    data: carts.map((cart) => CartMappers.toDTO(cart)),
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
