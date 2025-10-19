import OrdersDTO from '../../dto/ordersDTO/OrdersDTO.js';

export default class OrdersMappers {
  static toDTO(orderEntity) {
    return OrdersDTO.fromEntity(orderEntity);
  }
}
