import SupplierDTO from '../../dto/supplierDTO/SupplierDTO.js';

export default class SupplierMappers {
  static toDTO(supplierEntity) {
    return SupplierDTO.fromEntity(supplierEntity);
  }
}
