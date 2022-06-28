import produce from 'immer';
import {
  SET_TICKER_PRICE_API_VALUE,
  GET_TICKER_PRICE_API_SUCCESS,
} from './constants';

// The initial state of the main-page
export const initialState = {
  loading: false,
  error: false,
  pairDetails: { title: 'BTC/THB', lastPrice: '', volume: '' },
  tickerPriceValue: 'BTC_THB',
};

const marketReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_TICKER_PRICE_API_VALUE:
        draft.loading = true;
        draft.error = false;
        draft.tickerPriceValue = action.value;
        draft.pairDetails = { ...draft.pairDetails, title: action.title };
        break;
      case GET_TICKER_PRICE_API_SUCCESS:
        draft.loading = true;
        draft.error = false;
        draft.pairDetails = {
          ...draft.pairDetails,
          lastPrice: action.response.lastPrice,
          volume: action.response.quoteVolume,
        };
        break;
    }
  });

export default marketReducer;
