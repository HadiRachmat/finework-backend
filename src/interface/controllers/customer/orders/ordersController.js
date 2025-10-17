import OrderServiceCustomer from '../../../../application/services/customer/orders/OrdersServices.js';
import logger from '../../../../configuration/logging.js';

const create = async (req, res, next) => {
  const userId = req.user.id;
  const request = req.body;
  try {
    const result = await OrderServiceCustomer.createOrderByCustomer(userId, request);
    res.status(200).json({
      code: 200,
      message: 'creat order by customer',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
};
