import SupplierService from '../../../../application/services/admin/supplier/SupplierService.js';
import logger from '../../../../configuration/logging.js';

const create = async (req, res, next) => {
  const request = req.body;

  try {
    const result = await SupplierService.createSupplierByAdmin(request);
    res.status(201).json({
      message: 'Create New Supplier Data',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await SupplierService.getAllSupplierByAdmin();
    res.status(200).json({
      message: 'Get All Supplier Data',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const result = await SupplierService.getSupplierById(id);
    res.status(200).json({
      message: 'Get Supplier Data By Id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const id = Number(req.params.id);
  const request = req.body;

  try {
    const result = await SupplierService.updateSupplierByAdmin(id, request);
    res.status(200).json({
      message: 'Update Supplier Data By Id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  getAll,
  getById,
  update,
};
