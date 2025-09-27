import AdminUserService from '../../../../application/services/admin/users/UserService.js';
import { validate } from '../../../../validation/validation.js';
import {
  createUserSchemaByAdmin,
  updateUserSchemaByAdmin,
} from '../../../../validation/usersValidation/UsersValidation.js';
const create = async (req, res, next) => {
  const request = req.body;
  const file = req.file;
  const validatedRequest = validate(createUserSchemaByAdmin, request);
  try {
    const result = await AdminUserService.createUser(validatedRequest, file);
    res.status(201).json({
      message: 'create user By Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await AdminUserService.getallUsersByAdmin();
    res.status(200).json({
      message: 'get all users By Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const userId = Number(req.params.id);
  try {
    const result = await AdminUserService.getUserById(userId);
    res.status(200).json({
      message: 'get user By Id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const userId = Number(req.params.id);
  const request = req.body;
  const file = req.file;
  const valdatedRequest = validate(updateUserSchemaByAdmin, request);
  try {
    const result = await AdminUserService.updateUserByAdmin(userId, valdatedRequest, file);
    res.status(200).json({
      message: 'update user By Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { create, get, getById, update };
