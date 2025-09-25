import jwt from 'jsonwebtoken';
import ResponseError from '../error/ResponseError.js';
import UserRepository from '../infrastructure/repository/userRepository/UserRepository.js';
import { verifyAccessToken } from '../helpers/JwtTokenHelper.js';
import * as CONSTANTS from '../configuration/Constant.js';

export const AuthMiddleware = async (req, res, next) => {
  try {
    const AuthHeader = req.headers['authorization'];
    if (!AuthHeader) {
      return res.status(401).json({
        message: 'Authorization header is missing',
      });
    }

    const token = AuthHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: 'Token is missing',
      });
    }

    const decoded = verifyAccessToken(token);
    if (!decoded) {
      return res.status(401).json({
        message: 'Invalid or expired token',
      });
    }

    const findUserId = await UserRepository.findById(decoded.id);
    if (!findUserId) {
      throw new ResponseError(404, 'User not found');
    }
    req.user = {
      id: findUserId.getId(),
      fullname: findUserId.getFullname(),
      email: findUserId.getEmail(),
      role: findUserId.getRole(),
    };

    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message || 'Unauthorized',
    });
  }
};

export const AuthRoleMiddleware = (roles) => {
  return (req, res, next) => {
    const userRole = Number(req.user.role);
    if (userRole === CONSTANTS.BASE_ROLE_ADMIN) {
      return next();
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({
        message: 'Forbidden: You do not have access to this resource',
      });
    }

    next();
  };
};
