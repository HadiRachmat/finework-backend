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

export default {
  createLicensesKeyByAdmin,
  getByIdLicensesKeyByAdmin,
};
