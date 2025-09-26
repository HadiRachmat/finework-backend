import AttachmentDTO from '../../dto/attachmentDTO/attachmentDTO.js';

export default class AttachmentMappers {
  static toDTO(attachment) {
    return AttachmentDTO.fromEntity(attachment);
  }
  static attachmentFilePathDTO(filePath) {
    return AttachmentDTO.attachmentFilePathToDTO(filePath);
  }
}
