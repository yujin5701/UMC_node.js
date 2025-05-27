import { responseFromUser } from "../dtos/user.dto.js";
import { DuplicateUserEmailError } from "../errors.js";
import {
  addUser,
  getUser,
  getUserPreferencesByUserId,
  setPreference,
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
  const joinUserId = await addUser({
    email: data.email,
    name: data.name,
    gender: data.gender,
    birth: data.birth,
    address: data.address,
    detailAddress: data.detailAddress,
    phoneNumber: data.phoneNumber,
  });

  if (joinUserId === null) {
    throw new DuplicateUserEmailError("이미 존재하는 이메일입니다.", data);
  }

  for (const preference of data.preferences) {
    await setPreference(joinUserId, preference);
  }

  const user = await getUser(joinUserId);
  const preferences = await getUserPreferencesByUserId(joinUserId);

  return responseFromUser({ user, preferences });
};

import { updateUser as updateUserRepo } from "../repositories/user.repository.js";

export const updateUser = async (userId, updateData) => {
  // 유효성 검사 등 추가 가능
  const updated = await updateUserRepo(userId, updateData);
  return {
    id: updated.id,
    email: updated.email,
    name: updated.name,
    gender: updated.gender,
    birth: updated.birth,
    address: updated.address,
    detailAddress: updated.detailAddress,
    phoneNumber: updated.phoneNumber,
  };
};
