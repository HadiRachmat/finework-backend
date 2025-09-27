import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import AuthFactory from '../../../../domain/factory/Auth/AuthFactory.js';
import ResponseError from '../../../../error/ResponseError.js';
import UserMappers from '../../../mappers/userMappers/UserMappers.js';
import logger from '../../../../configuration/logging.js';
import {
  generateAccessToken,
  genereteRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from '../../../../helpers/JwtTokenHelper.js';

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

const login = async (request) => {
  const { email, password } = request;

  const user = await UserRepository.findByEmail(email);
  if (!user) {
    throw new ResponseError(401, 'Invalid email');
  }
  const isPasswordValid = await AuthFactory.login({
    email,
    password,
    hashedPassword: user.getPassword(),
  });

  if (!isPasswordValid) {
    throw new ResponseError(401, 'Invalid password');
  }

  const payload = {
    id: user.getId(),
    email: user.getEmail(),
    role: user.getRole(),
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = genereteRefreshToken(payload);

  const finalData = {
    message: 'Login successful',
    user: UserMappers.toDTO(user),
    token: {
      accessToken,
      refreshToken,
    },
  };

  return finalData;
};

const refreshToken = async (token) => {
  if (!token) {
    throw new ResponseError(401, 'No token provided');
  }

  const payload = verifyRefreshToken(token);
  const user = await UserRepository.findById(payload.id);
  if (!user) {
    throw new ResponseError(401, 'Invalid token');
  }

  const payloadNewToken = {
    id: user.getId(),
    email: user.getEmail(),
    role: user.getRole(),
  };

  const accessToken = generateAccessToken(payloadNewToken);

  const finalData = {
    message: 'Token refreshed successfully',
    token: {
      newToken: accessToken,
    },
  };

  return finalData;
};

export default {
  register,
  login,
  refreshToken,
};
