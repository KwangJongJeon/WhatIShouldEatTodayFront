import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../modules/loading';


export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);

      // login시 response data가 없어서 추가
      // 추후 상태 코드에 따라서 변화되도록 변경 필요
      // if(response.data === "") {
      //   response.data = "success";
      // }

      console.log(response.data);

      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}