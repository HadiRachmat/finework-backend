import Name from '../../valuesObjects/categoriesVo/Name.js';
import Description from '../../valuesObjects/categoriesVo/Description.js';
import CategoriesEntity from '../../entities/categoriesEntity/CategoriesEntity.js';

export default class CategoriesFactory {
  static create({ id, name, description }) {
    const nameVo = new Name(name);
    const descriptionVo = new Description(description);
    return new CategoriesEntity({
      id,
      name: nameVo.name,
      description: descriptionVo.description,
    });
  }

  static update({ id, name, description }) {
    const nameVo = new Name(name);
    const descriptionVo = new Description(description);
    return new CategoriesEntity({
      id,
      name: nameVo.name,
      description: descriptionVo.description,
    });
  }
}
