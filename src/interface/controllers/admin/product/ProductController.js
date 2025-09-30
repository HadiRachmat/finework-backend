import ProductAdminService from '../../../../application/services/admin/product/ProductService.js';
import { validate } from '../../../../validation/validation.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../../../../validation/productValidation/ProductValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const files = req.files;
  const validateReq = validate(createProductSchema, request);
  try {
    const result = await ProductAdminService.createProductByAdmin(validateReq, files);
    return res.status(201).json({
      message: 'create product',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await ProductAdminService.findAllProductsByAdmin();
    return res.status(200).json({
      message: 'get all products',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const dataId = Number(req.params.id);
  try {
    const result = await ProductAdminService.findProductById(dataId);
    return res.status(200).json({
      message: 'get product by id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const dataId = Number(req.params.id);
  const request = req.body;
  const files = req.files;
  const validateReq = validate(updateProductSchema, request);
  try {
    const result = await ProductAdminService.updateProductByAdmin(dataId, validateReq, files);
    return res.status(200).json({
      message: 'update product',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const dataId = Number(req.params.id);
  try {
    const result = await ProductAdminService.removeProductByAdmin(dataId);
    return res.status(200).json({
      message: 'remove product',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export default {
  create,
  get,
  getById,
  update,
  remove,
};
