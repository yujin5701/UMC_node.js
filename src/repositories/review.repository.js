import { pool } from "../db.config.js";
import { prisma } from "../db.config.js";

// 가게 존재 여부 확인
export const getStoreById = async (storeId) => {
    return await prisma.store.findUnique({
      where: { id: storeId },
    });
  };
  
  // 리뷰 삽입
  export const insertReview = async ({ storeId, userId, body, score }) => {
    const result = await prisma.review.create({
      data: {
        store_id: storeId,
        user_id: userId,
        body,
        score,
      },
    });
    return result.id;
  };

  // 내가 작성한 리뷰 목록
export const getReviewsByUserId = async (userId) => {
    return await prisma.review.findMany({
      where: { user_id: userId },
      include: {
        store: {
          select: {
            id: true,
            name: true,
            address: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });
  };
  