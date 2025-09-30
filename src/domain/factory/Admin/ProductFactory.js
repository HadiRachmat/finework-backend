import Description from '../../valuesObjects/productVo/Description.js';
import Name from '../../valuesObjects/productVo/Name.js';
import Price from '../../valuesObjects/productVo/Price.js';
import Stock from '../../valuesObjects/productVo/Stock.js';
import Status from '../../valuesObjects/productVo/Stock.js';
import ProductEntity from '../../entities/productEntity/ProductEntity.js';
import ResponseError from '../../../error/ResponseError.js';

export default class ProductFactory {
  static create({ id, name, description, price, stock, status, categoryId }) {
    const nameVo = new Name(name);
    const descriptionVo = new Description(description);
    const priceVo = new Price(price);
    const stockVo = new Stock(stock);
    const statusVo = new Status(status);

    const product = new ProductEntity({
      id,
      name: nameVo.name,
      description: descriptionVo.description,
      price: priceVo.price,
      stock: stockVo.stock,
      status: statusVo.stock,
      categoryId,
    });

    return product;
  }

  static update({ id, name, description, price, stock, status, categoryId }) {
    const nameVo = new Name(name);
    const descriptionVo = new Description(description);
    const priceVo = new Price(price);
    const stockVo = new Stock(stock);
    const statusVo = new Status(status);

    const product = new ProductEntity({
      id,
      name: nameVo.name,
      description: descriptionVo.description,
      price: priceVo.price,
      stock: stockVo.stock,
      status: statusVo.stock,
      categoryId,
    });

    return product;
  }
}
