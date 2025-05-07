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
      region_id: regionId,
      name,
      address,
      score,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
  return result.id;
};
