import ContactsDTO from '../../dto/contactsDTO/ContactsDTO.js';

export default class ContactMappers {
  static toDTO(contactEntity) {
    return ContactsDTO.fromEntity(contactEntity);
  }
}
