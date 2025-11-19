import OrderFactory from '../../../../domain/factory/Customers/OrderFactory.js';
import OrderRepository from '../../../../infrastructure/repository/ordersRepository/OrdersRepository.js';
import OrderItemsRepository from '../../../../infrastructure/repository/orderItemRepository/OrderItemRepository.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import OrdersMappers from '../../../mappers/orderMappers/OrdersMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import OrderItemsFactory from '../../../../domain/factory/Customers/OrderItemsFactory.js';
import PrismaTransactionHelper from '../../../../helpers/PrismaTransactionHelper.js';

const createCurrentOrderByCustomer = async (userId, request) => {
  const product = await ProductRepository.findById(request.productId);

  if (!product) {
    throw new ResponseError(404, `Product with ID ${request.productId} not found`);
  }

  const orderItemsRequestFactory = OrderItemsFactory.create({
    product, // ✅ kirim seluruh objek product
    quantity: request.quantity,
  });

  const orderRequestFactory = OrderFactory.create({
    userId,
    status: request.status,
    orderItems: [orderItemsRequestFactory], // ✅ biar factory bisa hitung total
  });

  const order = await PrismaTransactionHelper.TransactionHelper(async (tx) => {
    const createOrder = await OrderRepository.createOrder(tx, {
      userId: orderRequestFactory.getUserId(),
      amount: orderRequestFactory.getAmount(),
      status: orderRequestFactory.getStatus(),
    });

    if (!createOrder) throw new ResponseError(500, 'Failed to create order');

    // createOrder is returned as { order: OrdersEntity, user: UserEntity }
    const orderItemsPayload = {
      orderId: createOrder.order.getId(),
      productId: orderItemsRequestFactory.getProductId(),
      quantity: orderItemsRequestFactory.getQuantity(),
      price: orderItemsRequestFactory.getPrice(),
    };

    // we are creating a single order item here, so use createOrderItems
    const createOrderItems = await OrderItemsRepository.createOrderItems(tx, orderItemsPayload);
    if (!createOrderItems) throw new ResponseError(500, 'Failed to create order items');

    const orderWithItems = await OrderRepository.findOrderById(tx, createOrder.order.getId());
    return OrdersMappers.toDTO(orderWithItems.order, orderWithItems.user);
  });
  return {
    message: 'Success Create Order',
    order,
  };
};

export default {
  createCurrentOrderByCustomer,
};
