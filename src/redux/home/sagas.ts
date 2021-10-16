import { put, takeEvery } from "@redux-saga/core/effects";
import { all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { getChengeButton, getHomeData } from "./actions";
import * as homeActions from "./actions";
import { Dispatch } from "redux";

function* homeSagaWorker() {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(homeActions.setIsLoading(true));

    setTimeout(() => {
      dispatch(homeActions.setIsLoading(false));
      dispatch(homeActions.getChengeButton());
    }, 2000);
  });
}

function* homeSagaWatcher() {
  yield takeEvery(getType(getHomeData), homeSagaWorker);
}

function* changeButtonNameWorker() {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(homeActions.setIsLoading(true));
    
    setTimeout(() => {
      dispatch(homeActions.setIsLoading(false));
      dispatch(homeActions.getChengeButtonSuccess({ id: 2, name: "Petya" }));
    }, 2000);
  });
}

function* changeButtonNameWatcher() {
  yield takeEvery(getType(getChengeButton), changeButtonNameWorker);
}

export default function* homeSaga() {
  yield all([homeSagaWatcher(), changeButtonNameWatcher()]);
}
