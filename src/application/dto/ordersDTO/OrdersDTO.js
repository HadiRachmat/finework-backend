export default class OrdersDTO {
  constructor({ id, amount, status, userId, orderItems = [] }) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.userId = userId;
    this.orderItems = orderItems;
  }

  static async fromEntity(orderEntity) {
    const orderItems = orderEntity.getOrderItems().map((item) => ({
      id: item.getId(),
      quantity: item.getQuantity(),
      price: item.getPrice(),
      orderId: item.getOrderId(),
      productId: item.getProductId(),
    }));

    return new OrdersDTO({
      id: orderEntity.getId(),
      amount: orderEntity.getAmount(),
      status: orderEntity.getStatus(),
      userId: orderEntity.getUserId(),
      orderItems,
    });
  }
}
