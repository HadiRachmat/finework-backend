export default class ProductDTO {
  constructor({ id, name, description, price, stock, status, categoryId }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.status = status;
    this.categoryId = categoryId;
  }

  static productEntityToDTO(productEntity) {
    return new ProductDTO({
      id: productEntity.getId(),
      name: productEntity.getName(),
      description: productEntity.getDescription(),
      price: productEntity.getPrice(),
      stock: productEntity.getStock(),
      status: productEntity.getStatus(),
      categoryId: productEntity.getCategoryId(),
    });
  }
}
