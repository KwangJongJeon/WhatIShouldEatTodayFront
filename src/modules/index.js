import { combineReducers } from 'redux';
import categories from './categories';
import distanceSelector from './distanceSelector';
import recommendation from "./recommendation";
import userDataSubmitForm from './userDataSubmitForm';
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  categories,
  distanceSelector,
  recommendation,
  userDataSubmitForm,
  auth,
  loading,
})

export default rootReducer;