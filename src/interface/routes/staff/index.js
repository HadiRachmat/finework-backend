import express from 'express';

const StaffRoutes = express.Router();

//================ USER MANAGEMENT ================ //
//================================================= //
/**
 * @route   GET /api/staff/user/customer
 * @desc    Get user at role customer by staff
 * @access  Staff Only
 */
StaffRoutes.get('/api/user/staff/user/profile', (req, res, next) => {
  res.status(200).json({ message: 'get user role customer by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/user/profile/:id', (req, res, next) => {
  res
    .status(200)
    .json({ message: 'get by id user at role customer by staff is under constructor' });
  next();
});

StaffRoutes.put('/api/user/staff/user/profile/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update user at role customer by staff is under constructor' });
  next();
});

StaffRoutes.delete('/api/user/staff/user/profile/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'delete user at role customer by staff is under constructor' });
  next();
});

// ================ CONTACT MANAGEMENT ================ //
// =================================================== //
/**
 * @route   POST /api/user/staff/contact/create
 * @route   GET /api/user/staff/contact
 * @route   GET /api/user/staff/contact/:id
 * @route   PUT /api/user/staff/contact/:id/update
 * @route   DELETE /api/user/staff/contact/:id/delete
 * @desc    Manage contact messages by staff
 * @access  Staff Only
 */
StaffRoutes.post('/api/user/staff/contact/create', (req, res, next) => {
  res.status(200).json({ message: 'create contact messages by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/contact', (req, res, next) => {
  res.status(200).json({ message: 'get all contact messages by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/contact/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id contact messages by staff is under constructor' });
  next();
});

StaffRoutes.put('/api/user/staff/contact/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update contact messages by staff is under constructor' });
  next();
});

StaffRoutes.delete('/api/user/staff/contact/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'delete contact messages by staff is under constructor' });
  next();
});

// ================ CATEGORIES MANAGEMENT ================ //
// =================================================== //
StaffRoutes.post('/api/user/staff/categories/create', (req, res, next) => {
  res.status(200).json({ message: 'create categories by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/categories', (req, res, next) => {
  res.status(200).json({ message: 'get all categories by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/categories/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id categories by staff is under constructor' });
  next();
});

StaffRoutes.put('/api/user/staff/categories/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update categories by staff is under constructor' });
  next();
});

// ================ PRODUCT MANAGEMENT ================ //
// =================================================== //
/**
 * @route   POST /api/user/staff/product/create
 * @route   GET /api/user/staff/product
 * @route   GET /api/user/staff/product/:id
 * @route   PUT /api/user/staff/product/:id/update
 * @desc    Manage product by staff
 * @access  Staff Only
 */
StaffRoutes.post('/api/user/staff/product/create', (req, res, next) => {
  res.status(200).json({ message: 'create product by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/product', (req, res, next) => {
  res.status(200).json({ message: 'get all product by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/user/staff/product/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id product by staff is under constructor' });
  next();
});

StaffRoutes.put('/api/user/staff/product/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update product by staff is under constructor' });
  next();
});

// ================ ORDERS MANAGEMENT ================ //
// =================================================== //
/**
 * @route   GET /api/staff/orders
 * @route   GET /api/staff/orders/:id
 * @route   PUT /api/staff/orders/:id/update
 * @desc    Get all orders by staff
 * @access  Staff Only
 */
StaffRoutes.get('/api/staff/orders', (req, res, next) => {
  res.status(200).json({ message: 'Get all orders by staff is under constructor' });
  next();
});
StaffRoutes.get('/api/staff/orders/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get by id orders by staff is under constructor' });
  next();
});
StaffRoutes.put('/api/staff/orders/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Update orders by staff is under constructor' });
  next();
});

// ================ PAYMENT MANAGEMENT ================ //
// ==================================================== //
/**
 * @route   GET /api/staff/payment
 * @route   GET /api/staff/payment/:id
 * @route   PUT /api/staff/payment/:id/update
 * @desc    Get all payment by staff
 * @access  Staff Only
 */
StaffRoutes.get('api/staff/payment', (req, res, next) => {
  res.status(200).json({ message: 'get all payment by staff is under constructor' });
  next();
});
StaffRoutes.get('api/staff/payment/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id payment by staff is under constructor' });
  next();
});
StaffRoutes.put('api/staff/payment/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update payment by staff is under constructor' });
  next();
});

// ================ PAYMENT CONFIRMATION MANAGEMENT ================ //
// ================================================================= //
/**
 * @route   GET /api/staff/payment-confirmations
 * @route   GET /api/staff/payment-confirmations/:id
 * @route   PUT /api/staff/payment-confirmations/:id/update
 * @desc    Get all payment confirmations by staff
 * @access  Staff Only
 */
StaffRoutes.get('/api/staff/payment-confirmations', (req, res, next) => {
  res.status(200).json({ message: 'Get all payment confirmations by staff is under constructor' });
  next();
});
StaffRoutes.get('/api/staff/payment-confirmations/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get by id payment confirmation by staff is under constructor' });
  next();
});
StaffRoutes.put('/api/staff/payment-confirmations/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Update payment confirmation by staff is under constructor' });
  next();
});

// ================ TESTIMONIAL MANAGEMENT ================ //
// ======================================================== //
StaffRoutes.get('/api/staff/testimonials', (req, res, next) => {
  res.status(200).json({ message: 'get all testimonials by staff is under constructor' });
  next();
});

StaffRoutes.get('/api/staff/testimonials/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id testimonials by staff is under constructor' });
  next();
});

StaffRoutes.put('/api/staff/testimonials/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update testimonials by staff is under constructor' });
  next();
});

StaffRoutes.delete('/api/staff/testimonials/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'delete testimonials by staff is under constructor' });
  next();
});

// ================ AUDIT LOGS MANAGEMENT ================ //
// ===================================================== //
/**
 * @route   GET /api/staff/audit-logs
 * @route   GET /api/staff/audit-logs/:id
 * @desc    Get all audit logs by staff
 * @access  Staff Only
 */
StaffRoutes.get('/api/staff/audit-logs', (req, res, next) => {
  res.status(200).json({ message: 'Get all audit logs by staff is under constructor' });
  next();
});
StaffRoutes.get('/api/staff/audit-logs/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get by id audit log by staff is under constructor' });
  next();
});

export default StaffRoutes;
