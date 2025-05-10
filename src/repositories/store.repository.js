import { prisma } from "../db.config.js";

// 지역 존재 여부 확인
export const getRegionById = async (regionId) => {
  return await prisma.region.findUnique({
    where: { id: regionId },
  });
};

// 가게 삽입
export const insertStore = async ({ regionId, name, address, score }) => {
  const result = await prisma.store.create({
    data: {
      region: {
        connect: { id: regionId }, 
      },
      name,
      address,
      score,
      createdAt: new Date(), 
      updatedAt: new Date(),
    },
  });
  return result.id;
};
