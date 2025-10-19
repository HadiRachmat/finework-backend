export default class OrdersDTO {
  constructor({ id, amount, status, userId, orderItems = [] }) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.userId = userId;
    this.orderItems = orderItems;
  }

  static fromEntity(orderEntity) {
    return new OrdersDTO({
      id: orderEntity.getId(),
      amount: orderEntity.getAmount(),
      status: orderEntity.getStatus(),
      userId: orderEntity.getUserId(),
      orderItems: orderEntity.getOrderItems(),
    });
  }
}
