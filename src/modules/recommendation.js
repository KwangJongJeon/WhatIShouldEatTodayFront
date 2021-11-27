import categories from './categories';
import * as api from '../lib/api';
import { handleActions } from 'redux-actions';

const POST_RECOMMENDATION = 'recommendation/POST_RECOMMENDATION';
const POST_RECOMMENDATION_SUCCESS = 'recommendation/POST_RECOMMENDATION_SUCCESS';
const POST_RECOMMENDATION_FAILURE = 'sample/POST_RECOMMENDATION_FAILURE';

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다.
export const postRecommendationRequest = (latitude, longitude, distance, categories) => async dispatch =>{
  dispatch({ type: POST_RECOMMENDATION }); // 요청을 시작한 것을 알림
  try {
    const response = await api.postRecommendation(latitude, longitude, distance, categories);
    dispatch({
      type: POST_RECOMMENDATION_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  }catch(e) {
    dispatch({
      type: POST_RECOMMENDATION_FAILURE,
      payload: e,
      error: true
    }); // 에러 발생
    throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌
  }
};

// 초기 상태 선언
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리
const initialState = {
  loading: {
    POST_RECOMMENDATION: false
  },
  result: null,
}

const recommendation = handleActions(
  {
    [POST_RECOMMENDATION]: state => ({
      ...state,
      loading: {
        ...state.loading,
        POST_RECOMMENDATION: true // 요청 시작
      }
    }),
    [POST_RECOMMENDATION_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_RECOMMENDATION: false // 요청 완료
      }
    }),
    [POST_RECOMMENDATION_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        POST_RECOMMENDATION: false // 요청 완료
      }
    })
  },
);

export default recommendation;

