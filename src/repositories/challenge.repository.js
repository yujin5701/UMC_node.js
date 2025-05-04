import { pool } from "../db.config.js";

// 중복 도전 여부 확인
export const getChallengeByUserAndMission = async (userId, missionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT * FROM user_mission 
       WHERE user_id = ? AND mission_id = ? AND status = "진행중";`,
      [userId, missionId]
    );
    return rows[0] || null;
  } finally {
    conn.release();
  }
};

// 도전 등록
export const insertMissionChallenge = async (userId, missionId) => {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO user_mission (user_id, mission_id, status, created_at, updated_at)
       VALUES (?, ?, "진행중", NOW(), NOW());`,
      [userId, missionId]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
};
