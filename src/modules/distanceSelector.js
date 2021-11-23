import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'distanceSelector/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, input => input);

const initialState = {
  distance: 1000,
}

const distanceSelector = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ ...state, distance: action.payload })
  },
  initialState
);

export default distanceSelector;