import axios from 'axios'

const client = axios.create(
  // 서버에 따른 URL을 추가해줘야합니다.
  // baseURL: 'http://backServer:8080'
);
export default client;