import Joi from 'joi';
import * as CONSTANT from '../../configuration/Constant.js';

const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(255).required(),
  price: Joi.string().required(),
  stock: Joi.number().min(0).required(),
  status: Joi.number().valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE).required(),
  categoryId: Joi.number().integer().required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  description: Joi.string().min(10).max(255).optional(),
  price: Joi.string().optional(),
  stock: Joi.number().min(0).optional(),
  status: Joi.number().valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE).optional(),
  categoryId: Joi.number().integer().optional(),
});
export { createProductSchema, updateProductSchema };
