import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

// 아직은 구현하지 않은 Service인 userSignUp 함수를 사용하고 있고, 
// userSignUp 함수에 인자를 넘길 때 bodyToUser DTO를 이용해서 
// 요청 데이터를 한 번 변환하여 전달하고 있음
export const handleUserSignUp = async (req, res, next) => {
  /*
  #swagger.summary = '회원 가입 API'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        name: { type: 'string', example: '홍길동' },
        gender: { type: 'string', example: 'male' },
        birth: { type: 'string', format: 'date', example: '1990-01-01' },
        address: { type: 'string', example: '서울시 마포구' },
        detailAddress: { type: 'string', example: '101동 101호' },
        phoneNumber: { type: 'string', example: '010-1234-5678' },
        preferences: {
          type: 'array',
          items: { type: 'number' },
          example: [1, 3, 5]
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: '회원 가입 성공 응답',
    schema: {
      resultType: 'SUCCESS',
      error: null,
      success: {
        email: 'user@example.com',
        name: '홍길동',
        preferCategory: ['카페', '전시']
      }
    }
  }

  #swagger.responses[400] = {
    description: '회원 가입 실패 응답',
    schema: {
      resultType: 'FAIL',
      error: {
        errorCode: 'U001',
        reason: '이메일 중복',
        data: {}
      },
      success: null
    }
  }
*/

  res.suc
    try {
        console.log("회원가입을 요청했습니다!");
        console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용
    
        const user = await userSignUp(bodyToUser(req.body)); // DTO로 변환
        res.status(StatusCodes.OK).success(user);
      } catch (err) {
        next(err);
      }
    };
  