export default class SupplierEntity {
  constructor({ id, supplierName, contactPerson, email, phoneNumber }) {
    this.id = id;
    this.supplierName = supplierName;
    this.contactPerson = contactPerson;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  getId() {
    return this.id;
  }

  getSupplierName() {
    return this.supplierName;
  }

  getContactPerson() {
    return this.contactPerson;
  }

  getEmail() {
    return this.email;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
}
