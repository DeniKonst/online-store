import { put, takeEvery } from "@redux-saga/core/effects";
import { all } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { getType } from "typesafe-actions";
import * as motoActions from "./actions";
import { Dispatch } from "redux";

function* addMotoWorker({
  payload,
}: ReturnType<typeof motoActions.addMotoData>) {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    const id = uuidv4();

    setTimeout(() => {
      dispatch(motoActions.setIsLoading(false));
      dispatch(motoActions.addMotoDataSuccess({ id, name: payload }));
    }, 2000);
  });
}

function* addMotoWatcher() {
  yield takeEvery(getType(motoActions.addMotoData), addMotoWorker);
}

export default function* motoSaga() {
  yield all([addMotoWatcher()]);
}
