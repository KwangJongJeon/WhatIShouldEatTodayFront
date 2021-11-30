import { combineReducers } from 'redux';
import categories from './categories';
import distanceSelector from './distanceSelector';
import recommendation from "./recommendation";
import userDataSubmitForm from './userDataSubmitForm';

import { all } from 'redux-saga/effects';
import auth, { authSage } from './auth';
import loading from './loading';
import user, { userSage } from './user';

const rootReducer = combineReducers({
  categories,
  distanceSelector,
  recommendation,
  userDataSubmitForm,
  auth,
  loading,
  user
})

export function* rootSage() {
  yield all([authSage(), userSage()])
}

export default rootReducer;