import PrismaClient from '../../prisma/index.js';
import ContactEntity from '../../../domain/entities/contactEntity/ContactEntity.js';

export default class ContactRepository {
  static async create(request) {
    const contact = await PrismaClient.contacts.create({
      data: request,
      select: {
        id: true,
        contact: true,
        description: true,
        userId: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });
    return contact ? new ContactEntity(contact) : null;
  }

  static async findById(contactId) {
    const contact = await PrismaClient.contacts.findUnique({
      where: {
        id: contactId,
      },
      select: {
        id: true,
        contact: true,
        description: true,
        userId: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });
    return contact ? new ContactEntity(contact) : null;
  }

  static async findAll() {
    const contacts = await PrismaClient.contacts.findMany({
      select: {
        id: true,
        contact: true,
        description: true,
        userId: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });
    return contacts.map((contact) => new ContactEntity(contact));
  }

  static async update(contactId, request) {
    const contact = await PrismaClient.contacts.update({
      where: {
        id: contactId,
      },
      data: request,
      select: {
        id: true,
        contact: true,
        description: true,
        userId: true,
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
          },
        },
      },
    });

    return contact ? new ContactEntity(contact) : null;
  }

  static async remove(contactId) {
    const contact = await PrismaClient.contacts.delete({
      where: {
        id: contactId,
      },
    });

    return contact ? new ContactEntity(contact) : null;
  }
}
