import OrderServiceCustomer from '../../../../application/services/customer/orders/OrdersServices.js';
import logger from '../../../../configuration/logging.js';

import * as OrderServiceNamed from '../../../../application/services/customer/orders/OrdersServices.js';

const createCurrentOrder = async (req, res, next) => {
  const userId = req.user.id;
  const request = req.body;
  try {
    const result = await OrderServiceCustomer.createCurrentOrderByCustomer(userId, request);
    res.status(200).json({
      code: 200,
      message: 'create order by customer',
      data: result,
    });
  } catch (error) {
    logger.error(`Error creating order for user ID: ${userId} - ${error.message}`);
    next(error);
  }
};

const createOrderFromCart = async (req, res, next) => {
  const userId = req.user.id;
  const request = req.body;
  try {
    const result = await OrderServiceCustomer.createOrderFromCart(userId, request);
    res.status(200).json({ code: 200, message: 'create order by customer', data: result });
  } catch (error) {
    logger.error(`Error creating order from cart for user ID: ${userId} - ${error.message}`);
    next(error);
  }
};

const getOrdersByCustomer = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await OrderServiceNamed.getOrdersByCustomer(userId);
    res.status(200).json({ code: 200, message: 'get orders by customer', data: result });
  } catch (error) {
    logger.error(`Error fetching orders for user ID: ${userId} - ${error.message}`);
    next(error);
  }
};

export default {
  createCurrentOrder,
  createOrderFromCart,
  getOrdersByCustomer,
};
