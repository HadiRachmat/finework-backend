import UserServiceCustomer from '../../../../application/services/customer/users/UserService.js';
import { validate } from '../../../../validation/validation.js';
import { updateUserSchemaByCustomer } from '../../../../validation/usersValidation/UsersValidation.js';

/**
 * GET PROFILE BY CUSTOMER
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const getProfile = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await UserServiceCustomer.getProfileCustomer(userId);
    return res.status(200).json({
      status: 200,
      message: 'get profile user by customer',
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * UPDATE PROFILE BY CUSTOMER
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const updateProfile = async (req, res, next) => {
  const userId = req.user.id;
  const request = req.body;
  const file = req.file;
  const validated = validate(updateUserSchemaByCustomer, request);
  try {
    const result = await UserServiceCustomer.updateProfileCustomer(userId, validated, file);
    return res.status(200).json({
      status: 200,
      message: 'update user by customer',
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * REMOVE PROFILE BY CUSTOMER
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const removeProfileCustomer = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await UserServiceCustomer.removeProfileCustomer(userId);
    return res.status(200).json({
      status: 200,
      message: 'remove user profile by customer',
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  updateProfile,
  getProfile,
  removeProfileCustomer,
};
