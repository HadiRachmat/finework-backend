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


export default {
  create
}