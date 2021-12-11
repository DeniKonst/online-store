import { getGeneratedId } from "./helpers";
import { SortByType } from "./constants";
import { all, takeEvery, put, select } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { getType } from "typesafe-actions";
import * as motoActions from "./actions";
import { Dispatch } from "redux";
import { batch } from "react-redux";
import { selectMotoItems } from "./selectors";
import { IAddMotoSuccessPayload } from "./types";

function* addMotoWorker({
  payload: name,
}: ReturnType<typeof motoActions.addMotoData>) {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    // const id = uuidv4();

    const id = getGeneratedId();

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

// updaete переименовать на update
function* updaeteMotoWatcher() {
  yield takeEvery(getType(motoActions.updateMotoData), updateMotoWorker);
}
// TODO: dellete Lable переименовать на delete и Label по всему проекту
function* delleteLableMotoWorker({
  payload,
}: ReturnType<typeof motoActions.deleteCheckedMotoData>) {
  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    setTimeout(() => {
      batch(() => {
        dispatch(motoActions.setIsLoading(false));
        dispatch(motoActions.deleteCheckedMotoDataSuccess(payload));
      });
    }, 1000);
  });
}

function* delleteLableMotoWatcher() {
  yield takeEvery(
    getType(motoActions.deleteCheckedMotoData),
    delleteLableMotoWorker
  );
}

function* getMotoWorker({
  payload,
}: ReturnType<typeof motoActions.getItemMotoData>) {
  const motoData: IAddMotoSuccessPayload[] = yield select(selectMotoItems);

  yield put<any>((dispatch: Dispatch) => {
    dispatch(motoActions.setIsLoading(true));

    setTimeout(() => {
      const cloneMotoData = [...motoData];

      cloneMotoData.sort((a, b) => {
        switch (payload) {
          case SortByType.nameDescending:
            return b.name.localeCompare(a.name);
          case SortByType.nameAscending:
            return a.name.localeCompare(b.name);
          case SortByType.idDescending:
            return a.id - b.id;
          case SortByType.idAscending:
            return b.id - a.id;
          default:
            return 0;
        }
      });

      batch(() => {
        dispatch(motoActions.setIsLoading(false));
        dispatch(
          motoActions.getItemMotoDataSuccess({
            motoData: cloneMotoData,
            sort: payload,
          })
        );
      });
    }, 1000);
  });
}

function* getMotoWatcher() {
  yield takeEvery(getType(motoActions.getItemMotoData), getMotoWorker);
}

export default function* motoSaga() {
  yield all([
    addMotoWatcher(),
    delleteMotoWatcher(),
    updaeteMotoWatcher(),
    delleteLableMotoWatcher(),
    getMotoWatcher(),
  ]);
}
