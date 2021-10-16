import { all } from "redux-saga/effects";
import homeSaga from "./home/sagas";
import autoSaga from "./auto/sagas";
import motoSaga from "./moto/sagas";

export default function* rootSaga() {
  yield all([homeSaga(), autoSaga(), motoSaga()]);
}
