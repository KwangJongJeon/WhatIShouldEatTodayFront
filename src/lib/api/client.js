import axios from 'axios'
import { config } from 'dotenv'

const client = axios.create({
  // 서버에 따른 URL을 추가해줘야합니다.
  baseURL: process.env.REACT_APP_BACK_SERVER,
  withCredentials: true
});
export default client;