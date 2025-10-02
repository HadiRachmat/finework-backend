import LicensesKeyDTO from "../../dto/LicensesKeyDTO/LicensesKeyDTO.js";

export default class LicensesKeyMappers {
  static toDTO(entity) {
    return LicensesKeyDTO.fromEntity(entity);
  }
}