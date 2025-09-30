export default class ProductEntity {
  constructor({ id, name, description, price, stock, status, categoryId }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.status = status;
    this.categoryId = categoryId;
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getStock() {
    return this.stock;
  }

  getStatus() {
    return this.status;
  }

  getCategoryId() {
    return this.categoryId;
  }
}
