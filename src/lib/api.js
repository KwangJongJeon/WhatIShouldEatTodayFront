import axios from 'axios';

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
