import { combineReducers } from 'redux';
import categories from './categories';
import distanceSelector from './distanceSelector';
import recommendation from "./recommendation";

const rootReducer = combineReducers({
  categories,
  distanceSelector,
  recommendation,
})

export default rootReducer;