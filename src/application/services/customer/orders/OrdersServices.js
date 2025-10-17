import OrderFactory from '../../../../domain/factory/Customers/OrderFactory.js';
import OrderRepository from '../../../../infrastructure/repository/ordersRepository/OrdersRepository.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import ResponseError from '../../../../error/ResponseError.js';
import logger from '../../../../configuration/logging.js';

const createOrderByCustomer = async (userId, request) => {
  const orders = request.orders; // ambil array items dari body

  if (!orders || !Array.isArray(orders) || orders.length === 0) {
    throw new ResponseError(400, 'Items must be a non-empty array');
  }
  const findProductsId = orders.map((item) => item.productId);
  const productRepository = await ProductRepository.findAllForOrder(findProductsId);

  if (productRepository.length !== findProductsId.length) {
    throw new ResponseError(400, 'One or more products not found');
  }

  const requestOrderFactory = OrderFactory.create({
    userId,
    orders: request.orders, // karena di body kamu pakai key "orders"
    products: productRepository,
  });

  const orderRequestData = {
    userId: requestOrderFactory.getUserId(),
    amount: requestOrderFactory.getAmount(),
    status: requestOrderFactory.getStatus(),
    orderItems: {
      create: requestOrderFactory.getOrderItems().map((items) => ({
        productId: items.getProductId(),
        quantity: items.getQuantity(),
        price: items.getPrice(),
      })),
    },
  };

  const createNewOrder = await OrderRepository.createOrder(orderRequestData);

  const finalData = {
    message: 'Order created successfully',
    order: createNewOrder,
  };

  return finalData;
};

export default {
  createOrderByCustomer,
};
