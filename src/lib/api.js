import axios from 'axios';

// 서버에서 직접 변경해야합니다.
// gitignore 항목에 포함되어 github에 푸시되지 않습니다.
export const postRecommendation = (latitude, longitude, distance, categories) => {
  return axios({
    url: '/api/recommend',
    method: 'post',
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    data: {
      latitude: latitude,
        longitude: longitude,
        distance: distance,
        categories: categories
    }
  }).then((res) => {
    console.log({res});
  }), (err) => {
    alert("err: " + {err});
    console.log({err});
  }
}
