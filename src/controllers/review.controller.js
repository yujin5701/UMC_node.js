import { StatusCodes } from "http-status-codes";
import { createReview} from "../services/review.service.js";

export const handleCreateReview = async (req, res, next) => {
    try {
        const storeId = parseInt(req.params.storeId);
        const review = await createReview(storeId, req.body);
        res.status(StatusCodes.CREATED).json({ result: review });
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({ message:err.message });
    }
};