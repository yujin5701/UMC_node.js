import { getStoreById, insertReview } from "../repositories/review.repository.js";

export const createReview = async (storeId, reviewData) => {
    const store = await getStoreById(storeId);
    if (!store) {
        throw new Error("해당 가게가 존재하지 않습니다.");
    }

    const reviewId = await insertReview({
        storeId,
        userId: reviewData.userId,
        body: reviewData.body,
        score: reviewData.score,
    });

    return {
        id: reviewId,
        storeId,
        userId: reviewData.userId,
        body: reviewData.body,
        score: reviewData.score,
    };
};