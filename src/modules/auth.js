import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSage, { createRequestActionTypes } from '../lib/createRequestSage';

import * as authAPI from '../lib/api/auth'

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
)

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);

// Actions

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register, login

export const register = createAction(REGISTER, ({memberEmail, memberPw, memberName, phoneNumber}) => ({
  memberEmail,
  memberPw,
  memberName,
  phoneNumber,
}))

export const login = createAction(LOGIN, ({ memberEmail, memberPw }) => ({
  memberEmail,
  memberPw
}))

// 사가 생성
const registerSage = createRequestSage(REGISTER, authAPI.register);
const loginSaga = createRequestSage(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSage);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    memberEmail: '',
    memberPw: '',
    memberPwConfirm: '',
    memberName: '',
    phoneNumber: '',
  },
  login: {
    userEmail: '',
    password: ''
  },
  auth: null,
  authError: null
}
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, {payload: { form, key, value }}) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    })
  },
  initialState,
)

export default auth;
