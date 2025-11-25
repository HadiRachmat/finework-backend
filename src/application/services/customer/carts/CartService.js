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
  const cartUserRequestFactory = CartsFactory.createCart({
    userId,
    userId,
    status: request.status ?? CONSTANT.BASE_CART_STATUS_OPEN,
  });

  const product = await ProductRepository.findById(request.productId);
  if (!product) {
    throw new ResponseError(404, `Product with ID ${request.productId} not found`);
  }

  if(product.getStock() !== nul && product.getStock() < request.quantity)  {
    throw new ResponseError(400, `Insufficient stock for Product ID ${request.productId}`);
  }
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
