import { getStoreById, insertMission } from "../repositories/mission.repository.js";

export const createMission = async (storeId, missionData) => {
  const store = await getStoreById(storeId);
  if (!store) {
    throw new Error("존재하지 않는 가게입니다.");
  }

  const missionId = await insertMission({
    storeId,
    reward: missionData.reward,
    deadline: missionData.deadline,
    missionSpec: missionData.missionSpec,
  });

  return {
    id: Number(missionId), 
    storeId,
    reward: missionData.reward,
    deadline: missionData.deadline,
    missionSpec: missionData.missionSpec,
  };
};