import CartsFactory from '../../../../domain/factory/Customers/CartsFactory.js';
import CartsRepository from '../../../../infrastructure/repository/cartsRepository/CartsRepository.js';
import CartItemsRepository from '../../../../infrastructure/repository/cartItemsRepository/CartItemRepository.js';
import CartItemMappers from '../../../../application/mappers/cartItemMappers/CartItemMappers.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import CartMappers from '../../../../application/mappers/cartMappers/CartMappers.js';
import ResponseError from '../../../../error/ResponseError.js';

const createCartService = async (userId, request) => {
  const cartRequestFactory = CartsFactory.createCart({
    userId: userId,
    status: request.status,
    // cartItems: request.cartItems,
  });
  const cartItemsRequestFactory = CartsFactory.createCartItem({
    productId: request.productId,
    quantity: request.quantity,
    price: request.price,
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

export default { createCartService };
