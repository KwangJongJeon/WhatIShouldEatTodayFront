import React, { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError} = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { memberEmail, memberPw, memberPwConfirm, memberName, phoneNumber } = form;
    if([memberEmail, memberPw, memberPwConfirm, memberName, phoneNumber].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if(memberPw !== memberPwConfirm) {
      setError("패스워드가 일치하지 않습니다. 다시 확인해주세요!");
      dispatch(changeField({form: 'register', key: 'memberPw', value: ''}));
      dispatch(changeField({form: 'register', key: 'memberPwConfirm', value: ''}));
      return;
    }
    dispatch(register({memberEmail, memberPw, memberName, phoneNumber}));

    // redux 회원가입 폼 초기화
    dispatch(changeField({form: 'register', key: 'memberEmail', value: ''}));
    dispatch(changeField({form: 'register', key: 'memberPwConfirm', value: ''}));
    dispatch(changeField({form: 'register', key: 'memberPw', value: ''}));
    dispatch(changeField({form: 'register', key: 'memberName', value: ''}));
    dispatch(changeField({form: 'register', key: 'phoneNumber', value: ''}));
  }

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화 함
  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if(authError) {
        console.log('status: ' + authError.status)
        setError('이미 존재하는 계정입니다.');

      return;
    }

    if(auth) {
      navigate('/');
    }
  }, [auth, authError, dispatch]);

  return (
    <AuthForm
      type={"register"}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;