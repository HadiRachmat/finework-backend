import express from 'express';

const CustomerRoutes = express.Router();

//=============== USER MANAGEMENT ================ //
//================================================= //
/**
 * @route   GET /api/user/customer/user/profile
 * @route   PUT /api/user/customer/user/profile/update
 * @route   DELETE /api/user/customer/user/profile/delete
 * @desc    Get and Update user profile by customer
 * @access  Customer Only
 */
CustomerRoutes.get('/api/user/customer/user/profile', (req, res, next) => {
  res.status(200).json({ message: 'get user profile by customer is under constructor' });
  next();
});
CustomerRoutes.put('/api/user/customer/user/profile/update', (req, res, next) => {
  res.status(200).json({ message: 'update user profile by customer is under constructor' });
  next();
});
CustomerRoutes.delete('/api/user/customer/user/profile/delete', (req, res, next) => {
  res.status(200).json({ message: 'delete user profile by customer is under constructor' });
  next();
});

//========= CONTACT MANGEMENT ========== //
//=====================================//
/**
 * @route   POST /api/user/customer/contact/create
 * @route   GET /api/user/customer/contact
 * @route   GET /api/user/customer/contact/:id
 * @route   UPDATE /api/user/customer/contact/:id/update
 * @route   DELETE /api/user/customer/contact/:id/delete
 * @desc    Create contact messages by customer
 * @access  Customer Only
 */
CustomerRoutes.post('/api/user/customer/contact/create', (req, res, next) => {
  res.status(200).json({ message: 'create contact messages by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/contact', (req, res, next) => {
  res.status(200).json({ message: 'get all contact messages by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/contact/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id contact messages by customer is under constructor' });
  next();
});
CustomerRoutes.put('/api/user/customer/contact/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update contact messages by customer is under constructor' });
  next();
});
CustomerRoutes.delete('/api/user/customer/contact/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'delete contact messages by customer is under constructor' });
  next();
});

//  ================ PRODUCT MANAGEMENT ================  //
//  ====================================================  //
/**
 * @route   GET /api/user/customer/product
 * @route   GET /api/user/customer/product/:id
 * @desc    Get product by customer
 * @access  Customer Only
 */
CustomerRoutes.get('/api/user/customer/product', (req, res, next) => {
  res.status(200).json({ message: 'get product by customer is under constructor' });
  next();
});
CustomerRoutes.get('api/customer/product/:id', (req, res, next) => {
  res.status(200).json({ message: 'get product by id by customer is unde constroctor' });
  next();
});

//  ================ CATEGORIES MANAGEMENT ================  //
//  =======================================================  //
/**
 * @route   GET /api/user/customer/categories
 * @route   GET /api/user/customer/categories/:id
 * @desc    Get categories by customer
 * @access  Customer Only
 */
CustomerRoutes.get('/api/user/customer/categories', (req, res, next) => {
  res.status(200).json({ message: 'get categories by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/categories/:id', (req, res, next) => {
  res.status(200).json({ message: 'get categories by id by customer is under constructor' });
  next();
});

//  ================ ORDERS MANAGEMENT ================  //
//  ===================================================  //
/**
 * @route   POST /api/user/customer/orders/create
 * @route   GET /api/user/customer/orders
 * @route   GET /api/user/customer/orders/:id
 * @desc    Create and Get orders by customer
 * @access  Customer Only
 */
CustomerRoutes.post('/api/user/customer/orders/create', (req, res, next) => {
  res.status(200).json({ message: 'create orders by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/orders', (req, res, next) => {
  res.status(200).json({ message: 'get all orders by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/orders/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id orders by customer is under constructor' });
  next();
});

//  ================ PAYMENT MANAGEMENT ================ //
//  =============================================================  //
/**
 * @route   POST /api/user/customer/payments/create
 * @route   GET /api/user/customer/payments
 * @route   GET /api/user/customer/payments/:id
 * @desc    Create and Get paymentby customer
 * @access  Customer Only
 */
CustomerRoutes.post('/api/user/customer/payments/create', (req, res, next) => {
  res.status(200).json({ message: 'create payment by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/payments', (req, res, next) => {
  res.status(200).json({ message: 'get all payments by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/payments/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id payments by customer is under constructor' });
  next();
});

//  ================ PAYMENT CONFIRMATION MANAGEMENT ================  //
//  ================================================================  //
/**
 * @route   POST /api/user/customer/payment-confirmations/create
 * @route   GET /api/user/customer/payment-confirmations
 * @route   GET /api/user/customer/payment-confirmations/:id
 * @desc    Create and Get payment confirmation by customer
 * @access  Customer Only
 */
CustomerRoutes.post('/api/user/customer/payment-confirmations/create', (req, res, next) => {
  res.status(200).json({ message: 'create payment confirmation by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/payment-confirmations', (req, res, next) => {
  res
    .status(200)
    .json({ message: 'get all payment confirmations by customer is under constructor' });
  next();
});
CustomerRoutes.get('/api/user/customer/payment-confirmations/:id', (req, res, next) => {
  res
    .status(200)
    .json({ message: 'get by id payment confirmations by customer is under constructor' });
  next();
});

//  ================ TESTIMONIALS MANAGEMENT ================  //
//  ======================================================  //
/**
 * @route   POST /api/user/customer/testimonials/create
 * @route   GET /api/user/customer/testimonials
 * @route   GET /api/user/customer/testimonials/:id
 * @route   PUT /api/user/customer/testimonials/:id/update
 * @route   DELETE /api/user/customer/testimonials/:id/delete
 * @desc    Create and Get testimonials by customer
 * @access  Customer Only
 */
CustomerRoutes.post('/api/user/customer/testimonials/create', (req, res, next) => {
  res.status(200).json({ message: 'create testimonials by customer is under constructor' });
  next();
});

CustomerRoutes.get('/api/user/customer/testimonials', (req, res, next) => {
  res.status(200).json({ message: 'get all testimonials by customer is under constructor' });
  next();
});

CustomerRoutes.get('/api/user/customer/testimonials/:id', (req, res, next) => {
  res.status(200).json({ message: 'get by id testimonials by customer is under constructor' });
  next();
});

CustomerRoutes.put('/api/user/customer/testimonials/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'update testimonials by customer is under constructor' });
  next();
});

CustomerRoutes.delete('/api/user/customer/testimonials/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'delete testimonials by customer is under constructor' });
  next();
});

export default CustomerRoutes;
