import PrismaClient from '../../prisma/index.js';
import PaymentConfirmationEntity from '../../../domain/entities/paymentConfirmationEntity/PaymentConfirmationEntity.js';

export default class PaymentConfirmationRepository {
  static async createPaymentConfirmationWithTx(tx, request) {
    const paymentConfirmation = await tx.paymentConfirmations.create({
      data: request,
      select: {
        id: true,
        bankName: true,
        bankAccountName: true,
        code: true,
        status: true,
        paymentId: true,
        payment: {
          select: {
            id: true,
            amount: true,
            status: true,
          },
        },
      },
    });

    return paymentConfirmation ? new PaymentConfirmationEntity(paymentConfirmation) : null;
  }

  static async findFirstPaymentWithTx(tx, paymentId) {
    const paymentConfirmation = await tx.paymentConfirmations.findFirst({
      where: {
        paymentId: paymentId,
      },
      select: {
        id: true,
        bankName: true,
        bankAccountName: true,
        code: true,
        status: true,
        paymentId: true,
        payment: {
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
