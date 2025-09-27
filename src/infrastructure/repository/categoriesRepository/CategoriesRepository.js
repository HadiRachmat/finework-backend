import PrismaClient from '../../prisma/index.js';
import CategoriesEntity from '../../../domain/entities/categoriesEntity/CategoriesEntity.js';

export default class CategoriesRepository {
  static async create(request) {
    const categories = await PrismaClient.categories.create({
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return new CategoriesEntity(categories);
  }

  static async findAll() {
    const categories = await PrismaClient.categories.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return categories.map((category) => new CategoriesEntity(category));
  }

  static async findById(dataId) {
    const category = await PrismaClient.categories.findUnique({
      where: {
        id: dataId,
      },
      select: {
        id: true,
        name: true,
        description: true,
      },
    });

    return category ? new CategoriesEntity(category) : null;
  }

  static async update(dataId, request) {
    const category = await PrismaClient.categories.update({
      where: {
        id: dataId,
      },
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return new CategoriesEntity(category);
  }

  static async delete(dataId) {
    await PrismaClient.categories.delete({
      where: {
        id: dataId,
      },
    });
  }
}
