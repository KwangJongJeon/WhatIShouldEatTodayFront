import React, { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigotor = useNavigate();

  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({auth}) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { memberEmail, memberPw } = form;
    dispatch(login({memberEmail, memberPw}));
  };

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화 함
  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch]);

  useEffect(() => {
    if(authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if(auth) {
      console.log('로그인 성공');
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if(auth) {
      navigotor('/');
    }
  }, [auth])

  return (
    <AuthForm
      type={"login"}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={authError}
    />
  );
};

export default LoginForm;