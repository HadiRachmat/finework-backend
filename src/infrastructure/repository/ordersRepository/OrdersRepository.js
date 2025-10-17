import OrdersEntity from '../../../domain/entities/orderEntity/OrdersEntity.js';
import PrismaClient from '../../prisma/index.js';

export default class OrderRepository {
  static async createOrder(request) {
    const createOrder = await PrismaClient.orders.create({
      data: request,
      include: {
        orderItems: true,
      },
    });

    const order = await PrismaClient.orders.findUnique({
      where: { id: createOrder.id},
      include: {
        orderItems: true,
      },
    });
    return order ? new OrdersEntity(order) : null;
  }
}
