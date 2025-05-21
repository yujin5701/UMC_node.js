import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "UMC 8th",
    description: "UMC Node.js 테스트 프로젝트입니다.",
  },
  host: "localhost:3000", // 배포 시 주소로 바꾸기
  schemes: ["http"],
};

const outputFile = "./swagger-output.json"; // 생성될 파일
const endpointsFiles = ["./index.js"]; // 라우트 정의 파일들

swaggerAutogen()(outputFile, endpointsFiles, doc);
