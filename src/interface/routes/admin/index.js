import express from 'express';

import { AuthMiddleware, AuthRoleMiddleware } from '../../../middleware/AuthMiddleware.js';
import * as CONSTANT from '../../../configuration/Constant.js';

const RouterAdmin = express.Router();

// ================= User Routes ==================  //
// =================================================  //
/**
 * @route   POST api/admin/users/create
 * @route   GET api/admin/users
 * @route   GET api/admin/users/:id
 * @route   PUT api/admin/users/:id/update
 * @route   DELETE api/admin/users/:id/delete
 * @desc    Create user by admin, get all users, get user by id, update user, delete user
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/users/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get user by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/users',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get user by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/users/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id user by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/users/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update user by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/users/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove user by admin is under constructor' });
    next();
  }
);

// ================= Categories Routes ==================  //
// ======================================================  //
/**
 * @route   POST api/admin/Categories/create
 * @route   GET api/admin/Categories
 * @route   GET api/admin/Categories/:id
 * @route   PUT api/admin/Categories/:id/update
 * @route   DELETE api/admin/Categories/:id/delete
 * @desc    Create, get, get by id, delete, category
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/Categories/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create category by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/Categories',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get categories by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/Categories/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id category by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/Categories/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update category by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/Categories/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove category by admin is under constructor' });
    next();
  }
);

// ================= Product Routes ==================  //
// ===================================================  //
/**
 * @route   POST api/admin/products/create
 * @route   GET api/admin/products
 * @route   GET api/admin/products/:id
 * @route   PUT api/admin/products/:id/update
 * @route   DELETE api/admin/products/:id/delete
 * @desc    Create product by admin, get all products, get product by id, update product, delete product
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/products/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create product by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/products',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get products by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/products/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id product by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/products/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update product by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/products/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove product by admin is under constructor' });
    next();
  }
);

// ================= Licenses Routes ==================  //
// =================================================  //
/**
 * @route   POST api/admin/licenses/create
 * @route   GET api/admin/licenses
 * @route   GET api/admin/licenses/:id
 * @route   PUT api/admin/licenses/:id/update
 * @route   DELETE api/admin/licenses/:id/delete
 * @desc    Create license by admin, get all licenses, get license by id, update license, delete license
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/licenses/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create license by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/licenses',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get licenses by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/licenses/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id license by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/licenses/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update license by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/licenses/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove license by admin is under constructor' });
    next();
  }
);

// ================= Suplier Routes ==================  //
// =================================================  //
/**
 * @route   POST api/admin/suppliers/create
 * @route   GET api/admin/suppliers
 * @route   GET api/admin/suppliers/:id
 * @route   PUT api/admin/suppliers/:id/update
 * @route   DELETE api/admin/suppliers/:id/delete
 * @desc    Create supplier by admin, get all suppliers, get supplier by id, update supplier, delete supplier
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/suppliers/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create supplier by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/suppliers',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get suppliers by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/suppliers/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id supplier by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/suppliers/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update supplier by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/suppliers/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove supplier by admin is under constructor' });
    next();
  }
);

// ================= Orders Routes ==================  //
// ==================================================  //
/**
 * @route   GET api/admin/orders
 * @route   GET api/admin/orders/:id
 * @route   PUT api/admin/orders/:id/update
 * @route   DELETE api/admin/orders/:id/delete
 * @desc    Get all orders, get order by id, update order, delete order
 * @access  Admin Only
 */
RouterAdmin.get(
  '/api/admin/orders',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get orders by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/orders/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id order by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/orders/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update order by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/orders/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove order by admin is under constructor' });
    next();
  }
);

// ================= Testimonial Routes ==================  //
// =======================================================  //
/**
 * @route   GET api/admin/testimonials
 * @route   GET api/admin/testimonials/:id
 * @route   PUT api/admin/testimonials/:id/update
 * @route   DELETE api/admin/testimonials/:id/delete
 * @desc    testimonial by admin, get all testimonials, get testimonial by id, update testimonial, delete testimonial
 * @access  Admin Only
 */
RouterAdmin.get(
  '/api/admin/testimonials',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get testimonials by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/testimonials/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id testimonial by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/testimonials/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update testimonial by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/testimonials/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove testimonial by admin is under constructor' });
    next();
  }
);

// ================= Payments Routes ==================  //
// ====================================================  //
/**
 * @route   POST api/admin/payments/create
 * @route   GET api/admin/payments
 * @route   GET api/admin/payments/:id
 * @route   PUT api/admin/payments/:id/update
 * @route   DELETE api/admin/payments/:id/delete
 * @desc    get all payments, get payment by id, update payment, delete payment
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/payments/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create payment by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/payments',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get payments by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/payments/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id payment by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/payments/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update payment by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/payments/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove payment by admin is under constructor' });
    next();
  }
);

// ================= Payment Confirmation Routes ==================  //
// ================================================================ //
/**
 * @route   POST api/admin/payment-confirmations/create
 * @route   GET api/admin/payment-confirmations
 * @route   GET api/admin/payment-confirmations/:id
 * @route   PUT api/admin/payment-confirmations/:id/update
 * @route   DELETE api/admin/payment-confirmations/:id/delete
 * @desc    get all payment confirmations, get payment confirmation by id, update payment confirmation, delete payment confirmation
 * @access  Admin Only
 */
RouterAdmin.post(
  '/api/admin/payment-confirmations/create',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create payment confirmation by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/payment-confirmations',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get payment confirmations by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/payment-confirmations/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res
      .status(200)
      .json({ message: 'Get by id payment confirmation by admin is under constructor' });
    next();
  }
);

RouterAdmin.put(
  '/api/admin/payment-confirmations/:id/update',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update payment confirmation by admin is under constructor' });
    next();
  }
);

RouterAdmin.delete(
  '/api/admin/payment-confirmations/:id/delete',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Remove payment confirmation by admin is under constructor' });
    next();
  }
);

// ================= AuditLog Routes ==================  //
// =================================================  //
/**
 * @route   GET api/admin/audit-logs
 * @route   GET api/admin/audit-logs/:id
 * @desc    get all audit logs, get audit log by id
 * @access  Admin Only
 */
RouterAdmin.get(
  '/api/admin/audit-logs',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get audit logs by admin is under constructor' });
    next();
  }
);

RouterAdmin.get(
  '/api/admin/audit-logs/:id',
  AuthMiddleware,
  AuthRoleMiddleware(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get by id audit log by admin is under constructor' });
    next();
  }
);

export default RouterAdmin;
