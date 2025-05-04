import { pool } from "../db.config.js";

// 가게 존재 여부 확인(재사용)
export const getStoreById = async (storeId) =>{
    const conn = await pool.getConnection();
    try {
        const [rows] = await conn.query("SELECT * FROM store WHERE id = ?;", [storeId]);
        return rows[0] || null;
    } finally {
        conn.release();
    }
};

// 미션 추가
export const insertMission = async ({ storeId, reward, deadline, missionSpec }) => {
    const conn = await pool.getConnection();
    try {
        const [result] = await conn.query(
            `INSERT INTO mission (store_id, reward, deadline, mission_spec, created_at, updated_at)
            VALUES (?, ?, ?, ?, NOW(), NOW());`,
            [storeId, reward, deadline, missionSpec]
        );
        return result.insertId;
    } finally {
        conn.release();
    }
};