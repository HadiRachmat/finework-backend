import UserDTO from "../../dto/userDTO/userDTO.js";

export default class UserMappers {
  static toDTO(user) {
    return UserDTO.userEntityData(user);
  }
}