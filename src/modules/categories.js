import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'categories/CHANGE_INPUT';
const INSERT = 'categories/INSERT';
const REMOVE = 'categories/REMOVE';
const TOGGLE = 'categories/TOGGLE';

let id = 2; // 테스트용, add가 호출될때마다 1씩 더해집니다.

export const changeInput = createAction(CHANGE_INPUT, input => input);


export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  selected: false,
}));

export const toggle = createAction(TOGGLE, id=>id);

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
    [CHANGE_INPUT]: (state, action) => ({...state, input: action.payload}),
    [INSERT]: (state, action) => ({
      ...state,
      categories: state.categories.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      categories: state.categories.map(category => category.id === action.payload ? {...category, selected: !category.selected} : category,),
    })
  },
  initialState
);

export default categories;