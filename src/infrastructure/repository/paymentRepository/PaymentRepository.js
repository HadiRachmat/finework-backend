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

  static async findFirstPaymentWithTx(tx, paymentCode) {
    const payment = await tx.payments.findFirst({
      where: {
        code: paymentCode,
      },
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

  static async updatePaymentWithTx(tx, id, status, updateRequest) {
    // allow updateRequest to be either an object (update payload) or a primitive
    // If a primitive (string/number/boolean) is passed we treat it as a status update
    let data = updateRequest;
    if (
      typeof updateRequest === 'string' ||
      typeof updateRequest === 'number' ||
      typeof updateRequest === 'boolean'
    ) {
      data = { status: updateRequest };
    }

    const updatePayment = await tx.payments.update({
      where: {
        id: id,
        status: status,
      },
      data,
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
    return updatePayment ? new PaymentEntity(updatePayment) : null;
  }

  static async findPaymentWithTx (tx, id) {
    const payment = await tx.payments.findUnique({
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

  static async updateStatusPaymentWithTx(tx, id, updateRequest) {
    const updatePayment = await tx.payments.update({
      where: {
        id: id,
      },
      data: updateRequest,
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
    return updatePayment ? new PaymentEntity(updatePayment) : null;
  }
}
