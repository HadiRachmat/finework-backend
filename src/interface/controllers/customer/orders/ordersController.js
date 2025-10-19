import OrderServiceCustomer from '../../../../application/services/customer/orders/OrdersServices.js';
import logger from '../../../../configuration/logging.js';

const createCurrentOrder = async (req, res, next) => {
  const userId = req.user.id;
  const request = req.body;
  logger.info(`Creating order for user ID: ${userId} with request data: ${JSON.stringify(request)}`);
  try {
    const result = await OrderServiceCustomer.createCurrentOrderByCustomer(userId, request);
    res.status(200).json({
      code: 200,
      message: 'creat order by customer',
      data: result,
    });
  } catch (error) {
    logger.error(`Error creating order for user ID: ${userId} - ${error.message}`);
    next(error);
  }
};

export default {
  createCurrentOrder,
};
