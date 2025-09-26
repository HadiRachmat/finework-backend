import Joi from 'joi';

const createCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().max(255).optional().allow(null, ''),
});

const updateCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  description: Joi.string().max(255).optional()
});

export { createCategorySchema, updateCategorySchema };
