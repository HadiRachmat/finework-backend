import { generateFilePath } from "../../../helpers/MulterHelpers.js";

export default class AttachmentDTO {
  constructor({
    id,
    fileName,
    FileType,
    filePath,
    fileSize,
    attachmentAbleId,
    attachmentAbleType,
    fileUrl
  }) {
    this.id = id;
    this.fileName = fileName;
    this.fileType = FileType;
    this.filePath = filePath;
    this.fileSize = fileSize;
    this.attachmentAbleId = attachmentAbleId;
    this.attachmentAbleType = attachmentAbleType;
    this.fileUrl = fileUrl;
  }

  static fromEntity(entity) {
    return new AttachmentDTO({
      id: entity.getId(),
      fileName: entity.getFileName(),
      FileType: entity.getFileType(),
      filePath: entity.getFilePath(),
      fileSize: entity.getFileSize(),
      attachmentAbleId: entity.getAttachmentAbleId(),
      attachmentAbleType: entity.getAttachmentAbleType(),
    });
  }
  static attachmentFilePathToDTO(attachment) {
    if (!attachment) return null;
    return new AttachmentDTO({
      filePath: attachment.filePath,
      fileUrl: generateFilePath(attachment.filePath ?? attachment.getFilePath()),
    });
  }
}
