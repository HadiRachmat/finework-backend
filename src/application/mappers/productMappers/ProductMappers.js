import ProductDTO from "../../dto/productsDTO/ProductDTO.js";

export default class ProductMappers {
  static toDTO (productEntity) {
    return ProductDTO.productEntityToDTO(productEntity);
  }
}