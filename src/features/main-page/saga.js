/* eslint-disable import/no-anonymous-default-export */

import { take, call, fork, put, cancel, all, select } from "redux-saga/effects";

import { LOAD_REPOS } from "./constants";

//   import {
//     loginSuccess,
//     loginError,
//     setUserNamePassWord,
//   } from './actions';

function* rootSaga() {
  while (true) {
    yield take(LOAD_REPOS);
    //   yield take(SET_USER_PASSWORD);
    //   yield take(GET_LOGIN);
  }
}

export default function* () {
  yield all([rootSaga()]);
}
