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
    })
  } catch (error) {
    next(error);
  }
}

export default {
  register,
}