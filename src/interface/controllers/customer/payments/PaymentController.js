import PaymentServices from '../../../../application/services/customer/payments/PaymentServices.js';

const create = async (req, res, next) => {
  const actor = req.user;
  const request = req.body;
  try {
    const result = await PaymentServices.createPaymentWithCustomer(actor, request);
    res.status(200).json({
      code: 200,
      message: 'Create payment successfuly',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const get = async (req, res, next) => {
  try {
    const result = await PaymentServices.getAllPayment();
    res.status(200).json({
      code: 200,
      message: 'Get all payments successfuly',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await PaymentServices.getById(id);
    res.status(200).json({
      code: 200,
      message: 'Get payment by id successfuly',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  get,
  getById,
};
