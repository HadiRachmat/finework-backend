import FileName from '../../valuesObjects/attachmentVo/FileName.js';
import FileType from '../../valuesObjects/attachmentVo/FileType.js';
import FileSize from '../../valuesObjects/attachmentVo/FileSize.js';
import FilePath from '../../valuesObjects/attachmentVo/FilePath.js';
import AttachemtnAbleId from '../../valuesObjects/attachmentVo/AttachmentAbleId.js';
import AttachmentAbleType from '../../valuesObjects/attachmentVo/AttachmentAbleType.js';
import AttachmentEntity from '../../entities/attachmentEntity/AttachmentEntity.js';

export default class AdminAttachmentFactory {
  static async create({
    filename,
    filetype,
    filesize,
    filepath,
    attachmentAbleId,
    attachmentAbleType,
  }) {
    const attachmentFileName = new FileName(filename);
    const attachmentFileType = new FileType(filetype);
    const attachmentFileSize = new FileSize(filesize);
    const attachmentFilePath = new FilePath(filepath);
    const attachmentAble_Id = new AttachemtnAbleId(attachmentAbleId);
    const attachmentAble_Type = new AttachmentAbleType(attachmentAbleType);

    const attachment = new AttachmentEntity({
      fileName: attachmentFileName.filename,
      fileType: attachmentFileType.filetype,
      fileSize: attachmentFileSize.filesize,
      filePath: attachmentFilePath.filepath,
      attachmentAbleId: attachmentAble_Id.attachmentAbleId,
      attachmentAbleType: attachmentAble_Type.attachmentAbleType,
    });

    return attachment;
  }
}
