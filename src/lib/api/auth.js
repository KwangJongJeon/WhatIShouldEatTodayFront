import client from './client';

// 로그인
export const login = ({ userEmail, password }) => {
  client.post('/api/auth/login', { userEmail, password });
}

// 회원가입
export const register = ({ userEmail, password, username }) => {
  client.post('/api/auth/register', { userEmail, password, username });
}

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');