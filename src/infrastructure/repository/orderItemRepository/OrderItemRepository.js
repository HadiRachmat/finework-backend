import OrdersEntity from '../../../domain/entities/orderEntity/OrdersEntity.js';
import PrismaClient from '../../prisma/index.js';

export default class OrderRepository {
  static async findOrderItemsById(OrderId) {
    const order = await PrismaClient.orderItems.findMany({
      where: {
        id: OrderId,
      },
      select: {
        id: true,
        quantity: true,
        price: true,
        order: {
          select: {
            id: true,
            amount: true,
            status: true,
          },
        },
      },
    });
    return order ? new OrdersEntity(order) : null;
  }

  static async createOrderItems(tx, orderPayload) {
    const newOrder = await tx.orderItems.create({
      data: orderPayload,
      select: {
        id: true,
        quantity: true,
        price: true,
        order: {
          select: {
            id: true,
            amount: true,
            status: true,
          },
        },
      },
    });

    return newOrder ? new OrdersEntity(newOrder) : null;
  }

  static async createManyOrderItems(tx, orderItemsPayload) {
    const newOrderItems = await tx.orderItems.createMany({
      data: orderItemsPayload,
      select: {
        id: true,
        quantity: true,
        price: true,
        order: {
          select: {
            id: true,
            amount: true,
            status: true,
          },
        },
      },
    });
  }
}
