import Joi from 'joi';

const contactsSchemaValidation = Joi.object({
  userId: Joi.number().required(),
  contact: Joi.string().optional(),
  description: Joi.string().allow(null, ''),
});

const createContactSchemaCustomerValidation = Joi.object({
  contact: Joi.string().required(),
  description: Joi.string().allow(null, ''),
});

export { contactsSchemaValidation, createContactSchemaCustomerValidation };
