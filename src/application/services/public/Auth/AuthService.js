import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import AuthFactory from '../../../../domain/factory/Auth/AuthFactory.js';
import ResponseError from '../../../../error/ResponseError.js';
import UserMappers from '../../../mappers/userMappers/userMappers.js';

const register = async (request) => {
  const { confirmPassword, ...requestData } = request;
  if (request.password !== confirmPassword) {
    throw new ResponseError(400, 'Password and confirm password do not match');
  }

  const requestAuthFactory = await AuthFactory.register(requestData);
  if (!requestAuthFactory) {
    throw new ResponseError(400, 'Failed to create user');
  }

  const existingUserByEmail = await UserRepository.findByEmail(requestData.email);
  if (existingUserByEmail) {
    throw new ResponseError(400, 'Email already in use');
  }

  const registerUser = await UserRepository.create(requestAuthFactory);
  if (!registerUser) {
    throw new ResponseError(400, 'Failed to create user');
  }

  const finalData = {
    message: 'User created successfully',
    data: UserMappers.toDTO(registerUser),
  };

  return finalData;
};

export default {
  register,
};
