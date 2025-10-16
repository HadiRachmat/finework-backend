import ProductServiceCustomer from '../../../../application/services/customer/products/ProductService.js';

const get = async (req, res, next) => {
  try {
    const products = await ProductServiceCustomer.getProdcutByCustomer();
    res.status(200).json({
      code: res.status(200).statusCode,
      message: 'Products fetched successfully',
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const productId = Number(req.params.id);
  try {
    const product = await ProductServiceCustomer.getProductByIdWithCustomer(productId);
    res.status(200).json({
      code: res.status(200).statusCode,
      message: 'Product fetched successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
export default {
  get,
  getById,
};
