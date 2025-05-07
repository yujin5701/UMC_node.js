import { StatusCodes } from "http-status-codes";
import { createStore } from "../services/store.service.js";
import { prisma } from "../db.config.js";

export const handleCreateStore = async (req, res, next) => {
    try {
        const store = await createStore(req.body);
        res.status(StatusCodes.CREATED).json({ result: store });
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
};

export const handleListStoreReviews = async (req, res, next) => {
    const reviews = await listStoreReviews(
      parseInt(req.params.storeId),
      typeof req.query.cursor === "string" ? parseInt(req.query.cursor) : 0
    );
    res.status(StatusCodes.OK).success(reviews);
  };