import ContactService from '../../../../application/services/admin/contacts/ContactServices.js';
import { validate } from '../../../../validation/validation.js';
import { contactsSchemaValidation } from '../../../../validation/contactsValidation/ContactsValidation.js';
import logger from '../../../../configuration/logging.js';

const create = async (req, res, next) => {
  const request = {
    ...req.body,
    userId: req.body.userId || req.user.id,
  };
  const validateRequest = validate(contactsSchemaValidation, request);
  try {
    const result = await ContactService.createContactByAdmin(validateRequest, request);
    logger.info(`Result Create Contact: ${result}`);
    res.status(200).json({
      code: 200,
      message: 'Create Contacts',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await ContactService.getAllContact();
    logger.info(`Result Get All Contacts: ${result}`);
    res.status(200).json({
      code: 200,
      message: 'Get All Contacts',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const contactId = Number(req.params.contactId);
  try {
    const result = await ContactService.getContactById(contactId);
    logger.info(`Result Get Contact By Id: ${result}`);
    res.status(200).json({
      code: 200,
      message: 'Get Contact By Id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const contactId = Number(req.params.contactId);
  const request = {
    ...req.body,
    userId: req.body.userId || req.user.id,
  };
  const validateRequest = validate(contactsSchemaValidation, request);
  try {
    const result = await ContactService.updateContactByAdmin(contactId, validateRequest);
    logger.info(`Result Update Contact: ${result}`);
    res.status(200).json({
      code: 200,
      message: 'Update Contact',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  const contactId = Number(req.params.contactId);
  try {
    const result = await ContactService.deleteContactByAdmin(contactId);
    logger.info(`Result Delete Contact: ${result}`);
    res.status(200).json({
      code: 200,
      message: 'Delete Contact',
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
