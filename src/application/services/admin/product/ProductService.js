import CategoriesRepository from '../../../../infrastructure/repository/categoriesRepository/CategoriesRepository.js';
import ProductRepository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import ProductFactory from '../../../../domain/factory/Admin/ProductFactory.js';
import ProductMappers from '../../../mappers/productMappers/ProductMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import AttachmentRepository from '../../../../infrastructure/repository/attachmentRepository/AttachmentRepository.js';
import AttachmentFactory from '../../../../domain/factory/Admin/AttachmentFactory.js';
import AttachmentMappers from '../../../mappers/attachmentMappers/AttachmentMappers.js';

const createProductByAdmin = async (request, files) => {
  const productRequest = ProductFactory.create({ ...request });

  const findCategory = await CategoriesRepository.findById(productRequest.categoryId);
  if (!findCategory) {
    throw new ResponseError(404, 'category not found');
  }

  const newProduct = await ProductRepository.create(productRequest);
  if (!newProduct) {
    throw new ResponseError(500, 'failed to create new product');
  }

  let attachments = [];

  if (files && files.length > 0) {
    for (const file of files) {
      const attachmentRequest = await AttachmentFactory.create({
        filename: file.originalname,
        filepath: file.path,
        filetype: file.mimetype,
        filesize: file.size,
        attachmentAbleId: newProduct.id,
        attachmentAbleType: 'product',
      });

      const savedAttachment = await AttachmentRepository.createAttachment(attachmentRequest);
      attachments.push(savedAttachment);
    }
  }

  const finalData = {
    message:
      attachments.length > 0
        ? 'Product created successfully with attachments'
        : 'Product created successfully, without attachment',
    product: ProductMappers.toDTO(newProduct),
    attachments:
      attachments.length > 0
        ? attachments.map((att) => AttachmentMappers.attachmentFilePathDTO(att))
        : [],
  };

  return finalData;
};

const findAllProductsByAdmin = async () => {
  const products = await ProductRepository.findAll();
  if (!products) {
    throw new ResponseError(404, 'Product not found');
  }

  const productsWithAttachments = [];

  for (const prod of products) {
    // Ambil semua attachment untuk product ini
    const productAttachments = await AttachmentRepository.findAllAttachment(
      prod.getId(),
      'product'
    );

    productsWithAttachments.push({
      ...ProductMappers.toDTO(prod),
      attachment: productAttachments.length
        ? productAttachments.map((att) => AttachmentMappers.attachmentFilePathDTO(att))
        : [],
    });
  }

  return {
    message: 'Products retrieved successfully',
    products: productsWithAttachments,
  };
};

const findProductById = async (dataId) => {
  const product = await ProductRepository.findById(dataId);
  if (!product) {
    throw new ResponseError(404, 'Product not found');
  }

  const productAttachments = await AttachmentRepository.findAllAttachment(
    product.getId(),
    'product'
  );

  const finalData = {
    message: 'Product retrieved successfully',
    product: ProductMappers.toDTO(product),
    attachments: productAttachments.length
      ? productAttachments.map((att) => AttachmentMappers.attachmentFilePathDTO(att))
      : [],
  };

  return finalData;
};

const updateProductByAdmin = async (dataId, request, files) => {
  const dataProductId = await ProductRepository.findById(dataId);
  if (!dataProductId) {
    throw new ResponseError(404, 'Product not found');
  }
  const requestFactory = await ProductFactory.update(request);
  const updateProduct = await ProductRepository.update(dataProductId.getId(), requestFactory);

  let attachments = [];

  if (files && files.length > 0) {
    const existingAttachments = await AttachmentRepository.findAllAttachment(
      dataProductId.getId(),
      'product'
    );
    if (existingAttachments.length > 0) {
      for (const existingAtt of existingAttachments) {
        await AttachmentRepository.removeAttachment(existingAtt.getId());
      }
      for (const file of files) {
        const attachmentRequest = await AttachmentFactory.create({
          filename: file.originalname,
          filepath: file.path,
          filetype: file.mimetype,
          filesize: file.size,
          attachmentAbleId: updateProduct.id,
          attachmentAbleType: 'product',
        });
        const updateAttachment = await AttachmentRepository.createAttachment(attachmentRequest);
        attachments.push(updateAttachment);
      }

      const finalData = {
        message:
          attachments.lenght > 0
            ? 'Product updated successfully with attachments'
            : 'Product updated successfully, without attachment',
        product: ProductMappers.toDTO(updateProduct),
        attachments:
          attachments.length > 0
            ? attachments.map((att) => AttachmentMappers.attachmentFilePathDTO(att))
            : [],
      };
      return finalData;
    }
  }
};

const removeProductByAdmin = async (dataId) => {
  const dataProductId = await ProductRepository.findById(dataId);
  if (!dataProductId) {
    throw new ResponseError(404, 'Product not found');
  }

  // Hapus attachment terkait
  const existingAttachments = await AttachmentRepository.findAllAttachment(
    dataProductId.getId(),
    'product'
  );
  if (existingAttachments.length > 0) {
    for (const existingAtt of existingAttachments) {
      await AttachmentRepository.removeAttachment(existingAtt.getId());
    }
  }

  const removeProduct = await ProductRepository.remove(dataProductId.getId());
  if (!removeProduct) {
    throw new ResponseError(500, 'Failed to remove product');
  }

  return {
    message: 'Product removed successfully',
    product: [],
  };
};
export default {
  createProductByAdmin,
  findAllProductsByAdmin,
  findProductById,
  updateProductByAdmin,
  removeProductByAdmin
};
