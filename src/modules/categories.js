import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'categories/CHANGE_INPUT';
const INSERT = 'categories/ADD';
const REMOVE = 'categories/REMOVE';
const TOGGLE = 'categories/TOGGLE';

let id = 2; // 테스트용, add가 호출될때마다 1씩 더해집니다.

export const changeInput = createAction(CHANGE_INPUT, input => input);

export const toggle = createAction(TOGGLE, id=>id);

export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  selected: false,
}));

export const remove = createAction(REMOVE, id => id);


// 테스트용, 초기 데이터
const initialState = {
  input: '',
  categories: [
    {
      id: 1,
      text: '한식',
      selected: false,
    },
  ],
}


// reducer
const categories = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({
      ...state,
      categories: state.categories.concat(action.payload)
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      categories: state.categories.map(category => category.id === action.payload ? {...category, done : !category.done} : category)
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      categories: state.categories.filter(category => category.id !== action.payload),
    }),
  },
  initialState,
);

export default categories;