import { Dispatch } from "redux";
import { put, takeEvery } from "@redux-saga/core/effects";
import { all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as autoActions from "./actions";
import { v4 as uuidv4 } from "uuid";

function* autoSagaWorker() {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(autoActions.setIsLoading(true));

    setTimeout(() => {
      dispatch(autoActions.setIsLoading(false));
      dispatch(autoActions.getAuto());
    }, 4000);
  });
}

function* autoSagaWatcher() {
  yield takeEvery(getType(autoActions.getAutoData), autoSagaWorker);
}

function* addAutoWorker({payload}: ReturnType<typeof autoActions.addAuto>) {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(autoActions.setIsLoading(true));

    setTimeout(() => {
      const id = uuidv4();

      dispatch(autoActions.setIsLoading(false));
      dispatch(autoActions.addAutoSuccess({ id, name: payload }));
    }, 1000);
  });
}

function* addAutoWatcher() {
  yield takeEvery(getType(autoActions.addAuto), addAutoWorker);
}

export default function* autoSaga() {
  yield all([autoSagaWatcher(), addAutoWatcher()]);
}
