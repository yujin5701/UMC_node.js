import { StatusCodes } from "http-status-codes";
import { createMission } from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
  try {
    const storeId = parseInt(req.params.storeId);
    const mission = await createMission(storeId, req.body);
    res.status(StatusCodes.CREATED).json({ result: mission });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
  }
};
