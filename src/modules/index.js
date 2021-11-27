import { combineReducers } from 'redux';
import categories from './categories';
import distanceSelector from './distanceSelector';
import recommendation from "./recommendation";
import userDataSubmitForm from './userDataSubmitForm';

const rootReducer = combineReducers({
  categories,
  distanceSelector,
  recommendation,
  userDataSubmitForm
})

export default rootReducer;