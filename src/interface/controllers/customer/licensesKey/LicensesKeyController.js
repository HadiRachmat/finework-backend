import LicensesKeyService from '../../../../application/services/customer/licensesKey/LicensesKeyService.js';

const getAll = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await LicensesKeyService.getLicensesForCustomer(req.user, userId, true);
    return res.status(200).json({ status: 200, message: 'user licenses', data: result });
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await LicensesKeyService.getLicenseByIdForCustomer(req.user, id, true);
    return res.status(200).json({ status: 200, message: 'license detail', data: result });
  } catch (error) {
    return next(error);
  }
};

const activate = async (req, res, next) => {
  const id = Number(req.params.id);
  const { iid } = req.body;
  try {
    const result = await LicensesKeyService.activateLicenseByCustomer(req.user, id, iid);
    return res.status(200).json({ status: 200, message: 'license activated', data: result });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAll,
  getById,
  activate,
};
