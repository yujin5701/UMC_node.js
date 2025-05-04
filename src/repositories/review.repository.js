import { pool } from "../db.config.js";

// 가게 존재 여부 확인
export const getStoreById = async (storeId) => {
    const conn = await pool.getConnection();
    try {
        const [rows] = await conn.query("SELECT * FROM store WHERE id = ?;", [storeId]);
        return rows[0] || null;
    } finally {
        conn.release();
    }
};

// 리뷰 삽입
export const insertReview = async ({ storeId, userId, body, score }) => {
    const conn = await pool.getConnection();
    try {
        const [result] = await conn.query(
            `INSERT INTO review (user_id, store_id, body, score)
            VALUES (?, ?, ?, ?);`,
            [userId, storeId, body, score]
        );
        return result.insertId;
    } finally {
        conn.release();
    }
}