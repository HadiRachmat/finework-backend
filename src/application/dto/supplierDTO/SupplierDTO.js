export default class SupplierDTO {
  constructor({ id, name, contact }) {
    this.id = id;
    this.name = name;
    this.contact = contact;
  }

  static fromEntity(supplierEntity) {
    return new SupplierDTO({
      id: supplierEntity.getId(),
      name: supplierEntity.getName(),
      contact: supplierEntity.getContact(),
    });
  }
}