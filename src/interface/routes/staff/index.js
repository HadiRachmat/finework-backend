import express from 'express';

const StaffRoutes = express.Router();

//================ USER MANAGEMENT ================ //
//================================================= //
/**
 * @route   GET /api/staff/user/customer
 * @desc    Get user at role customer by staff
 * @access  Staff Only
 */
StaffRoutes.get('/api/staff/user/customer', (req, res, next) => {
  res.status(200).json({ message: 'get user role customer by staff is under constructor' });
  next();
});
StaffRoutes.get('/api/staff/user/customer/:id', (req, res, next) => {
  res
    .status(200)
    .json({ message: 'get by id user at role customer by staff is under constructor' });
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
