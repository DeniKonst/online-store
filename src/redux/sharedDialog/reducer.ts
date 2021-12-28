import { ActionType, createReducer } from "typesafe-actions";
import * as dilogActions from "./actions";

export interface IDilog {
  id: string;
  name: string;
  isShowed: boolean;
}

export interface IShowDilogPayload extends Omit<IDilog, "isShowed"> {}

export interface IDilogs {
  [id: string]: IDilog;
  }

export interface IDilogsState {
  dilogs: IDilogs;
}

const initialState: IDilogsState = {
  dilogs: {},
};

type DilogActions = ActionType<typeof dilogActions>;

export const dilogReduser = createReducer<IDilogsState, DilogActions>(
  initialState
)
  .handleAction(dilogActions.showDilog, (state, { payload }) => {
    return {
      ...state,
      dilogs: {
        ...state.dilogs,
        [payload.id]: { ...payload, isShowed: true },
      },
    };
  })
  .handleAction(dilogActions.cancelDilog, (state, { payload }) => {
    return {
      ...state,
      dilogs: {
        ...state.dilogs,
        [payload]: { ...state.dilogs[payload], isShowed: false },
      },
    };
  });

// ['payload.id']: {
//   id: "dsdsd_SDSD_DS"
//   name: "Информационное окно",
//   isShowed: false,
// },
// dilog2: {
//   name: "Применить",
//   isShowed: false,
// },

// dilog3: {
//   name: "Отмена",
//   isShowed: false,
// }

// const state = {
//   dialogs: {
//     "payload.id-1": {
//       id: "payload.id-1",
//       name: "Информационное окно - 1",
//       isShowed: false,
//     },
//     "payload.id-2": {
//       id: "payload.id-2",
//       name: "Информационное окно - 2",
//       isShowed: true,
//     },
//   },
// };
// // showDialog
// const payload = {
//   id: "payload.id-1",
//   name: "Информационное окно - 1",
// };

// const newState = {
//   ...state,
//   dialogs: { ...state.dialogs, [payload.id]: { ...payload, isShowed: true } },
// };

// // cancelDialog
// const forCancelPayload = "payload.id-2";

// const forCancelNewState = {
//   ...state,
//   dialogs: {
//     ...state.dialogs,
//     [forCancelPayload]: { ...state.dialogs[forCancelPayload], isShowed: false },
//   },
// };
