import LicensesKeyRepository from '../../../../infrastructure/repository/licensesKeyRepository/LicensesKeyRepository.js';
import LicenseFactory from '../../../../domain/factory/Admin/LicensesKey.js';
import LicensesKeyMappers from '../../../mappers/LicensesKeyMappers/LicensesKeyMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';

const createLicensesKeyByAdmin = async (actor, request) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can create license keys');
  }

  const requestFactory = LicenseFactory.create(request);
  const create = await LicensesKeyRepository.create(requestFactory);
  const finalData = {
    message: 'License key created successfully',
    data: LicensesKeyMappers.toDTO(create),
  };

  return finalData;
};

const getAllLicensesKeyByAdmin = async (actor, plainText = false) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can list all license keys');
  }
  const data = await LicensesKeyRepository.findAllLicenses(plainText);
  const finalData = {
    message: 'License keys retrieved successfully',
    data: data.map((item) => LicensesKeyMappers.toDTO(item)),
  };
  return finalData;
};

const getByIdLicensesKeyByAdmin = async (actor, dataId, plainText = false) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can access license by id');
  }

  const data = await LicensesKeyRepository.findById(dataId, plainText);
  if (!data) {
    return {
      message: 'License key not found',
      data: null,
    };
  }
  const finalData = {
    message: 'License key retrieved successfully',
    data: LicensesKeyMappers.toDTO(data),
  };
  return finalData;
};

const updateLicensesKeyByAdmin = async (actor, dataId, request) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can update license keys');
  }

  // Pastikan data lama ada
  const existingLicense = await LicensesKeyRepository.findById(dataId);
  if (!existingLicense) {
    throw new ResponseError(404, 'License key not found');
  }

  // Gunakan factory untuk proses validasi & hashing jika plainText diubah
  const requestFactory = LicenseFactory.update(request, existingLicense);

  // Lakukan update ke database
  const updated = await LicensesKeyRepository.update(existingLicense.getId(), requestFactory);

  const finalData = {
    message: 'License key updated successfully',
    data: LicensesKeyMappers.toDTO(updated),
  };

  return finalData;
};

const removeLicensesByAdmin = async (actor, dataId, plainText = false) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can delete license keys');
  }

  const findLicenses = await LicensesKeyRepository.findById(dataId, plainText);
  if (!findLicenses) {
    throw new ResponseError(404, 'License key not found');
  }
  const deleteLicenses = await LicensesKeyRepository.remove(dataId);
  const finalData = {
    message: 'delete licenses by admin successfully',
    licencesKey: null,
  };

  return finalData;
};
export default {
  createLicensesKeyByAdmin,
  getAllLicensesKeyByAdmin,
  getByIdLicensesKeyByAdmin,
  updateLicensesKeyByAdmin,
  removeLicensesByAdmin,
};
