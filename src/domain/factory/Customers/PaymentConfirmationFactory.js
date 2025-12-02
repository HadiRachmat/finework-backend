import BankAccountName from '../../valuesObjects/paymentConfirmationVo/BankAccountName.js';
import BankName from '../../valuesObjects/paymentConfirmationVo/BankName.js';
import PaymentId from '../../valuesObjects/paymentConfirmationVo/PaymentId.js';
import Code from '../../valuesObjects/paymentConfirmationVo/Code.js';
import Status from '../../valuesObjects/paymentConfirmationVo/Status.js';
import ResponseError from '../../../error/ResponseError.js';

export default class PaymentConfirmationFactory {
  static create({ bankAccountName, bankName, paymentId, code, status } = {}) {
    const BankAccountNameVo = new BankAccountName(bankAccountName);
    const BankNameVo = new BankName(bankName);
    const PaymentIdVo = new PaymentId(paymentId);
    const CodeVo = new Code(code);
    const StatusVo = new Status(status);

    return {
      bankAccountName: BankAccountNameVo.bankAccountName,
      bankName: BankNameVo.bankName,
      paymentId: PaymentIdVo.paymentId,
      code: CodeVo.code,
      status: StatusVo.status,
    };
  }
}
