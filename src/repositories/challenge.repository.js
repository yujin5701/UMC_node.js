import { prisma } from "../db.config.js";

// 중복 도전 여부 확인
export const getChallengeByUserAndMission = async (userId, missionId) => {
  return await prisma.user_mission.findFirst({
    where: {
      user_id: userId,
      mission_id: missionId,
      status: "진행중",
    },
  });
};

// 도전 등록
export const insertMissionChallenge = async (userId, missionId) => {
  const result = await prisma.user_mission.create({
    data: {
      user_id: userId,
      mission_id: missionId,
      status: "진행중",
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
  return result.id;
};

// 내가 진행 중인 미션 목록
export const getInProgressMissionsByUserId = async (userId) => {
  return await prisma.user_mission.findMany({
    where: {
      user_id: userId,
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
      created_at: "desc",
    },
  });
};

// 미션 완료로 상태 변경
export const completeMission = async (userMissionId) => {
  return await prisma.user_mission.update({
    where: { id: userMissionId },
    data: {
      status: "완료", // 또는 "completed" 등으로 맞춰서
      updated_at: new Date(),
    },
  });
};

