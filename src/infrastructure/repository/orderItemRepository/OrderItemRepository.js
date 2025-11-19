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
    if (!Array.isArray(orderItemsPayload) || orderItemsPayload.length === 0) return [];

    // createMany is more performant but doesn't return created rows, so we createMany then query the created rows
    await tx.orderItems.createMany({
      data: orderItemsPayload,
      skipDuplicates: false,
    });

    // assume payload items share the same orderId (we attach orderId before calling)
    const orderId = orderItemsPayload[0].orderId;
    const created = await tx.orderItems.findMany({
      where: { orderId },
      select: {
        id: true,
        quantity: true,
        price: true,
        productId: true,
      },
    });

    return created;
  }
}
