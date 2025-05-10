import { StatusCodes } from "http-status-codes";
import { challengeMission } from "../services/challenge.service.js";
import { prisma } from "../db.config.js";

export const handleChallengeMission = async (req, res, next) => {
  try {
    const missionId = parseInt(req.params.missionId);
    const userId = req.body.userId;

    const result = await challengeMission(userId, missionId);
    res.status(StatusCodes.CREATED).json({ result });
  } catch (err) {
    next(err);
  }
};
