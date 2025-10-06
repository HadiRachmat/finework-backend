import SupplierRepository from '../../../../infrastructure/repository/supplierRepository/SupplierRepository.js';
import SupplierFactory from '../../../../domain/factory/Admin/SupplierFactory.js';
import SupplierMappers from '../../../mappers/supplierMappers/SupplierMappers.js';
import ResponseError from '../../../../error/ResponseError.js';

const createSupplierByAdmin = async (request) => {
  const requestSupplierFactory = SupplierFactory.create(request);
  const supplierCreated = await SupplierRepository.create(requestSupplierFactory);
  const finalData = {
    message: 'create Supplier By Admin Successfully',
    supplier: SupplierMappers.toDTO(supplierCreated),
  };
  return finalData;
};

const getAllSupplierByAdmin = async () => {
  const suppliers = await SupplierRepository.findAllSupplier();
  const suppliersDTO = suppliers.map((supplier) => SupplierMappers.toDTO(supplier));
  const finalData = {
    message: 'Get All Supplier By Admin Successfully',
    suppliers: suppliersDTO,
  };
  return finalData;
};

const getSupplierById = async (id) => {
  const supplier = await SupplierRepository.findSupplierById(id);
  if (!supplier) {
    throw new ResponseError(404, 'Supplier Not Found');
  }
  const supplierDTO = SupplierMappers.toDTO(supplier);
  const finalData = {
    message: 'Get Supplier By Id Successfully',
    supplier: supplierDTO,
  };
  return finalData;
};

const updateSupplierByAdmin = async (id, request) => {
  const supplier = await SupplierRepository.findSupplierById(id);
  if (!supplier) {
    throw new ResponseError(404, 'Supplier Not Found');
  }
  const requestSupplierFactory = SupplierFactory.update(request);
  const supplierUpdated = await SupplierRepository.updateSupplier(supplier.getId(), requestSupplierFactory);
  const finalData = {
    message: 'Update Supplier By Admin Successfully',
    supplier: SupplierMappers.toDTO(supplierUpdated),
  };
  return finalData;
};

export default {
  createSupplierByAdmin,
  getAllSupplierByAdmin,
  getSupplierById,
  updateSupplierByAdmin,
};
