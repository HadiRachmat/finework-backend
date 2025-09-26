export default class CategoriesEntity {
  constructor({ id, name, description }) {
    this.id = id;
    this.name = name;
    this.description = description;
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
}
