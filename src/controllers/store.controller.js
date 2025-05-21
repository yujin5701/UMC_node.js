import { StatusCodes } from "http-status-codes";
import { createStore } from "../services/store.service.js";
import { prisma } from "../db.config.js";

export const handleCreateStore = async (req, res, next) => {
    /*
  #swagger.summary = '상점 등록 API'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: '카페 꼼마' },
        address: { type: 'string', example: '서울 마포구 양화로 188' },
        category: { type: 'string', example: '카페' }
      }
    }
  }
  #swagger.responses[201] = {
    description: '상점 등록 성공',
    schema: {
      result: {
        id: 1,
        name: '카페 꼼마',
        address: '서울 마포구 양화로 188',
        category: '카페'
      }
    }
  }
  #swagger.responses[400] = {
    description: '상점 등록 실패',
    schema: {
      errorCode: 'S001',
      reason: '필수 필드 누락',
      data: {}
    }
  }
*/

    try {
        const store = await createStore(req.body);
        res.status(StatusCodes.CREATED).json({ result: store });
    } catch (err) {
        next(err);
    }
};

export const handleListStoreReviews = async (req, res, next) => {
    
/*
  #swagger.summary = '상점 리뷰 목록 조회 API'
  #swagger.parameters['storeId'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: '리뷰를 조회할 상점의 ID'
  }
  #swagger.parameters['cursor'] = {
    in: 'query',
    required: false,
    type: 'integer',
    description: '페이징 커서'
  }
  #swagger.responses[200] = {
    description: '상점 리뷰 목록 조회 성공 응답',
    schema: {
      resultType: "SUCCESS",
      error: null,
      success: {
        data: [
          {
            id: 1,
            store: {
              id: 10,
              name: "카페 꼼마"
            },
            user: {
              id: 5,
              name: "홍길동",
              email: "hong@example.com"
            },
            content: "좋았어요!"
          }
        ],
        pagination: {
          cursor: null
        }
      }
    }
  }
*/

    const reviews = await listStoreReviews(
      parseInt(req.params.storeId),
      typeof req.query.cursor === "string" ? parseInt(req.query.cursor) : 0
    );
    res.status(StatusCodes.OK).success(reviews);
  };