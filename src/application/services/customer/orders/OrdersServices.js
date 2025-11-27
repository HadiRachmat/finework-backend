import OrderFactory from '../../../../domain/factory/Customers/OrderFactory.js';
import OrderRepository from '../../../../infrastructure/repository/ordersRepository/OrdersRepository.js';
import OrderItemsRepository from '../../../../infrastructure/repository/orderItemRepository/OrderItemRepository.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import OrdersMappers from '../../../mappers/orderMappers/OrdersMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import OrderItemsFactory from '../../../../domain/factory/Customers/OrderItemsFactory.js';
import PrismaTransactionHelper from '../../../../helpers/PrismaTransactionHelper.js';
import CartRepository from '../../../../infrastructure/repository/cartRepository/CartRepository.js';
import Amount from '../../../../domain/valuesObjects/ordersVo/Amount.js';
import * as CONSTANT from '../../../../configuration/Constant.js';

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

    // decrement stock for single-item order inside the transaction
    const stockUpdate = await tx.products.updateMany({
      where: { id: orderItemsPayload.productId, stock: { gte: orderItemsPayload.quantity } },
      data: { stock: { decrement: orderItemsPayload.quantity } },
    });
    if (!stockUpdate || stockUpdate.count === 0) {
      throw new ResponseError(
        400,
        `Insufficient stock for product ID ${orderItemsPayload.productId}`
      );
    }

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
const createOrderFromCart = async (userId, request) => {
  // read cart items (not in tx) and validate via VO/factory
  const cartItems = await CartRepository.findCartItemsByUserId(userId);
  if (!cartItems || cartItems.length === 0) {
    throw new ResponseError(400, 'Cart is empty');
  }

  // check if any product referenced by cart items was removed from DB
  const missingProduct = cartItems.find((ci) => !ci.product);
  if (missingProduct) {
    throw new ResponseError(404, `Product with ID ${missingProduct.productId} not found`);
  }

  // validate each item with factory (this will check quantity positive and stock)
  const validatedItems = cartItems.map((ci) =>
    OrderItemsFactory.create({ id: null, product: ci.product, quantity: ci.quantity })
  );

  // build payload and calculate total using VO values
  const itemsPayload = validatedItems.map((it) => ({
    productId: it.getProductId(),
    quantity: it.getQuantity(),
    price: String(it.getPrice()),
  }));

  const totalAmount = itemsPayload.reduce((sum, it) => sum + Number(it.price) * it.quantity, 0);
  const amountVo = new Amount(String(totalAmount));

  const orderResult = await PrismaTransactionHelper.TransactionHelper(async (tx) => {
    // create order
    const created = await OrderRepository.createOrder(tx, {
      userId,
      amount: amountVo.amount,
      status: request.status ?? CONSTANT.BASE_ORDER_STATUS_PENDING,
    });
    if (!created) throw new ResponseError(500, 'Failed to create order');

    const orderId = created.order.getId();

    // decrement stock per product inside tx and ensure enough stock (updateMany returns count)
    for (const p of itemsPayload) {
      const updated = await tx.products.updateMany({
        where: { id: p.productId, stock: { gte: p.quantity } },
        data: { stock: { decrement: p.quantity } },
      });
      if (!updated || updated.count === 0) {
        throw new ResponseError(400, `Insufficient stock for product ID ${p.productId}`);
      }
    }

    // attach orderId to payloads
    const itemsWithOrderId = itemsPayload.map((it) => ({ ...it, orderId }));

    // create order items (many)
    const createdItems = await OrderItemsRepository.createManyOrderItems(tx, itemsWithOrderId);
    if (!createdItems) throw new ResponseError(500, 'Failed to create order items');

    // clear cart
    await CartRepository.clearCart(tx, userId);

    const orderWithItems = await OrderRepository.findOrderById(tx, orderId);
    return OrdersMappers.toDTO(orderWithItems.order, orderWithItems.user);
  });

  return { message: 'Success Create Order', order: orderResult };
};
export default {
  createCurrentOrderByCustomer,
  createOrderFromCart,
  // create order from cart (uses VO validation and decrements stock inside tx)
};

// Get all orders for a specific customer
export const getOrdersByCustomer = async (userId) => {
  const orders = await OrderRepository.findOrdersByUserId(userId);
  // orders is array of { order: OrdersEntity, user: UserEntity }
  const dtoList = orders.map((o) => OrdersMappers.toDTO(o.order));
  return dtoList;
};
