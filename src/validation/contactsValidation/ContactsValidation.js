import Joi from 'joi';

const contactsSchemaValidation = Joi.object({
  userId: Joi.number().required(),
  contact: Joi.string().optional(),
  description: Joi.string().allow(null, ''),
});

export { contactsSchemaValidation };
