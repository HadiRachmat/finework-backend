import PrismaClient from '../../prisma/index.js';
import ProductEntity from '../../../domain/entities/productEntity/ProductEntity.js';

export default class ProductRepository {
  static async create(request) {
    const product = await PrismaClient.products.create({
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        status: true,
        categoryId: true,
      },
    });

    return new ProductEntity(product);
  }

  static async findById(dataId) {
    const product = await PrismaClient.products.findUnique({
      where: {
        id: dataId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        status: true,
        categoryId: true,
      },
    });

    return product ? new ProductEntity(product) : null;
  }

  static async findAll() {
    const products = await PrismaClient.products.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        status: true,
        categoryId: true,
      },
    });

    return products ? products.map((product) => new ProductEntity(product)) : [];
  }

  static async findAllForOrder(id) {
    const conditions = Array.isArray(id) ? { in: id } : id;
    const products = await PrismaClient.products.findMany({
      where: {
        id: conditions,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        status: true,
        categoryId: true,
      },
    });
  
    return products ? products.map((product) => new ProductEntity(product)) : [];
  }

  static async update(dataId, request) {
    const product = await PrismaClient.products.update({
      where: {
        id: dataId,
      },
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        status: true,
        categoryId: true,
      },
    });
    return product ? new ProductEntity(product) : null;
  }

  static async remove(dataId) {
    const product = await PrismaClient.products.delete({
      where: { id: dataId },
    });
    return product ? new ProductEntity(product) : null;
  }
}
