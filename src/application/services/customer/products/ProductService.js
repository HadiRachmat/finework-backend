import ProductRespository from '../../../../infrastructure/repository/productsRepository/ProductRepository.js';
import ProductMappers from '../../../mappers/productMappers/ProductMappers.js';
import AttachmentRepository from '../../../../infrastructure/repository/attachmentRepository/AttachmentRepository.js';
import AttachmentMappers from '../../../mappers/attachmentMappers/AttachmentMappers.js';
import ResponseError from '../../../../error/ResponseError.js';

const getProdcutByCustomer = async () => {
  const products = await ProductRespository.findAll();
  if (!products) {
    throw new ResponseError('No products found', 404);
  }
  const attachments = await AttachmentRepository.findAllAttachment(
    products.map((prod) => prod.getId()),
    'product'
  );
  const finalData = products.map((prod) => {
    const product = ProductMappers.toDTO(prod);
    const attachment = attachments
      .filter((att) => att.getAttachmentAbleId() === prod.getId())
      .map((att) => AttachmentMappers.toDTO(att));

    return {
      message: 'All Products fetched  by Customer is successfully',
      ...product,
      attachments: attachment,
    };
  });
  return finalData;
};

const getProductByIdWithCustomer = async (productId) => {
  const product = await ProductRespository.findById(productId);
  if (!product) {
    throw new ResponseError('Product not found', 404);
  }
  const attachments = await AttachmentRepository.findAllAttachment(
    product.getId(),
    'product'
  );
  const finalData = {
    product: ProductMappers.toDTO(product),
    attachment: attachments
      .filter((att) => att.getAttachmentAbleId() === product.getId())
      .map((att) => AttachmentMappers.toDTO(att)),

    message: 'Products fetched  by Customer is successfully',
  };
  return finalData;
};

export default {
  getProdcutByCustomer,
  getProductByIdWithCustomer,
};
