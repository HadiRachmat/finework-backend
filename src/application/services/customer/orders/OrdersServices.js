import OrderFactory from '../../../../domain/factory/Customers/OrderFactory.js';
import OrderRepository from '../../../../infrastructure/repository/ordersRepository/OrdersRepository.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import OrdersMappers from '../../../mappers/orderMappers/OrdersMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import logger from '../../../../configuration/logging.js';
import OrderItemsFactory from '../../../../domain/factory/Customers/OrderItemsFactory.js';

const createCurrentOrderByCustomer = async (userId, request) => {
  const productRepository = await ProductRepository.findById(Number(request.productId));
  if (!productRepository) {
    throw new ResponseError(404, `Product with ID ${request.productId} not found`);
  }

  const orderItems = OrderItemsFactory.create({
    product: productRepository,
    quantity: Number(request.quantity),
  });
  const order = OrderFactory.create({
    userId,
    orderItems: [orderItems],
  });

  const orderRequestData = {
    userId: order.userId,
    amount: order.getAmount(),
    status: order.getStatus(),
    orderItems: {
      create: order.getOrderItems().map((items) => ({
        productId: items.getProductId(),
        quantity: items.getQuantity(),
        price: items.getPrice(),
      })),
    },
  };
  
  const createOrder = await OrderRepository.createOrder(orderRequestData);
  
  const finalData = {
    message: 'Order created successfully',
    data: OrdersMappers.toDTO(createOrder),
  };

  return finalData;
};

export default {
  createCurrentOrderByCustomer,
};
