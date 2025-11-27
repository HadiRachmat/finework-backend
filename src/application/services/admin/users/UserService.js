import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import AdminUserFactory from '../../../../domain/factory/Admin/UserFactory.js';
import UserMappers from '../../../mappers/userMappers/UserMappers.js';
import ResponseError from '../../../../error/ResponseError.js';
import AttachmentRepository from '../../../../infrastructure/repository/attachmentRepository/AttachmentRepository.js';
import AdminAttachmentFactory from '../../../../domain/factory/Admin/AttachmentFactory.js';
import AttachmentMappers from '../../../mappers/attachmentMappers/AttachmentMappers.js';

const createUser = async (request, file) => {
  const { confirmPassword, ...requestData } = request;

  const existingUser = await UserRepository.findByEmail(requestData.email);
  if (existingUser) {
    throw new ResponseError(400, 'Email already in use');
  }

  const requestFactory = await AdminUserFactory.create(requestData);
  const createUser = await UserRepository.create(requestFactory);

  let attachment = null;
  if (file) {
    const attachmentFactory = await AdminAttachmentFactory.create({
      filename: file.originalname,
      filetype: file.mimetype,
      filesize: file.size,
      filepath: file.path,
      attachmentAbleId: createUser.id,
      attachmentAbleType: 'user',
    });
    attachment = await AttachmentRepository.createAttachment(attachmentFactory);
  }

  const finalData = {
    message: 'User created successfully',
    user: createUser,
    attachment: file ? AttachmentMappers.attachmentFilePathDTO(attachment) : null,
  };

  return finalData;
};

const getallUsersByAdmin = async () => {
  const users = await UserRepository.findAllUser();

  const finalData = {
    message: 'Users retrieved successfully',
    users: users,
  };
  return finalData;
};

const getUserById = async (userId) => {
  const user = await UserRepository.findById(userId);
  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  const getAttachment = await AttachmentRepository.findByAttachmentAble(user.getId(), 'user');
  const finalData = {
    message: 'User retrieved successfully',
    user: user,
    attachment: getAttachment ? AttachmentMappers.attachmentFilePathDTO(getAttachment) : null,
  };
  return finalData;
};

const updateUserByAdmin = async (userId, request, file) => {
  const getUserId = await UserRepository.findById(userId);
  if (!getUserId) {
    throw new ResponseError(404, 'User not found');
  }
  const requestFactory = await AdminUserFactory.update(request);
  const updateUser = await UserRepository.update(getUserId.getId(), requestFactory);

  let attachment = null;
  if (file) {
    const findAttachment = await AttachmentRepository.findByAttachmentAble(
      getUserId.getId(),
      'user'
    );
    if (findAttachment) {
      await AttachmentRepository.removeAttachment(findAttachment.getId());
    }
    const attachmentFactory = await AdminAttachmentFactory.create({
      filename: file.originalname,
      filetype: file.mimetype,
      filesize: file.size,
      filepath: file.path,
      attachmentAbleId: getUserId.getId(),
      attachmentAbleType: 'user',
    });
    attachment = await AttachmentRepository.createAttachment(attachmentFactory);
  }

  const finalData = {
    message: 'User updated successfully',
    user: UserMappers.toDTO(updateUser),
    attachment: file ? AttachmentMappers.attachmentFilePathDTO(attachment) : null,
  };

  return finalData;
};
export default { createUser, getallUsersByAdmin, getUserById, updateUserByAdmin };
