import { createAction, handleActions } from 'redux-actions';

const CHANGE_DISTANCE = 'userDataSubmitForm/CHANGE_DISTANCE';
const CATEGORY_TOGGLE = 'userDataSubmitForm/TOGGLE';
const GET_COORDINATE = 'userDataSubmitForm/GET_COORDINATE';

export const changeDistance = createAction(CHANGE_DISTANCE, distance => distance);

export const categoryToggle = createAction(CATEGORY_TOGGLE, id=>id);

export const getCoordinate = createAction(GET_COORDINATE, (latitude, longitude)=> ({
  latitude: latitude,
  longitude: longitude,
}));

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
    latitude: 0,
    longitude: 0
  },
}

// reducer
const userDataSubmitForm = handleActions(
  {
    [CHANGE_DISTANCE]: (state, action) => ({...state, distance: action.payload}),
    [GET_COORDINATE]: (state, action) => ({...state, coordinate: {
      latitude: action.payload.latitude,
        longitude: action.payload.longitude,
    }}),
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
