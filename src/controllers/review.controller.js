import { StatusCodes } from "http-status-codes";
import { createReview} from "../services/review.service.js";
import { prisma } from "../db.config.js";

export const handleCreateReview = async (req, res, next) => {
    /*
  #swagger.summary = '상점 리뷰 작성 API'
  #swagger.parameters['storeId'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: '리뷰를 작성할 상점 ID'
  }
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'number', example: 5 },
        content: { type: 'string', example: '커피가 맛있어요!' },
        rating: { type: 'number', example: 4 }
      }
    }
  }
  #swagger.responses[201] = {
    description: '리뷰 작성 성공',
    schema: {
      result: {
        id: 101,
        storeId: 1,
        userId: 5,
        content: '커피가 맛있어요!',
        rating: 4
      }
    }
  }
*/

    try {
        const storeId = parseInt(req.params.storeId);
        const review = await createReview(storeId, req.body);
        res.status(StatusCodes.CREATED).json({ result: review });
    } catch (err) {
        next(err);
    }
};