export default class AttachmentEntity {
  constructor({
    id,
    fileName,
    fileType,
    filePath,
    fileSize,
    attachmentAbleId,
    attachmentAbleType,
  }) {
    this.id = id;
    this.fileName = fileName;
    this.fileType = fileType;
    this.filePath = filePath;
    this.fileSize = fileSize;
    this.attachmentAbleId = attachmentAbleId;
    this.attachmentAbleType = attachmentAbleType;
  }

  getId() {
    return this.id;
  }

  getFileName() {
    return this.fileName;
  }

  getFileType() {
    return this.fileType;
  }

  getFilePath() {
    return this.filePath;
  }

  getFileSize() {
    return this.fileSize;
  }

  getAttachmentAbleId() {
    return this.attachmentAbleId;
  }

  getAttachmentAbleType() {
    return this.attachmentAbleType;
  }
}
