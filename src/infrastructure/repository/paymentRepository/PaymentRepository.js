import PrismaClient from '../../prisma/index.js';
import PaymentEntity from '../../../domain/entities/paymentEntity/PaymentEntity.js';

export default class PaymentRepository {
  static async createPaymentWithoutTx(paymentRequest) {
    const payment = await PrismaClient.payments.create({
      data: paymentRequest,
      select: {
        id: true,
        amount: true,
        method: true,
        code: true,
        status: true,
        order: {
          select: {
            id: true,
            amount: true,
          },
        },
      },
    });

    return payment ? new PaymentEntity(payment) : null;
  }

  static async getAllPayments() {
    const payments = await PrismaClient.payments.findMany({
      select: {
        id: true,
        amount: true,
        method: true,
        code: true,
        status: true,
        order: {
          select: {
            id: true,
            amount: true,
          },
        },
      },
    });

    return payments.map((payment) => new PaymentEntity(payment));
  }

  static async getPaymentById(id) {
    const payment = await PrismaClient.payments.findUnique({
      where: { id },
      select: {
        id: true,
        amount: true,
        method: true,
        code: true,
        status: true,
        order: {
          select: {
            id: true,
            amount: true,
          },
        },
      },
    });

    return payment ? new PaymentEntity(payment) : null;
  }
}
