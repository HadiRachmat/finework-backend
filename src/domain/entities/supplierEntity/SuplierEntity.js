export default class SupplierEntity {
  constructor({ id, name, contact }) {
    this.id = id;
    this.name = name;
    this.contact = contact;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getContact() {
    return this.contact;
  }
}
