import { all } from 'redux-saga/effects';
import { mainPageSaga } from './features/main-page';
import { marketSaga } from './features/market';

export default function* sagas() {
  yield all([mainPageSaga(), marketSaga()]);
}
