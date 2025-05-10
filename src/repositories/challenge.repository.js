import { prisma } from "../db.config.js";

// 중복 도전 여부 확인
export const getChallengeByUserAndMission = async (userId, missionId) => {
  return await prisma.userMission.findFirst({
    where: {
      userId: userId,
      missionId: missionId,
      status: "진행중",
    },
  });
};

// 도전 등록
export const insertMissionChallenge = async (userId, missionId) => {
  const result = await prisma.userMission.create({
    data: {
      userId: userId,
      missionId: missionId,
      status: "진행중",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  return result.id;
};

// 내가 진행 중인 미션 목록
export const getInProgressMissionsByUserId = async (userId) => {
  return await prisma.userMission.findMany({
    where: {
      userId: userId,
      status: "진행중",
    },
    include: {
      mission: {
        include: {
          store: {
            select: {
              id: true,
              name: true,
              address: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// 미션 완료로 상태 변경
export const completeMission = async (userMissionId) => {
  return await prisma.userMission.update({
    where: { id: userMissionId },
    data: {
      status: "완료", // 또는 "completed" 등으로 맞춰서
      updatedAt: new Date(),
    },
  });
};

