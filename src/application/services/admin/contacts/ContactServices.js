import ContactFactory from '../../../../domain/factory/Admin/ContactFactory.js';
import ContactRepository from '../../../../infrastructure/repository/contactRepository/ContactRepository.js';
import ContactMappers from '../../../mappers/contactMappers/ContactMappers.js';
import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import ResponseError from '../../../../error/ResponseError.js';
import logger from '../../../../configuration/logging.js';

const createContactByAdmin = async (request, reqUser) => {
  const targetUserId = request.userId ? Number(request.userId) : reqUser;

  const findUser = await UserRepository.findById(targetUserId);
  if (!findUser) {
    throw new ResponseError(404, 'User not found');
  }
  const requestContactFactory = ContactFactory.create({ ...request, userId: findUser.id });
  const createContact = await ContactRepository.create(requestContactFactory);
  if (!createContact) {
    throw new ResponseError(500, 'Failed to create contact');
  }
  const finalData = {
    message: 'success create contact by admin',
    contact: ContactMappers.toDTO(createContact),
  };

  return finalData;
};

const getAllContact = async () => {
  const contacts = await ContactRepository.findAll();
  if (!contacts) {
    throw new ResponseError(404, 'Contacts not found');
  }
  const finalData = contacts.map((contact) => ContactMappers.toDTO(contact));
  return finalData;
};

const getContactById = async (contactId) => {
  const contact = await ContactRepository.findById(contactId);
  if (!contact) {
    throw new ResponseError(404, 'Contact not found');
  }
  const finalData = ContactMappers.toDTO(contact);
  return finalData;
};

const updateContactByAdmin = async (contactId, request, reqUser) => {
  const findContact = await ContactRepository.findById(contactId);
  if (!findContact) {
    throw new ResponseError(404, 'Contact not found');
  }

  const targetUserId = request.userId ? Number(request.userId) : reqUser;
  const findUsers = await UserRepository.findById(targetUserId);
  if (!findUsers) {
    throw new ResponseError(400, 'User not found');
  }

  const requestContactFactory = ContactFactory.create({
    ...request,
    userId: findUsers.getId(),
  });

  try {
    const updateContact = await ContactRepository.update(
      findContact.getId(),
      requestContactFactory
    );

    return {
      message: 'Success update contact by admin',
      contact: ContactMappers.toDTO(updateContact),
    };
  } catch (error) {
    // Prisma unique constraint error
    if (error.code === 'P2002') {
      throw new ResponseError(
        400,
        `Duplicate value detected for unique field: ${error.meta.target.join(', ')}`
      );
    }

    // Jika bukan error Prisma atau tidak dikenal
    throw new ResponseError(500, `Internal Server Error: ${error.message}`);
  }
};

const deleteContactByAdmin = async (contactId) => {
  const findContact = await ContactRepository.findById(contactId);
  if (!findContact) {
    throw new ResponseError(404, 'Contact not found');
  }
  const deleteContact = await ContactRepository.remove(contactId);
  if (!deleteContact) {
    throw new ResponseError(500, 'Failed to delete contact');
  }
  const finalData = {
    message: 'success delete contact by admin',
    contact: ContactMappers.toDTO(deleteContact),
  };
  return finalData;
};
export default {
  createContactByAdmin,
  getAllContact,
  getContactById,
  updateContactByAdmin,
  deleteContactByAdmin,
};
