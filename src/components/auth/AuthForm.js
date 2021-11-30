import styled from 'styled-components';
import palette from '../../lib/styles/palettes';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  
  &:focus {
    color: $oc-teal-7;
    border: 1px solid ${palette.gray[7]};
  }
  
  & + & {
    margin-top: 1rem;
  }
`

/** 폼 하단에 로그인 혹은 회원가입 링크를 보여줌 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]}
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입'
}

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete={"memberEmail"}
          name={"memberEmail"}
          placeholder={"아이디"}
          onChange={onChange}
          value={form.memberEmail}
        />
        <StyledInput
          autoComplete={"new-password"}
          name={"memberPw"}
          placeholder={"비밀번호"}
          type={"password"}
          onChange={onChange}
          value={form.memberPw}
        />
        {type === 'register' && (
          <>
          <StyledInput
            autoComplete={"new-password"}
            name={"memberPwConfirm"}
            placeholder={"비밀번호 확인"}
            type={"password"}
            onChange={onChange}
            value={form.memberPwConfirm}
            />
            <StyledInput
            autoComplete={"memberName"}
            name={"memberName"}

            placeholder={"사용자 이름"}
            onChange={onChange}
            value={form.memberName}
            />
            <StyledInput
              autoComplete={"phoneNumber"}
              name={"phoneNumber"}
              placeholder={"핸드폰 번호"}
              onChange={onChange}
              value={form.phoneNumber}
            />

          </>
        )}
        <ButtonWithMarginTop cyan fullWidth>{text}</ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ?
          (<Link to={"/register"}>회원가입</Link>) :
          (<Link to={"/login"}>로그인</Link>)
        }
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;