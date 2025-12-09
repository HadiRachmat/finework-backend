import LicensesKeyRepository from '../../../../infrastructure/repository/licensesKeyRepository/LicensesKeyRepository.js';
import LicenseFactory from '../../../../domain/factory/Admin/LicensesKey.js';
import LicensesKeyMappers from '../../../mappers/LicensesKeyMappers/LicensesKeyMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import logger from '../../../../configuration/logging.js';

const createLicensesKeyByAdmin = async (actor, request) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can create license keys');
  }

  const requestFactory = LicenseFactory.create({
    plainText: request.plainText,
    activationLimit: request.activationLimit,
    status: request.status,
    soldAt: request.soldAt,
    productId: request.productId,
    supplierId: request.supplierId,
  });
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

// ...existing code...
const updateLicensesKeyByAdmin = async (actor, dataId, request) => {
  if (!actor || actor.role !== CONSTANT.BASE_ROLE_ADMIN) {
    throw new ResponseError(403, 'Forbidden: only admin can update license keys');
  }

  // Pastikan data lama ada
  const existingLicense = await LicensesKeyRepository.findById(dataId);
  if (!existingLicense) {
    throw new ResponseError(404, 'License key not found');
  }

  // Debug raw input
  logger.debug('updateLicensesKeyByAdmin - raw request:', {
    status: request?.status,
    ownerId: request?.ownerId,
    typeofStatus: typeof request?.status,
    typeofOwnerId: typeof request?.ownerId,
  });

  // Normalize & validate status jika diperlukan (harus dilakukan sebelum factory)
  if (Object.prototype.hasOwnProperty.call(request, 'status') && request.status !== '') {
    if (request.status === null) {
      request.status = null;
    } else {
      const parsedStatus = Number(request.status);
      if (Number.isNaN(parsedStatus)) {
        throw new ResponseError(400, 'Invalid status value');
      }
      request.status = parsedStatus;
    }
  }

  // Normalize & validate ownerId: '', null, 'null' -> null, object{id} -> id, numeric string -> number
  if (Object.prototype.hasOwnProperty.call(request, 'ownerId')) {
    let rawOwner = request.ownerId;

    if (rawOwner === '' || rawOwner === null || rawOwner === undefined) {
      request.ownerId = null;
    } else if (typeof rawOwner === 'string') {
      const low = rawOwner.trim().toLowerCase();
      if (low === '' || low === 'null' || low === 'undefined') {
        request.ownerId = null;
      } else {
        const parsedOwner = Number(rawOwner);
        if (Number.isNaN(parsedOwner)) {
          throw new ResponseError(400, 'Invalid ownerId value');
        }
        request.ownerId = parsedOwner;
      }
    } else if (typeof rawOwner === 'object') {
      if (Object.prototype.hasOwnProperty.call(rawOwner, 'id')) {
        const parsedOwner = Number(rawOwner.id);
        if (Number.isNaN(parsedOwner)) {
          throw new ResponseError(400, 'Invalid ownerId value');
        }
        request.ownerId = parsedOwner;
      } else {
        throw new ResponseError(400, 'Invalid ownerId value');
      }
    } else {
      const parsedOwner = Number(rawOwner);
      if (Number.isNaN(parsedOwner)) {
        throw new ResponseError(400, 'Invalid ownerId value');
      }
      request.ownerId = parsedOwner;
    }
  }

  logger.debug('updateLicensesKeyByAdmin - normalized request:', {
    status: request?.status,
    ownerId: request?.ownerId,
  });

  // Panggil factory setelah normalisasi input
  let requestFactory;
  try {
    requestFactory = LicenseFactory.update(
      request,
      existingLicense,
      request.status,
      request.ownerId
    );
  } catch (err) {
    logger.error('Factory validation failed:', err.message || err);
    throw err;
  }

  // Lakukan update ke database — tangkap error Prisma untuk pesan yang lebih jelas
  let updated;
  try {
    updated = await LicensesKeyRepository.update(existingLicense.getId(), requestFactory);
  } catch (err) {
    logger.error('licenses update error:', err.message || err);
    // DB kolom ownerId tidak ada
    if ((err.message || '').includes('ownerId') && (err.message || '').includes('does not exist')) {
      throw new ResponseError(500, 'Database mismatch: ownerId column missing. Run migrations or remove ownerId usage.');
    }
    if ((err.message || '').toLowerCase().includes('foreign key') && (err.message || '').includes('productId')) {
      throw new ResponseError(400, 'Invalid productId: referenced product not found');
    }
    throw err;
  }

  const finalData = {
    message: 'License key updated successfully',
    data: LicensesKeyMappers.toDTO(updated),
  };

  return finalData;
};
// ...existing code...

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
