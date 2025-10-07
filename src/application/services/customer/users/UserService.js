import UserFactory from '../../../../domain/factory/Customers/UserFactory.js';
import UserRepository from '../../../../infrastructure/repository/userRepository/UserRepository.js';
import UserMappers from '../../../mappers/userMappers/UserMappers.js';
import AttachmentRepository from '../../../../infrastructure/repository/attachmentRepository/AttachmentRepository.js';
import AdminAttachmentFactory from '../../../../domain/factory/Admin/AttachmentFactory.js';
import AttachmentMappers from '../../../mappers/attachmentMappers/AttachmentMappers.js';
import ResponseError from '../../../../error/ResponseError.js';

/**
 * GET PROFILE BY CUSTOMER
 * @param {*} userId
 * @returns
 */
const getProfileCustomer = async (userId) => {
  const user = await UserRepository.findById(userId);
  if (!user) {
    throw new ResponseError(404, 'user not found');
  }

  const getAttachment = await AttachmentRepository.findByAttachmentAble(user.getId(), 'user');
  if (!getAttachment) {
    return null;
  }

  const finalData = {
    message: 'user profile retrieved successfully',
    user: UserMappers.toDTO(user),
    attachment: AttachmentMappers.attachmentFilePathDTO(getAttachment),
  };
  return finalData;
};

/**
 * UPDATE PROFILE BY CUSTOMER
 * @param {*} userId
 * @param {*} request
 * @param {*} file
 * @returns
 */
const updateProfileCustomer = async (userId, request, file) => {
  const findUser = await UserRepository.findById(userId);
  if (!findUser) {
    throw new ResponseError(404, 'user not found');
  }

  const requestUserFactory = UserFactory.updateProfile(request.fullname, request.email);

  const userEmail = await UserRepository.findByEmail(requestUserFactory.getEmail());
  if (userEmail && userEmail.getId() !== findUser.getId()) {
    throw new ResponseError(400, 'email already in use');
  }

  const requestUpdate = await UserRepository.update(findUser.getId(), requestUserFactory);

  let attachment = null;
  if (file) {
    const existingAttachment = await AttachmentRepository.findByAttachmentAble(
      findUser.getId(),
      'user'
    );
    if (existingAttachment) {
      await AttachmentRepository.removeAttachment(existingAttachment.getId());
    }
    const attachmentFactory = await AdminAttachmentFactory.create({
      filename: file.originalname,
      filetype: file.mimetype,
      filesize: file.size,
      filepath: file.path,
      attachmentAbleId: findUser.getId(),
      attachmentAbleType: 'user',
    });
    attachment = await AttachmentRepository.createAttachment(attachmentFactory);

    const finalDataWithAttachment = {
      message: 'user profile updated with attachment successfully',
      user: UserMappers.toDTO(requestUpdate),
      attachment: AttachmentMappers.attachmentFilePathDTO(attachment),
    };
    return finalDataWithAttachment;
  }
  const finalData = {
    message: 'user profile updated without Attachment successfully',
    user: UserMappers.toDTO(requestUpdate),
  };

  return finalData;
};

/**
 * DELETE PROFILE BY CUSTOMER
 * @param {*} userId
 * @returns
 */
const removeProfileCustomer = async (userId) => {
  const findUser = await UserRepository.findById(userId);
  if (!findUser) {
    throw new ResponseError(404, 'user not found');
  }

  const existingAttachment = await AttachmentRepository.findByAttachmentAble(
    findUser.getId(),
    'user'
  );
  if (existingAttachment) {
    await AttachmentRepository.removeAttachment(existingAttachment.getId());
  }

  await UserRepository.removeUser(findUser.getId());

  const finalData = {
    message: 'user profile deleted successfully',
  };
  return finalData;
};

export default {
  getProfileCustomer,
  updateProfileCustomer,
  removeProfileCustomer,
};
