import Contact from '../../valuesObjects/contactsVo/Contact.js';
import Description from '../../valuesObjects/contactsVo/Description.js';
import UserId from '../../valuesObjects/contactsVo/UserId.js';
import ResponseError from '../../../error/ResponseError.js';
import ContactEntity from '../../entities/contactEntity/ContactEntity.js';

export default class ContactFactory {
  static create({ contact, description, userId }) {
    const contactVo = new Contact(contact);
    const descriptionVo = new Description(description);
    const userIdVo = new UserId(userId);

    const contactEntity = new ContactEntity({
      contact: contactVo.contact,
      description: descriptionVo.description,
      userId: userIdVo.userId,
    });

    return contactEntity;
  }
}
