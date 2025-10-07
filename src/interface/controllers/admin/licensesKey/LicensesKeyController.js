import LicensesKeyService from '../../../../application/services/admin/licensesKey/LicensesKeyService.js';

const create = async (req, res, next) => {
  const request = req.body;
  try {
    const response = await LicensesKeyService.createLicensesKeyByAdmin(request);
    res.status(201).json({
      status: 'success',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await LicensesKeyService.getAllLicensesKeyByAdmin(true);
    return res.status(200).json({
      status: 'get all data Licenses',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await LicensesKeyService.getByIdLicensesKeyByAdmin(id, true);
    return res.status(200).json({
      status: 'get data Licenses By Id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const dataId = Number(req.params.id);
  const request = req.body;
  try {
    const result = await LicensesKeyService.updateLicensesKeyByAdmin(dataId, request);
    res.status(200).json({
      code: 200,
      message: 'update Licenses key',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const dataId = Number(req.params.id);
  try {
    const result = await LicensesKeyService.removeLicensesByAdmin(dataId, false);
    res.status(200).json({
      code: 200,
      message: 'delete Licenses Key',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export default {
  create,
  get,
  getById,
  update,
  remove,
};
