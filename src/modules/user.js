import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import { call, takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import produce from 'immer';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [ CHECK, CHECK_SUCCESS, CHECK_FAILURE ] = createRequestActionTypes(
  'user/CHECK',
);

const [ GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE] = createRequestActionTypes(
  'user/GET_USER_INFO',
)

const [ EDIT_USER_INFO, EDIT_USER_INFO_SUCCESS, EDIT_USER_INFO_FAILURE] = createRequestActionTypes(
  'user/EDIT_USER_INFO',
)

const LOGOUT = 'user/LOGOUT';
const CHANGE_FIELD = 'user/CHANGE_FIELD';

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form, // userDetails
    key, // memberEmail, nickName...
    value, // 실제 바꾸려는 값
  })
)

export const editUserInfo = createAction(EDIT_USER_INFO, ({memberId, memberEmail, memberName, nickName, phoneNumber}) => ({
  memberId,
  memberEmail,
  memberName,
  nickName,
  phoneNumber,
}))

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const getUserInfo = createAction(GET_USER_INFO);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const getUserInfoSaga = createRequestSaga(GET_USER_INFO, authAPI.getUserInfo)
const editUserInfoSaga = createRequestSaga(EDIT_USER_INFO, authAPI.editUserInfo)

// 로그인 정보 만료되었을 때 사용자 정보 초기화
function checkFailureSaga() {
  try {
    localStorage.removeItem('user'); // 로컬 스토리지에서 user를 제거
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logoutAPI 호출
    localStorage.removeItem('user'); // localStorage에서 user를 제거
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(GET_USER_INFO, getUserInfoSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(EDIT_USER_INFO, editUserInfoSaga);
}



const initialState = {
  user: null,
  checkError: null,
  userDetails: null,
  getUserError: null,
  editUserInfoRes: null,
  editUserInfoError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload : user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload : user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
    [GET_USER_INFO_SUCCESS]: (state, { payload: userDetails }) => ({
      ...state,
      userDetails,
      getUserError: null,
    }),
    [GET_USER_INFO_FAILURE]: (state, {payload: error}) => ({
      ...state,
      userDetails: null,
      getUserError: error,
    }),
    [CHANGE_FIELD]: (state, {payload: { form, key, value }}) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [EDIT_USER_INFO_SUCCESS]: (state, {payload: editUserInfoRes}) => ({
      ...state,
      editUserInfoRes: editUserInfoRes,
      editUserInfoError: null,
    }),
    [EDIT_USER_INFO_FAILURE]: (state, {payload: error}) => ({
      ...state,
      editUserInfoRes: null,
      editUserInfoError: error,
    })
  },
  initialState,
);