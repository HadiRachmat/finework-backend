import PrismaClient from '../../prisma/index.js';
import AttachmentEntity from '../../../domain/entities/attachmentEntity/AttachmentEntity.js';

export default class AttachmentRepository {
  static async createAttachment(request) {
    const attachment = await PrismaClient.attachment.create({
      data: request,
      select: {
        id: true,
        fileName: true,
        fileType: true,
        filePath: true,
        fileSize: true,
        attachmentAbleId: true,
        attachmentAbleType: true,
      },
    });

    return new AttachmentEntity(attachment);
  }

  static async findByAttachmentAble(ableId, ableType) {
    const attachments = await PrismaClient.attachment.findFirst({
      where: {
        attachmentAbleId: ableId,
        attachmentAbleType: ableType,
      },
      select: {
        id: true,
        fileName: true,
        fileType: true,
        filePath: true,
        fileSize: true,
        attachmentAbleId: true,
        attachmentAbleType: true,
      },
    });

    return attachments ? new AttachmentEntity(attachments) : null;
  }

  static async removeAttachment(attachmentId) {
    const attachment = await PrismaClient.attachment.delete({
      where: {
        id: attachmentId,
      },
      select: {
        id: true,
        fileName: true,
        fileType: true,
        filePath: true,
        fileSize: true,
        attachmentAbleId: true,
        attachmentAbleType: true,
      },
    });

    return attachment ? new AttachmentEntity(attachment) : null;
  }
}
