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
    return paymentConfirmation ? new PaymentConfirmationEntity(paymentConfirmation) : null;
  }

  static async findAllPaymentConfirmation() {
    const paymentConfirmations = await PrismaClient.paymentConfirmations.findMany({
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
    return paymentConfirmations
      ? paymentConfirmations.map((pc) => new PaymentConfirmationEntity(pc))
      : [];
  }

  static async findPaymentConfirmationById(paymentConfirmationId) {
    const paymentConfirmation = await PrismaClient.paymentConfirmations.findUnique({
      where: {
        id: paymentConfirmationId,
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
    return paymentConfirmation ? new PaymentConfirmationEntity(paymentConfirmation) : null;
  }

  static async updatePaymentConfirmationStatusWithTx(tx, paymentConfirmationId, request) {
    const updatedPaymentConfirmation = await tx.paymentConfirmations.update({
      where: {
        id: paymentConfirmationId,
      },
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
    return updatedPaymentConfirmation
      ? new PaymentConfirmationEntity(updatedPaymentConfirmation)
      : null;
  }
}
