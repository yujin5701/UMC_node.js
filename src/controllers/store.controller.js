import { StatusCodes } from "http-status-codes";
import { createStore } from "../services/store.service.js";

export const handleCreateStore = async (req, res, next) => {
    try {
        const store = await createStore(req.body);
        res.status(StatusCodes.CREATED).json({ result: store });
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
};