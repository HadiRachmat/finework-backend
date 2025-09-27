import AuthService from '../../../../application/services/public/Auth/AuthService.js';
import { validate } from '../../../../validation/validation.js';
import { registerUserSchema } from '../../../../validation/usersValidation/UsersValidation.js';

const register = async (req, res, next) => {
  const request = req.body;
  const validatedRequestByJoi = validate(registerUserSchema, request);
  try {
    const result = await AuthService.register(validatedRequestByJoi);
    res.status(200).json({
      message: 'register user account',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const request = req.body;
  try {
    const result = await AuthService.login(request);
    res.cookie('refreshToken', result.token.refreshToken, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: 'Strict', // Adjust based on your requirements
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({
      message: 'login user account',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  const request = req.cookies?.refreshToken;
  try {
    const result = await AuthService.refreshToken(request);
    res.status(200).json({
      message: 'refresh token user account',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  refreshToken,
};
