import { all } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { getType } from "typesafe-actions";
import * as motoActions from "./actions";
import { Dispatch } from "redux";
import { put, takeEvery } from "@redux-saga/core/effects";
import { batch } from "react-redux";

function* addMotoWorker({
  payload: name,
}: ReturnType<typeof motoActions.addMotoData>) {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    const id = uuidv4();

    setTimeout(() => {
      batch(() => {
        dispatch(motoActions.setIsLoading(false));
        dispatch(
          motoActions.addMotoDataSuccess({ id, name, isCompleted: false })
        );
      });
    }, 1000);
  });
}

function* addMotoWatcher() {
  yield takeEvery(getType(motoActions.addMotoData), addMotoWorker);
}

function* delleteMotoWorker({
  payload,
}: ReturnType<typeof motoActions.deleteMotoData>) {
  debugger;
  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    setTimeout(() => {
      batch(() => {
        dispatch(motoActions.setIsLoading(false));
        dispatch(motoActions.deleteMotoDataSuccess(payload));
      });
    }, 1000);
  });
}

function* delleteMotoWatcher() {
  yield takeEvery(getType(motoActions.deleteMotoData), delleteMotoWorker);
}

function* updateMotoWorker({
  payload,
}: ReturnType<typeof motoActions.updateMotoData>) {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    setTimeout(() => {
      batch(() => {
        dispatch(motoActions.setIsLoading(false));
        dispatch(motoActions.updateMotoDataSuccess(payload));
      });
    }, 300);
  });
}

function* updaeteMotoWatcher() {
  yield takeEvery(getType(motoActions.updateMotoData), updateMotoWorker);
}

export default function* motoSaga() {
  yield all([addMotoWatcher(), delleteMotoWatcher(), updaeteMotoWatcher()]);
}
