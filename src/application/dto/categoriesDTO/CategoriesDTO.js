export default class CategoriesDTO {
  constructor({ id, name, description }) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static fromEntity(entity) {
    return new CategoriesDTO({
      id: entity.getId(),
      name: entity.getName(),
      description: entity.getDescription(),
    });
  }
}
