import { getRegionById, insertStore } from "../repositories/store.repository.js"

export const createStore = async (data) => {
    const region = await getRegionById(data.regionId);
    if (!region) {
        throw new Error("존재하지 않는 지역입니다.");
    }
    const storeId = await insertStore(data);
    return {
        id:  Number(storeId),
        name: data.name,
        address: data.address,
        score: data.score,
        regionId: data.regionId,
    };
};

export const listStoreReviews = async (storeId) => {
    const reviews = await getAllStoreReviews(storeId);
    return responseFromReviews(reviews);
  };