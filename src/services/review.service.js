import { getStoreById, insertReview } from "../repositories/review.repository.js";
import { CustomError } from "../errors.js";

export const createReview = async (storeId, reviewData) => {
    const store = await getStoreById(storeId);
    if (!store) {
        throw new CustomError("해당 가게가 존재하지 않습니다.", 404);
    }

    const reviewId = await insertReview({
        storeId,
        userId: reviewData.userId,
        body: reviewData.body,
        score: reviewData.score,
    });

    return {
        id: Number(reviewId),
        storeId: Number(storeId),
        userId: Number(reviewData.userId),
        body: reviewData.body,
        score: reviewData.score,
    };
};