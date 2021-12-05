import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

import * as recommendationAPI from '../lib/api/recommendation'
import { takeLatest } from 'redux-saga/effects';

const CHANGE_RANGE = 'userDataSubmitForm/CHANGE_RANGE';
const CATEGORY_TOGGLE = 'userDataSubmitForm/TOGGLE';
const GET_COORDINATE = 'userDataSubmitForm/GET_COORDINATE';

const [RECOMMENDATION, RECOMMENDATION_SUCCESS, RECOMMENDATION_FAILURE] = createRequestActionTypes(
  'userDataSubmitForm/RECOMMENDATION',
)

export const changeRange = createAction(CHANGE_RANGE, range => range);

export const categoryToggle = createAction(CATEGORY_TOGGLE, id=>id);

export const getCoordinate = createAction(GET_COORDINATE, coordinate => ({

  latitude: coordinate.coords.latitude,
  longitude: coordinate.coords.longitude

}));


export const recommendation = createAction(RECOMMENDATION, ({ range, latitude, longitude, categories }) => ({
  range,
  latitude,
  longitude,
  categories,
}))

export const getLocationAsync = () => dispatch => {
  const geoLocation = navigator.geolocation;
  geoLocation.getCurrentPosition((position) => {
    dispatch(getCoordinate(position))
  })
}


const recommendationSaga = createRequestSaga(RECOMMENDATION, recommendationAPI.recommendation);

export function* userDataFormSaga() {
  yield takeLatest(RECOMMENDATION, recommendationSaga);
}

const initialState = {
  range: 1000,
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
    longitude: 0,
  },
  recommendation: null,
  recommendationError: null
}

// reducer
const userDataSubmitForm = handleActions(
  {
    [CHANGE_RANGE]: (state, action) => ({...state, range: action.payload}),
    [GET_COORDINATE]: (state, action) => ({...state, coordinate: action.payload}),
    [CATEGORY_TOGGLE]: (state, action) => ({
      ...state,
      categories: state.categories.map(category => category.id === action.payload ?
        { ...category, selected: !category.selected }
        : category)
    }),
    // 추천 성공
    [RECOMMENDATION_SUCCESS]: (state, { payload: recommendation }) => ({
      ...state,
      recommendationError: null,
      recommendation,
    }),
    // 추천 실패
    [RECOMMENDATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      recommendationError: error,
    })
  },
  initialState
)

export default userDataSubmitForm;
