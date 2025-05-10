import { prisma } from "../db.config.js";

// 가게 존재 여부 확인
export const getStoreById = async (storeId) => {
  return await prisma.store.findUnique({
    where: { id: storeId },
  });
};

// 미션 추가
export const insertMission = async ({ storeId, reward, deadline, missionSpec }) => {
  const result = await prisma.mission.create({
    data: {
      store: { connect: { id: storeId } },
      reward,
      deadline: new Date(deadline), 
      missionSpec: missionSpec,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  return result.id;
};

// 특정 가게의 미션 목록
export const getMissionsByStoreId = async (storeId) => {
    return await prisma.mission.findMany({
      where: { store_id: storeId },
      orderBy: {
        deadline: "asc",
      },
    });
  };
  