export default class OrdersEntity {
  constructor({ id, amount, status, userId, user, orderItems }) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.userId = userId;
    this.user = user ?? null;
    this.orderItems = orderItems ?? null;
  }

  getId() {
    return this.id;
  }

  getAmount() {
    return this.amount;
  }

  getStatus() {
    return this.status;
  }

  getUserId() {
    return this.userId;
  }

  getOrderItems() {
    return this.orderItems;
  }
}
