import { combineReducers } from 'redux';
import userDataSubmitForm, { userDataFormSaga } from './userDataSubmitForm';

import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  userDataSubmitForm,
  auth,
  loading,
  user
})

export function* rootSage() {
  yield all([authSaga(), userSaga(), userDataFormSaga()])
}

export default rootReducer;