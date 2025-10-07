import LicensesKeyRepository from '../../../../infrastructure/repository/licensesKeyRepository/LicensesKeyRepository.js';
import LicenseFactory from '../../../../domain/factory/Admin/LicensesKey.js';
import LicensesKeyMappers from '../../../mappers/LicensesKeyMappers/LicensesKeyMappers.js';

const createLicensesKeyByAdmin = async (request) => {
  const requestFactory = LicenseFactory.create(request);
  const create = await LicensesKeyRepository.create(requestFactory);
  const finalData = {
    message: 'License key created successfully',
    data: LicensesKeyMappers.toDTO(create),
  };

  return finalData;
};

const getAllLicensesKeyByAdmin = async (plainText = false) => {
  const data = await LicensesKeyRepository.findAllLicenses(plainText);
  const finalData = {
    message: 'License keys retrieved successfully',
    data: data.map((item) => LicensesKeyMappers.toDTO(item)),
  };
  return finalData;
};

const getByIdLicensesKeyByAdmin = async (dataId, plainText = false) => {
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

const updateLicensesKeyByAdmin = async (dataId, request) => {
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

const removeLicensesByAdmin = async (dataId, plainText = false) => {
  const findLicenses = await LicensesKeyRepository.findById(dataId, plainText);
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
