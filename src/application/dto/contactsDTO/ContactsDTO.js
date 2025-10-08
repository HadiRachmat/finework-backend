export default class ContactsDTO {
  constructor({ id, contact, description, userId, user }) {
    this.id = id;
    this.contact = contact;
    this.description = description;
    this.userId = userId;
    this.user = user
  }
  static fromEntity(entity) {
    return new ContactsDTO({
      id: entity.getId(),
      contact: entity.getContact(),
      description: entity.getDescription(),
      userId: entity.getUserId(),
      user: entity.getUser()
    });
  }
}
