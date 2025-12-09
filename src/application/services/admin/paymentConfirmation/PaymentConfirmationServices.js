import PaymentConfirmationRepository from '../../../../infrastructure/repository/paymentConfirmationRepository/PaymentConfirmationRepository.js';
import PaymentConfirmationFactory from '../../../../domain/factory/Admin/PaymentConfirmationFactory.js';
import PaymentConfirmationMappers from '../../../mappers/paymentConfirmationMappers/PaymentConfirmationMappers.js';
import PaymentRepository from '../../../../infrastructure/repository/paymentRepository/PaymentRepository.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import PrismaTransactionHelper from '../../../../helpers/PrismaTransactionHelper.js';
import PaymentFactory from '../../../../domain/factory/Admin/PaymentFactory.js';
import logger from '../../../../configuration/logging.js';

const updatePaymentConfirmationStatusWithTx = async (paymentConfirmationId, request) => {
  const findPaymentConfirmation = await PaymentConfirmationRepository.findPaymentConfirmationById(
    paymentConfirmationId
  );
  if (!findPaymentConfirmation) {
    throw new ResponseError(404, `Payment confirmation not found`);
  }
  const status = Number(request.status);
  const requestTransaction = await PrismaTransactionHelper.TransactionHelper(async (tx) => {
    const requestPaymentConfirmationFactory =
      PaymentConfirmationFactory.updateStatusPaymentConfirmationRequest(status);
    const updatedPaymentConfirmation =
      await PaymentConfirmationRepository.updatePaymentConfirmationStatusWithTx(
        tx,
        findPaymentConfirmation.getId
          ? findPaymentConfirmation.getId()
          : findPaymentConfirmation.id,
        requestPaymentConfirmationFactory
      );
    // also update the related payment status if needed
    if (
      updatedPaymentConfirmation.status === CONSTANT.BASE_PAYMENT_STATUS_COMPLETED ||
      updatedPaymentConfirmation.status === CONSTANT.BASE_PAYMENT_STATUS_PROCESSING
    ) {
      const paymentUpdateRequest = PaymentFactory.updateStatusPaymentRequest(
        CONSTANT.BASE_PAYMENT_STATUS_COMPLETED
      );
      await PaymentRepository.updateStatusPaymentWithTx(
        tx,
        findPaymentConfirmation.getPaymentId
          ? findPaymentConfirmation.getPaymentId()
          : findPaymentConfirmation.paymentId,
        paymentUpdateRequest
      );
    }
    return updatedPaymentConfirmation;
  });
  const finalData = {
    message: 'Payment confirmation status updated successfully',
    paymentConfirmation: PaymentConfirmationMappers.toDTO(requestTransaction),
  };
  return finalData;
};

export default {
  updatePaymentConfirmationStatusWithTx,
};
