/* eslint-disable import/no-anonymous-default-export */

import { take, all } from "redux-saga/effects";

import { LOAD_REPOS } from "./constants";

function* rootSaga() {
  while (true) {
    yield take(LOAD_REPOS);
  }
}

export default function* () {
  yield all([rootSaga()]);
}
