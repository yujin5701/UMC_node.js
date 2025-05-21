import { StatusCodes } from "http-status-codes";
import { createMission } from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
  /*
  #swagger.summary = '상점 미션 등록 API'
  #swagger.parameters['storeId'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: '미션을 등록할 상점 ID'
  }
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: '아메리카노 마시기' },
        description: { type: 'string', example: '아메리카노 주문 후 리뷰 작성' },
        reward: { type: 'string', example: '무료 쿠폰' }
      }
    }
  }
  #swagger.responses[201] = {
    description: '미션 등록 성공',
    schema: {
      result: {
        id: 201,
        storeId: 1,
        title: '아메리카노 마시기',
        reward: '무료 쿠폰'
      }
    }
  }
*/

  try {
    const storeId = parseInt(req.params.storeId);
    const mission = await createMission(storeId, req.body);
    res.status(StatusCodes.CREATED).json({ result: mission });
  } catch (err) {
    next(err);
  }
};
