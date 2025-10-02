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
export default {
  create,
  getById,
};
