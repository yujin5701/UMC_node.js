export const bodyToUser = (body) => {
    const birth = new Date(body.birth + 'T00:00:00');
  
    return {
      email: body.email,
      name: body.name,
      gender: body.gender,
      birth,
      address: body.address || "",
      detailAddress: body.detailAddress || "",
      phoneNumber: body.phoneNumber,
      preferences: body.preferences,
    };
  };

  export const responseFromUser = ({ user, preferences }) => {
    const u = user[0]; // user는 배열이므로 첫 번째 값만 추출
  
    return {
      id: u.id,
      email: u.email,
      name: u.name,
      gender: u.gender,
      birth: u.birth.toISOString().split('T')[0], // 날짜 포맷 YYYY-MM-DD
      address: u.address,
      detailAddress: u.detail_address,
      phoneNumber: u.phone_number,
      preferences: preferences.map((pref) => ({
        id: pref.id,
        foodCategoryId: pref.food_category_id,
        userId: pref.user_id,
        name: pref.name,
      })),
    };
  };