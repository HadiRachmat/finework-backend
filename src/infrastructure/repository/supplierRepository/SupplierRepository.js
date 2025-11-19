import PrismaClient from '../../prisma/index.js';
import SupplierEntity from '../../../domain/entities/supplierEntity/SuplierEntity.js';

export default class SupplierRepository {
  static async create(request) {
    const supplier = await PrismaClient.supplier.create({
      data: request,
      select: {
        id: true,
        supplierName: true,
        contactPerson: true,
        email: true,
        phoneNumber: true,
      },
    });
    return new SupplierEntity(supplier);
  }

  static async findAllSupplier() {
    const suppliers = await PrismaClient.supplier.findMany({
      select: {
        id: true,
        supplierName: true,
        contactPerson: true,
        email: true,
        phoneNumber: true,
      },
    });
    return suppliers.map((supplier) => new SupplierEntity(supplier));
  }

  static async findSupplierById(dataId) {
    const supplier = await PrismaClient.supplier.findUnique({
      where: {
        id: dataId,
      },
      select: {
        id: true,
        supplierName: true,
        contactPerson: true,
        email: true,
        phoneNumber: true,
      },
    });

    return supplier ? new SupplierEntity(supplier) : null;
  }

  static async updateSupplier(dataId, request) {
    const supplier = await PrismaClient.supplier.update({
      where: {
        id: dataId,
      },
      data: request,
      select: {
        id: true,
        supplierName: true,
        contactPerson: true,
        email: true,
        phoneNumber: true,
      },
    });

    return supplier ? new SupplierEntity(supplier) : null;
  }

  static async deleteSupplier(dataId) {
    const supplier = await PrismaClient.supplier.delete({
      where: {
        id: dataId,
      },
      select: {
        id: true,
        supplierName: true,
        contactPerson: true,
        email: true,
        phoneNumber: true,
      },
    });

    return supplier ? new SupplierEntity(supplier) : null;
  }
}
