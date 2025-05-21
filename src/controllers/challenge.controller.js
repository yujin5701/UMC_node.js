import { StatusCodes } from "http-status-codes";
import { challengeMission } from "../services/challenge.service.js";
import { prisma } from "../db.config.js";

export const handleChallengeMission = async (req, res, next) => {
  /*
  #swagger.summary = '미션 도전 API'
  #swagger.parameters['missionId'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: '도전할 미션 ID'
  }
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'number', example: 5 },
        proofImageUrl: { type: 'string', example: 'https://image.url/example.jpg' }
      }
    }
  }
  #swagger.responses[201] = {
    description: '미션 도전 성공',
    schema: {
      result: {
        challengeId: 301,
        missionId: 201,
        userId: 5,
        status: 'PENDING'
      }
    }
  }
*/

  try {
    const missionId = parseInt(req.params.missionId);
    const userId = req.body.userId;

    const result = await challengeMission(userId, missionId);
    res.status(StatusCodes.CREATED).json({ result });
  } catch (err) {
    next(err);
  }
};
