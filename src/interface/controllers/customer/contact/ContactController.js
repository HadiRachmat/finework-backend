import ContactServiceCustomer from '../../../../application/services/customer/contacts/ContactService.js';
import { validate } from '../../../../validation/validation.js';
import { createContactSchemaCustomerValidation } from '../../../../validation/contactsValidation/ContactsValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const user = req.user.id;
  const validatedRequest = validate(createContactSchemaCustomerValidation, request);
  try {
    const result = await ContactServiceCustomer.createContactByCustomer(user, validatedRequest);
    res.status(201).json({
      code: 200,
      message: 'create contact by Customer',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getByUserId = async (req, res, next) => {
  const user = req.user.id;
  try {
    const result = await ContactServiceCustomer.getByUserIdContactsByCustomer(user);
    res.status(200).json({
      code: 200,
      message: 'get all contact by Customer',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const user = req.user.id;
  const request = req.body;
  const validatedRequest = validate(createContactSchemaCustomerValidation, request);
  try {
    const result = await ContactServiceCustomer.updateContactByCustomer(user, validatedRequest);
    res.status(200).json({
      code: 200,
      message: 'update contact by Customer',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const user = req.user.id;
  try {
    const result = await ContactServiceCustomer.removeContactByCustomer(user);
    res.status(200).json({
      code: 200,
      message: 'remove contact by Customer',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export default {
  create,
  getByUserId,
  update,
  remove,
};
