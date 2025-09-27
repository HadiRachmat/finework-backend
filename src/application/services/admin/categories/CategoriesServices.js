import CategoriesEntity from '../../../../domain/entities/categoriesEntity/CategoriesEntity.js';
import CategoriesFactory from '../../../../domain/factory/Admin/CategoriesFactory.js';
import CategoriesRepository from '../../../../infrastructure/repository/categoriesRepository/CategoriesRepository.js';
import CategoriesMappers from '../../../mappers/categoriesMappers/CategoriesMappers.js';
import ResponseError from '../../../../error/ResponseError.js';

const createCategoryByAdmin = async (request) => {
  const categoryFactory = CategoriesFactory.create({...request});
  const createCategory = await CategoriesRepository.create(categoryFactory);

  const finalData = {
    message: 'Category created successfully',
    category: CategoriesMappers.toDTO(createCategory),
  };

  return finalData;
};

const getAllCategoriesByAdmin = async () => {
  const categories = await CategoriesRepository.findAll();

  const finalData = {
    message: 'Categories retrieved successfully',
    categories: categories.map((category) => CategoriesMappers.toDTO(category)),
  };
  return finalData;
};

const getCategoryById = async (categoryId) => {
  const category = await CategoriesRepository.findById(categoryId);
  if (!category) {
    throw new ResponseError(404, 'Category not found');
  }

  const finalData = {
    message: 'Category retrieved successfully',
    category: CategoriesMappers.toDTO(category),
  };
  return finalData;
};

const updateCategoryByAdmin = async (categoryId, request) => {
  const existingCategory = await CategoriesRepository.findById(categoryId);
  if (!existingCategory) {
    throw new ResponseError(404, 'Category not found');
  }

  const categoryFactory = CategoriesFactory.update({ id: categoryId, ...request });
  const updateCategory = await CategoriesRepository.update(categoryId, categoryFactory);

  const finalData = {
    message: 'Category updated successfully',
    category: CategoriesMappers.toDTO(updateCategory),
  };

  return finalData;
};

const deleteCategoryByAdmin = async (categoryId) => {
  const existingCategory = await CategoriesRepository.findById(categoryId);
  if (!existingCategory) {
    throw new ResponseError(404, 'Category not found');
  }

  await CategoriesRepository.delete(categoryId);

  const finalData = {
    message: 'Category deleted successfully',
  };
  return finalData;
};

export default {
  createCategoryByAdmin,
  getAllCategoriesByAdmin,
  getCategoryById,
  updateCategoryByAdmin,
  deleteCategoryByAdmin,
};
