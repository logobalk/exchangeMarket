/* eslint-disable import/no-anonymous-default-export */

import { take, call, put, all, select, delay } from "redux-saga/effects";
import { ApiService } from "../../core/services";

import { SET_TICKER_PRICE_API_VALUE } from "./constants";

import { getTickerPriceSuccess } from "./actions";

function callRequestTickerPrice(tickerPriceValue) {
  const queryParams = {
    symbol: tickerPriceValue,
  };
  const url = ApiService.getApiUrl();
  return ApiService.get(`${url}/api/v3/ticker/24hr`, queryParams);
}

function* callTicker() {
  try {
    const data = yield select((state) => state.market);
    const res = yield call(callRequestTickerPrice, data.tickerPriceValue);
    yield put(getTickerPriceSuccess(res));
  } catch (error) {
    console.log("callTicker error==>", error);
  }
}
function* tickerSaga() {
  while (true) {
    yield take(SET_TICKER_PRICE_API_VALUE);
    yield call(callTicker);
  }
}

function* rootSaga() {
  while (true) {
    yield call(callTicker);
    yield delay(5000);
  }
}

export default function* () {
  yield all([rootSaga(), tickerSaga()]);
}
