import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.foodCategory.createMany({
    data: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
      { id: 4, name: '양식' },
      { id: 5, name: '분식' },
      { id: 6, name: '카페/디저트' },
      { id: 7, name: '패스트푸드' },
      { id: 8, name: '치킨' },
      { id: 9, name: '피자' },
      { id: 10, name: '샐러드/건강식' },
    ],
    skipDuplicates: true,
  });

  console.log('🍽️ 음식 카테고리 데이터 삽입 완료!');

  const seoulDistricts = [
    "강남구", "강동구", "강북구", "강서구", "관악구",
    "광진구", "구로구", "금천구", "노원구", "도봉구",
    "동대문구", "동작구", "마포구", "서대문구", "서초구",
    "성동구", "성북구", "송파구", "양천구", "영등포구",
    "용산구", "은평구", "종로구", "중구", "중랑구"
  ];

  const data = seoulDistricts.map((name, idx) => ({
    id: idx + 1,
    name,
  }));

  await prisma.region.createMany({
    data,
    skipDuplicates: true,
  });

  console.log("🏙️ 서울시 25개 자치구(region) 데이터 삽입 완료!");
}

main()
  .catch((e) => {
    console.error('❌ Seed 오류:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
