import { all } from "redux-saga/effects";
import { mainPageSaga } from "./features/main-page";

export default function* sagas() {
  yield all([mainPageSaga()]);
}
