import { pool } from "../db.config.js";

// 지역 존재 여부 확인
export const getRegionById = async (regionId) => {
    const conn = await pool.getConnection();
    try {
        const [rows] = await conn.query("SELECT * FROM region WHERE id = ?;", [regionId]);
        return rows[0] || null;
    } finally {
        conn.release();
    }
};

// 가게 삽입
export const insertStore = async (storeData) => {
    const conn = await pool.getConnection();
    try {
        const [result] = await conn.query(
            `INSERT INTO store (region_id, name, address, score, created_at, updated_at)
             VALUES (?, ?, ?, ?, NOW(), NOW());`,
            [
              storeData.regionId,
              storeData.name,
              storeData.address,
              storeData.score,
            ]
          );
          return result.insertId;
    } finally {
        conn.release();
    }
};