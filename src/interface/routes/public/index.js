import express from 'express';
import AuthController from '../../controllers/public/auth/AuthController.js';

const AuthRoutes = express.Router();

// Register User
AuthRoutes.post('/api/public/register', AuthController.register);
AuthRoutes.post('/api/public/login', AuthController.login);
AuthRoutes.get('/api/public/refresh-token', AuthController.refreshToken);

export default AuthRoutes;