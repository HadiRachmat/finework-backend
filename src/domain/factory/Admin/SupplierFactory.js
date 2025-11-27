import SupplierName from '../../valuesObjects/supplierVo/SupplierName.js';
import ContactPerson from '../../valuesObjects/supplierVo/ContactPerson.js';
import Email from '../../valuesObjects/supplierVo/Email.js';
import PhoneNumber from '../../valuesObjects/supplierVo/PhoneNumber.js';
import SupplierEntity from '../../entities/supplierEntity/SuplierEntity.js';

export default class SupplierFactory {
  static create({ id, supplierName, contactPerson, email, phoneNumber }) {
    const cleanContact = typeof contactPerson === 'string' ? contactPerson.trim() : ContactPerson;

    const supplierNameVo = new SupplierName(supplierName);
    const contactPersonVo = new ContactPerson(cleanContact);
    const emailVo = new Email(email);
    const phoneNumberVo = new PhoneNumber(phoneNumber);

    return new SupplierEntity({
      id,
      supplierName: supplierNameVo.supplierName,
      contactPerson: contactPersonVo.contactPerson,
      email: emailVo.email,
      phoneNumber: phoneNumberVo.phoneNumber,
    });
  }

  static update({ id, supplierName, contactPerson, email, phoneNumber }) {
   const cleanContact = typeof contactPerson === 'string' ? contactPerson.trim() : ContactPerson;

   const supplierNameVo = new SupplierName(supplierName);
   const contactPersonVo = new ContactPerson(cleanContact);
   const emailVo = new Email(email);
   const phoneNumberVo = new PhoneNumber(phoneNumber);

   return new SupplierEntity({
     id,
     supplierName: supplierNameVo.supplierName,
     contactPerson: contactPersonVo.contactPerson,
     email: emailVo.email,
     phoneNumber: phoneNumberVo.phoneNumber,
   });
  }
}
