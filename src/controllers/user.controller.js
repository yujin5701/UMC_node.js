import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

// 아직은 구현하지 않은 Service인 userSignUp 함수를 사용하고 있고, 
// userSignUp 함수에 인자를 넘길 때 bodyToUser DTO를 이용해서 
// 요청 데이터를 한 번 변환하여 전달하고 있음
export const handleUserSignUp = async (req, res, next) => {
    try {
        console.log("회원가입을 요청했습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용
    
        const user = await userSignUp(bodyToUser(req.body)); // DTO로 변환
        res.status(StatusCodes.OK).success(user);
      } catch (err) {
        next(err);
      }
    };
  