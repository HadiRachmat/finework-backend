import { generatePaymentCode } from '../../../../helpers/GeneratePaymentCode.js';
import userRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import PaymentFactory from '../../../../domain/factory/Customers/PaymentFactory.js';
import PaymentRepository from '../../../../infrastructure/repository/paymentRepository/PaymentRepository.js';
import ResponseError from '../../../../error/ResponseError.js';
import OrderRepository from '../../../../infrastructure/repository/ordersRepository/OrdersRepository.js';
import PaymentMappers from '../../../mappers/paymentMappers/PaymentMappers.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import logger from '../../../../configuration/logging.js';

const createPaymentWithCustomer = async (actor, request = {}) => {
  if (!actor || !actor.role || actor.role !== CONSTANT.BASE_ROLE_CUSTOMER) {
    throw new ResponseError(403, 'Forbidden: only Customer can create payment');
  }

  const findOrderId = await OrderRepository.findOrderByIdWithoutTx(request.orderId);

  const paymentRequestFactory = PaymentFactory.createPayment({
    amount: findOrderId.amount,
    method: request.method,
    code: generatePaymentCode(),
    status: CONSTANT.BASE_PAYMENT_STATUS_PENDING,
    orderId: findOrderId ? findOrderId.getId() : request.orderId,
  });

  const createNewPayment = await PaymentRepository.createPaymentWithoutTx(paymentRequestFactory);
  logger.info(`Payment created with id: ${createNewPayment.getId()} by customer id: ${actor.id}`);
  logger.debug(`Payment details: ${JSON.stringify(paymentRequestFactory)}`);

  const finalData = {
    message: 'create payment by customer successfuly',
    payment: PaymentMappers.toDTO(createNewPayment),
  };

  return finalData;
};

const getAllPayment = async () => {
  const findPayments = await PaymentRepository.getAllPayments();
  return findPayments.map((payment) => PaymentMappers.toDTO(payment));
};

const getById = async (id) => {
  const findPayment = await PaymentRepository.getPaymentById(id);
  if (!findPayment) {
    throw new ResponseError(404, 'Payment not found');
  }
  return PaymentMappers.toDTO(findPayment);
};

export default {
  createPaymentWithCustomer,
  getAllPayment,
  getById,
};
