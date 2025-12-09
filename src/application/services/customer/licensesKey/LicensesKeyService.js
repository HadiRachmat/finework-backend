import LicensesKeyRepository from '../../../../infrastructure/repository/licensesKeyRepository/LicensesKeyRepository.js';
import LicensesKeyMappers from '../../../mappers/LicensesKeyMappers/LicensesKeyMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import crypto from 'crypto';

const getLicensesForCustomer = async (actor, targetUserId, plainText = false) => {
  if (!actor) throw new ResponseError(401, 'Unauthorized');
  // customer can only access their own licenses; admin can access any user
  if (actor.role !== CONSTANT.BASE_ROLE_ADMIN && String(actor.id) !== String(targetUserId)) {
    throw new ResponseError(403, 'Forbidden: cannot access other user licenses');
  }

  const data = await LicensesKeyRepository.findByOwner(targetUserId, plainText);
  return {
    message: 'User licenses retrieved successfully',
    data: data.map((item) => LicensesKeyMappers.toDTOCustomer(item)),
  };
};

const activateLicenseByCustomer = async (actor, licenseId, iid) => {
  if (!actor) throw new ResponseError(401, 'Unauthorized');
  if (!iid || typeof iid !== 'string' || iid.trim().length === 0) {
    throw new ResponseError(400, 'IID is required for activation');
  }

  const license = await LicensesKeyRepository.findById(licenseId, true);
  if (!license) {
    throw new ResponseError(404, 'License not found');
  }

  if (actor.role !== CONSTANT.BASE_ROLE_ADMIN && String(license.ownerId) !== String(actor.id)) {
    throw new ResponseError(403, 'Forbidden: license does not belong to user');
  }

  const iidRegex = /^[A-Za-z0-9\-\_]{8,128}$/;
  if (!iidRegex.test(iid)) {
    throw new ResponseError(400, 'Invalid IID format');
  }

  const hashedIid = crypto.createHash('sha256').update(iid).digest('hex');

  if (license.status === CONSTANT.BASE_STATUS_ACTIVE && license.iid && license.iid !== hashedIid) {
    throw new ResponseError(409, 'License already activated with a different IID');
  }

  const payload = {
    status: CONSTANT.BASE_STATUS_ACTIVE,
    iid: hashedIid,
    activatedBy: actor.id,
    activatedAt: new Date(),
  };

  const updated = await LicensesKeyRepository.update(license.getId(), payload);

  return {
    message: 'License activated successfully',
    data: LicensesKeyMappers.toDTO(updated),
  };
};

const getLicenseByIdForCustomer = async (actor, licenseId, plainText = false) => {
  if (!actor) throw new ResponseError(401, 'Unauthorized');

  const license = await LicensesKeyRepository.findById(licenseId, plainText);
  if (!license) return { message: 'License key not found', data: null };

  if (actor.role !== CONSTANT.BASE_ROLE_ADMIN && String(license.ownerId) !== String(actor.id)) {
    throw new ResponseError(403, 'Forbidden: cannot access this license');
  }

  return {
    message: 'License key retrieved successfully',
    data: LicensesKeyMappers.toDTO(license),
  };
};

export default {
  getLicensesForCustomer,
  activateLicenseByCustomer,
  getLicenseByIdForCustomer,
};
