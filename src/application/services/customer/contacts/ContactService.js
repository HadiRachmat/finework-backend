import ContactFactory from '../../../../domain/factory/Customers/ContactFactory.js';
import ContactRepository from '../../../../infrastructure/repository/contactRepository/ContactRepository.js';
import ContactMappers from '../../../mappers/contactMappers/ContactMappers.js';
import ResponseError from '../../../../error/ResponseError.js';

const createContactByCustomer = async (userId, request) => {
  const existingContactCustomer = await ContactRepository.findFirstByUserId(userId);
  if (existingContactCustomer) {
    throw new ResponseError(400, 'Contact for this user already exists');
  }
  
  const contactFactory = ContactFactory.create({
    ...request,
    userId: userId,
  });
  const contactRepository = await ContactRepository.create(contactFactory);

  const finalData = {
    message: 'Create contact messages by customer successfully',
    data: ContactMappers.toDTO(contactRepository),
  };
  return finalData;
};

const getByUserIdContactsByCustomer = async (userId) => {
  const contact = await ContactRepository.findFirstByUserId(userId);
  if (!contact) {
    throw new ResponseError(404, 'Contact not found');
  }
  const finalData = {
    message: 'Get all contact messages by customer successfully',
    data: ContactMappers.toDTO(contact),
  };
  return finalData;
};

const updateContactByCustomer = async (userId, requesst) => {
  const findContactByUserId = await ContactRepository.findFirstByUserId(userId);
  if (!findContactByUserId) {
    throw new ResponseError(404, 'Contact not found');
  }
  const contactFactory = ContactFactory.create({
    ...requesst,
    userId: userId,
  });
  const contactRepository = await ContactRepository.update(
    findContactByUserId.getId(),
    contactFactory
  );

  const finalData = {
    message: 'Update contact messages by customer successfully',
    data: ContactMappers.toDTO(contactRepository),
  };
  return finalData;
};

const removeContactByCustomer = async (userId) => {
  const findContactByUserId = await ContactRepository.findFirstByUserId(userId);
  if (!findContactByUserId) {
    throw new ResponseError(404, 'Contact not found');
  }
  await ContactRepository.remove(findContactByUserId.getId());
  const finalData = {
    message: 'Delete contact messages by customer successfully',
    data: null,
  };
  return finalData;
};

export default {
  createContactByCustomer,
  getByUserIdContactsByCustomer,
  updateContactByCustomer,
  removeContactByCustomer,
};
