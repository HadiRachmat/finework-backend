import express from 'express';
import AuthController from '../../controllers/public/auth/AuthController.js';

const AuthRoutes = express.Router();

// Register User
AuthRoutes.post('/api/public/register', AuthController.register);

export default AuthRoutes;