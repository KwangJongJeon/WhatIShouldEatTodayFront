import { createAction, handleActions } from 'redux-actions';

const CHANGE_DISTANCE = 'userDataSubmitForm/CHANGE_DISTANCE';
const CATEGORY_TOGGLE = 'userDataSubmitForm/TOGGLE';

export const changeDistance = createAction(CHANGE_DISTANCE, distance => distance);
export const categoryToggle = createAction(CATEGORY_TOGGLE, id=>id);

const initialState = {
  distance: 1000,
  categories: [
    {
    id: 1,
    text: '한식',
    selected: false,
    },
    {
    id: 2,
    text: '일식',
    selected: false,
    },
    {
      id: 3,
      text: '양식',
      selected: true,
    }
  ],
  coordinate: {
    latitude: 36.3376482,
    longitude: 127.3395457
  },
}

// reducer
const userDataSubmitForm = handleActions(
  {
    [CHANGE_DISTANCE]: (state, action) => ({...state, distance: action.payload}),
    [CATEGORY_TOGGLE]: (state, action) => ({
      ...state,
      categories: state.categories.map(category => category.id === action.payload ?
        { ...category, selected: !category.selected }
        : category)
    })
  },
  initialState
)

export default userDataSubmitForm;
