export default class UserDTO {
  constructor({
    id,
    fullname,
    email,
    password,
    role,
    status,
    contacts = null,
    testimonials = [],
    orders = [],
  } = {}) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.status = status;
    this.contacts = contacts ?? null;
    this.testimonials = testimonials;
    this.orders = orders;
  }

  static userEntityData(user) {
    return new UserDTO({
      id: user.id,
      fullname: user.getFullname(),
      email: user.getEmail(),
      role: user.getRole(),
      status: user.getStatus(),
      contact: user.getContact(),
      // testimonials: user.getTestimonial(),
      // orders: user.getOrders(),
    });
  }
}
