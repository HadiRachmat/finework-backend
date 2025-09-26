import Joi from 'joi';
import * as CONSTANT from '../../configuration/Constant.js';

const registerUserSchema = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password does not match password',
  }),
  role: Joi.string()
    .valid(CONSTANT.BASE_ROLE_ADMIN, CONSTANT.BASE_ROLE_STAFF, CONSTANT.BASE_ROLE_CUSTOMER)
    .default(CONSTANT.BASE_ROLE_CUSTOMER)
    .optional(),
  status: Joi.string()
    .valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE)
    .required()
    .default(CONSTANT.BASE_STATUS_ACTIVE),
});

const createUserSchemaByAdmin = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password does not match password',
  }),
  role: Joi.number()
    .valid(CONSTANT.BASE_ROLE_ADMIN, CONSTANT.BASE_ROLE_STAFF, CONSTANT.BASE_ROLE_CUSTOMER)
    .default(CONSTANT.BASE_ROLE_CUSTOMER)
    .optional(),
  status: Joi.number()
    .valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE)
    .required()
    .default(CONSTANT.BASE_STATUS_ACTIVE),
});

const updateUserSchemaByAdmin = Joi.object({
  fullname: Joi.string().min(3).max(30).optional(),
  email: Joi.string().email().optional(),
  role: Joi.number()
    .valid(CONSTANT.BASE_ROLE_ADMIN, CONSTANT.BASE_ROLE_STAFF, CONSTANT.BASE_ROLE_CUSTOMER)
    .default(CONSTANT.BASE_ROLE_CUSTOMER)
    .optional(),
  status: Joi.number()
    .valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE)
    .optional()
    .default(CONSTANT.BASE_STATUS_ACTIVE),
});

export { registerUserSchema, createUserSchemaByAdmin, updateUserSchemaByAdmin };
