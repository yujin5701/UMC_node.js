import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";
import { prisma } from "../db.config.js";

// 아직은 구현하지 않은 Service인 userSignUp 함수를 사용하고 있고, 
// userSignUp 함수에 인자를 넘길 때 bodyToUser DTO를 이용해서 
// 요청 데이터를 한 번 변환하여 전달하고 있음
export const handleUserSignUp = async (req, res, next) => {
    try {
        console.log("회원가입 요청:", req.body);
    
        const user = await userSignUp(bodyToUser(req.body)); // DTO로 변환
        res.status(StatusCodes.CREATED).json({ result: user }); // 201 응답
      } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
      }
    };
  