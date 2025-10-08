export default class ContactEntity {
  constructor({ id, contact, description, userId, user}) {
    this.id = id;
    this.contact = contact;
    this.description = description;
    this.userId = userId
    this.user = user
  }
  getId() {
    return this.id;
  }

  getContact() {
    return this.contact;
  }

  getDescription() {
    return this.description;
  }

  getUserId () {
    return this.userId
  }
  getUser () {
    return this.user
  }
}
