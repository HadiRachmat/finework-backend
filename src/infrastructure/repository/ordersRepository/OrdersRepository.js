import OrdersEntity from '../../../domain/entities/orderEntity/OrdersEntity.js';
import UserEntity from '../../../domain/entities/userEntity/UserEntity.js';
import PrismaClient from '../../prisma/index.js';

export default class OrderRepository {
  static async createOrder(tx, orderPayload) {
    const createOrder = await tx.orders.create({
      data: orderPayload,
      select: {
        id: true,
        amount: true,
        status: true,
        userId: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });

    return createOrder
      ? {
          order: new OrdersEntity(createOrder),
          user: createOrder.user ? new UserEntity(createOrder.user) : null,
        }
      : null;
  }

  static async findOrderById(tx, orderId) {
    const order = await tx.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        amount: true,
        status: true,
        userId: true,
        // include order items so entity.getOrderItems() is populated
        orderItems: {
          select: {
            id: true,
            quantity: true,
            price: true,
            productId: true,
          },
        },
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });

    return order
      ? {
          order: new OrdersEntity(order),
          user: order.user ? new UserEntity(order.user) : null,
        }
      : null;
  }

  static async FindAllOrder() {
    const orders = await PrismaClient.orders.findMany({
      select: {
        id: true,
        amount: true,
        status: true,
        userId: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });

    return orders
      ? {
          orders: orders.map((order) => new OrdersEntity(order)),
          users: orders.map((order) => (order.user ? new UserEntity(order.user) : null)),
        }
      : null;
  }

  static async findOrdersByUserId(userId) {
    const orders = await PrismaClient.orders.findMany({
      where: { userId },
      select: {
        id: true,
        amount: true,
        status: true,
        userId: true,
        orderItems: {
          select: {
            id: true,
            quantity: true,
            price: true,
            productId: true,
          },
        },
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return orders
      ? orders.map((o) => ({
          order: new OrdersEntity(o),
          user: o.user ? new UserEntity(o.user) : null,
        }))
      : [];
  }
}
