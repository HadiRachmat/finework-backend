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

export default {
  create,
};
