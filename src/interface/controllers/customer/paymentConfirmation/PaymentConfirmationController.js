import PaymentConfirmationService from '../../../../application/services/customer/paymentsConfirmation/paymentConfirmationService.js';

const create = async (req, res, next) => {
  const user = req.user.id;
  const paymentConfirmationData = req.body;
  const files = req.files;
  try {
    const result = await PaymentConfirmationService.createPaymentConfirmationWithTx(
      user,
      files,
      paymentConfirmationData
    );
    res.status(200).json({
      code: 200,
      message: 'Payment confirmation created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await PaymentConfirmationService.getAllPaymentConfirmations();
    res.status(200).json({
      code: 200,
      message: 'Payment confirmations retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await PaymentConfirmationService.getPaymentConfirmationById(id);
    res.status(200).json({
      code: 200,
      message: 'Payment confirmation retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export default {
  create,
  getAll,
  getById,
};
