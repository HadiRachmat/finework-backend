export default class SupplierDTO {
  constructor({ id, supplierName, contactPerson, email, phoneNumber }) {
    this.id = id;
    this.supplierName = supplierName;
    this.contactPerson = contactPerson;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  static fromEntity(supplierEntity) {
    return new SupplierDTO({
      id: supplierEntity.getId(),
      supplierName: supplierEntity.getSupplierName(),
      contactPerson: supplierEntity.getContactPerson(),
      email: supplierEntity.getEmail(),
      phoneNumber: supplierEntity.getPhoneNumber(),
    });
  }
}
