import { combineReducers } from 'redux';
import categories from './categories';
import distanceSelector from './distanceSelector';

const rootReducer = combineReducers({
  categories,
  distanceSelector
})

export default rootReducer;