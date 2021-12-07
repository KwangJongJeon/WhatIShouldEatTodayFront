import UserMyPage from '../components/UserMyPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeField, editUserInfo, getUserInfo } from '../modules/user';
import { useNavigate } from 'react-router-dom';

const UserMyPageContainer = () => {

  const [error, setError] = useState();
  const { userDetails, form } = useSelector(({user}) => ({
    userDetails: user.userDetails,
    form: user.userDetails,
  }))
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'userDetails',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { memberId, memberEmail, memberName, nickName, phoneNumber } = form;
    if(!(phoneNumber.length === 10 || phoneNumber.length === 11)) {
      dispatch(changeField({form: 'userDetails', key: 'phoneNumber', value: ''}))
      setError('잘못된 전화번호를 입력하셨습니다.');
      return;
    }
    dispatch(editUserInfo({ memberId, memberEmail, memberName, nickName, phoneNumber}));
    alert('회원정보가 성공적으로 변경되었습니다!');
    navigate('/');
  }

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <UserMyPage userDetails={userDetails}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}
    />
  )
}

export default UserMyPageContainer;