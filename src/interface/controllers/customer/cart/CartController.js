import CartService from '../../../../application/services/customer/carts/CartService.js';

const create = async (req, res, next) => {
  const userId = req.user.id;
  const request = req.body;

  try {
    const result = await CartService.createCartService(userId, request);
    res.status(200).json({
      code: 200,
      message: 'create add to cart',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await CartService.getAllCartsCustomer(userId);
    res.status(200).json({
      code: 200,
      message: 'success get all carts',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const userId = parseInt(req.user.id);
  const cartId = parseInt(req.params.id);
  try {
    const result = await CartService.getByIdCartCustomer(userId, cartId);
    res.status(200).json({
      code: 200,
      message: 'success get cart by id',
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
