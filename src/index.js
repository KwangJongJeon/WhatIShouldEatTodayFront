import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import rootReducer, { rootSage } from './modules';

import { config } from 'dotenv'

import { Provider } from 'react-redux';
import {createLogger} from "redux-logger/src";
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';



// import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css'
import { check, tempSetUser } from './modules/user';

const logger = createLogger();
console.log(process.env.REACT_APP_KAKAO_API_KEY);

// Redux store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
);


// 로그인 정보를 localStorage에 저장하여
// 새로고침시에도 정보를 유지하도록 해줌
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if(!user) return; // 로그인 상태가 아니라면 아무것도 안 함

    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working!');
  }
}

sagaMiddleware.run(rootSage)
loadUser()

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
