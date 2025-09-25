export default class UserEntity {
  constructor({
    id,
    fullname,
    email,
    password,
    role,
    status,
    contacts,
    // testimonials = [],
    // orders = [],
  }) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.status = status;
    this.contacts = contacts;
    // this.testimonials = testimonials;
    // this.orders = orders;
  }

  getId() {
    return this.id;
  }

  getFullname() {
    return this.fullname;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }

  getStatus() {
    return this.status;
  }

  getContact() {
    return this.contacts;
  }

  // getTestimonial() {
  //   return this.testimonials;
  // }

  // getOrders() {
  //   return this.orders;
  // }
}
