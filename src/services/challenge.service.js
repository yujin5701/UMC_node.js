import {
  getChallengeByUserAndMission,
  insertMissionChallenge,
} from "../repositories/challenge.repository.js";
import { CustomError } from "../errors.js";

export const challengeMission = async (userId, missionId) => {
  const existing = await getChallengeByUserAndMission(userId, missionId);
  if (existing) {
    throw new CustomError("이미 도전 중인 미션입니다.", 409); // 409 Conflict
  }

  const challengeId = await insertMissionChallenge(userId, missionId);

  return {
    id: Number(challengeId),
    userId,
    missionId,
    status: "진행중",
  };
};