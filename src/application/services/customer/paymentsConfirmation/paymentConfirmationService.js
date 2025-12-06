import PaymentConfirmationRepository from '../../../../infrastructure/repository/paymentConfirmationRepository/PaymentConfirmationRepository.js';
import PaymentConfirmationFactory from '../../../../domain/factory/Customers/PaymentConfirmationFactory.js';
import PaymentConfirmationMappers from '../../../mappers/paymentConfirmationMappers/PaymentConfirmationMappers.js';
import PaymentRepository from '../../../../infrastructure/repository/paymentRepository/PaymentRepository.js';
import PaymentMappers from '../../../mappers/paymentMappers/PaymentMappers.js';
import AttachmentRepository from '../../../../infrastructure/repository/attachmentRepository/AttachmentRepository.js';
import AttachmentFactory from '../../../../domain/factory/Admin/AttachmentFactory.js';
import AttachmentMappers from '../../../mappers/attachmentMappers/AttachmentMappers.js';
import PrismaTransactionHelper from '../../../../helpers/PrismaTransactionHelper.js';
import ResponseError from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/Constant.js';
import path from 'path';

const createPaymentConfirmationWithTx = async (actor, files, request = {}) => {
  return await PrismaTransactionHelper.TransactionHelper(async (tx) => {
    // accept several possible field names from the request (paymentId, paymentid)
    const rawPaymentId =
      request.paymentId || request.paymentid || request.payment_id || request.payment;
    const paymentIdNumber = parseInt(rawPaymentId);
    const findPayment = await PaymentRepository.findPaymentWithTx(tx, paymentIdNumber);
    if (!findPayment) {
      throw new ResponseError(404, 'Payment not found');
    }
    const paymentConfirmationRequest = PaymentConfirmationFactory.create({
      bankAccountName: request.bankAccountName,
      bankName: request.bankName,
      paymentId: findPayment.getId ? findPayment.getId() : findPayment.id,
      code: request.code,
      status: CONSTANT.BASE_PAYMENT_STATUS_PENDING,
    });

    const createPaymentConfirmation =
      await PaymentConfirmationRepository.createPaymentConfirmationWithTx(
        tx,
        paymentConfirmationRequest
      );

    // normalize getters / properties for comparison
    const createdCode =
      typeof createPaymentConfirmation.getCode === 'function'
        ? String(createPaymentConfirmation.getCode()).trim()
        : String(createPaymentConfirmation.code).trim();
    const paymentCode =
      typeof findPayment.getCode === 'function'
        ? String(findPayment.getCode()).trim()
        : String(findPayment.code).trim();

    if (createdCode !== paymentCode) {
      throw new ResponseError(400, `Payment confirmation code does not match`);
    }

    // persist attachments (if any) and collect created attachments
    const createdAttachments = [];
    if (files && files.length > 0) {
      for (const file of files) {
        // normalize file properties from multer / other upload sources
        const fileName =
          file.originalname ||
          file.filename ||
          file.name ||
          (file.path ? path.basename(file.path) : null);
        if (!fileName) {
          throw new ResponseError(400, 'Attachment missing file name');
        }
        const fileType = file.mimetype || file.type || null;
        const fileSize = typeof file.size === 'number' ? file.size : null;
        const filePath = file.path || file.location || null;

        // AttachmentFactory expects lowercase keys: filename, filetype, filesize, filepath
        // build a plain attachment object (avoid relying on factory/VO for persistence)
        const attachmentAbleId =
          typeof createPaymentConfirmation.getId === 'function'
            ? createPaymentConfirmation.getId()
            : createPaymentConfirmation.id;

        const attachmentData = {
          // Prisma / schema expects these exact keys
          fileName: String(fileName),
          fileType: fileType || 'application/octet-stream',
          filePath: filePath || '',
          fileSize: typeof fileSize === 'number' ? fileSize : 0,
          attachmentAbleId: attachmentAbleId,
          attachmentAbleType: 'payment_confirmation',
        };

        // actually save attachment in the same transaction using plain object
        const createdAttachment = await AttachmentRepository.createAttachmentWithTx(
          tx,
          attachmentData
        );
        createdAttachments.push(createdAttachment);
      }
    }

    // conditional update; repository returns affected count (assumption)
    const updatedPaymentEntity = await PaymentRepository.updatePaymentWithTx(
      tx,
      typeof findPayment.getId === 'function' ? findPayment.getId() : findPayment.id,
      CONSTANT.BASE_PAYMENT_STATUS_PENDING,
      CONSTANT.BASE_PAYMENT_STATUS_PROCESSING
    );

    // if update failed (no rows updated) -> likely already processed (idempotent)
    if (!updatedPaymentEntity) {
      return {
        message: 'Payment confirmation created (no payment status changed)',
        paymentConfirmation: PaymentConfirmationMappers.toDTO(createPaymentConfirmation),
        attachments: createdAttachments.map((att) => AttachmentMappers.attachmentFilePathDTO(att)),
      };
    }

    // updatedPaymentEntity is a PaymentEntity instance; map it to DTO
    const updatedPayment = updatedPaymentEntity;

    const finalData = {
      message: 'Payment confirmation created successfully',
      paymentConfirmation: PaymentConfirmationMappers.toDTO(createPaymentConfirmation),
      payment: PaymentMappers.toDTO(updatedPayment),
      attachments: createdAttachments.map((att) => AttachmentMappers.attachmentFilePathDTO(att)),
    };
    return finalData;
  });
};

const getAllPaymentConfirmations = async () => {
  const paymentConfirmations = await PaymentConfirmationRepository.findAllPaymentConfirmation();
  const finalData = {
    message: 'Payment confirmations with customer retrieved successfully',
    paymentConfirmations: paymentConfirmations.map((pc) => PaymentConfirmationMappers.toDTO(pc)),
  };
  return finalData;
};

const getPaymentConfirmationById = async (id) => {
  const paymentConfirmation = await PaymentConfirmationRepository.findPaymentConfirmationById(id);
  if (!paymentConfirmation) {
    throw new ResponseError(404, 'Payment confirmation not found');
  }
  const finalData = {
    message: 'Payment confirmation retrieved successfully',
    paymentConfirmation: PaymentConfirmationMappers.toDTO(paymentConfirmation),
  };
  return finalData;
};
export default {
  createPaymentConfirmationWithTx,
  getAllPaymentConfirmations,
  getPaymentConfirmationById,
};
