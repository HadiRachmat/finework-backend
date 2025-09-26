import CategoriesDTO from '../../dto/categoriesDTO/CategoriesDTO.js';

export default class CategoriesMappers {
  static toDTO(entity) {
    return CategoriesDTO.fromEntity(entity);
  }
}
