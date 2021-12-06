import client from './client';

// 로그인
export const login = ({ memberEmail, memberPw }) => {
  const formData = new FormData();
  formData.append('memberEmail', memberEmail);
  formData.append('memberPw', memberPw);
  return client.post('/api/auth/login', formData);

}

// 회원가입
export const register = ({ memberEmail, memberPw, memberName, phoneNumber }) => {
  return client.post('/api/auth/register', { memberEmail, memberPw, memberName, phoneNumber});
}

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.get('/api/auth/logout');

