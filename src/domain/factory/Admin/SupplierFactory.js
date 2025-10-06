import Name from '../../valuesObjects/supplierVo/name.js';
import Contact from '../../valuesObjects/supplierVo/contact.js';
import SupplierEntity from '../../entities/supplierEntity/SuplierEntity.js';

export default class SupplierFactory {
  static create({ id, name, contact }) {
    const cleanContact = typeof contact === 'string' ? contact.trim() : contact;

    const supplierNameVo = new Name(name);
    const supplierContactVo = new Contact(cleanContact);

    return new SupplierEntity({
      id,
      name: supplierNameVo.name,
      contact: supplierContactVo.contact,
    });
  }

  static update({ id, name, contact }) {
    const supplierNameVo = new Name(name);
    const supplierContactVo = new Contact(contact);

    return new SupplierEntity({
      id: id,
      name: supplierNameVo.name,
      contact: supplierContactVo.contact,
    });
  }
}
