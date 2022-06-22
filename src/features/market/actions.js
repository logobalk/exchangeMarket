import {
  SET_TICKER_PRICE_API_VALUE,
  GET_TICKER_PRICE_API_SUCCESS,
  GET_TICKER_PRICE_API_ERROR,
} from './constants';

export function setTickerPriceValue(value, title) {
  return {
    type: SET_TICKER_PRICE_API_VALUE,
    value,
    title,
  };
}

export function getTickerPriceSuccess(response) {
  return {
    type: GET_TICKER_PRICE_API_SUCCESS,
    response,
  };
}
