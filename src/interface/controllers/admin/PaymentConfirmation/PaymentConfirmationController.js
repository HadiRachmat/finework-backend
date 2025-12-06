import PaymentConfirmation from '../../../../application/services/admin/paymentConfirmation/PaymentConfirmationServices.js';

const updateStatus = async (req, res, next) => {
  const paymentConfirmationId = Number(req.params.id);
  const requestData = req.body;
  try {
    const result = await PaymentConfirmation.updatePaymentConfirmationStatusWithTx(
      paymentConfirmationId,
      requestData
    );
    res.status(200).json({
      code: 200,
      message: result.message,
      data: result.paymentConfirmation,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  updateStatus,
};
