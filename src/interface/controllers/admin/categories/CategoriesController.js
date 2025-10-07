import CategoriesServicesAdmin from '../../../../application/services/admin/categories/CategoriesServices.js';
import { validate } from '../../../../validation/validation.js';
import {
  createCategorySchema,
  updateCategorySchema,
} from '../../../../validation/categoriesValidation/CategoriesValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const validated = validate(createCategorySchema, request);
  try {
    const result = await CategoriesServicesAdmin.createCategoryByAdmin(validated);
    res.status(201).json({
      message: 'Create Categories by Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await CategoriesServicesAdmin.getAllCategoriesByAdmin();
    res.status(200).json({
      message: 'Get All Categories by Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const dataId = Number(req.params.id);
  try {
    const result = await CategoriesServicesAdmin.getCategoryById(dataId);
    res.status(200).json({
      message: 'Get Category by Id by Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const dataId = Number(req.params.id);
  const request = req.body;
  const validated = validate(updateCategorySchema, request);
  try {
    const result = await CategoriesServicesAdmin.updateCategoryByAdmin(dataId, validated);
    res.status(200).json({
      message: 'Update Category by Id by Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const dataId = Number(req.params.id);
  try {
    const result = await CategoriesServicesAdmin.deleteCategoryByAdmin(dataId);
    res.status(200).json({
      message: 'Delete Category',
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
  remove,
};
