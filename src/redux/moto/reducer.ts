import { createReducer, ActionType } from "typesafe-actions";
import { IMotoState } from "./types";
import * as motoActions from "./actions";

type MotoActions = ActionType<typeof motoActions>;

const initialState: IMotoState = {
  data: [],
  pending: false,
  isError: false,
};
// почитать дженерик type-script
export const motoReducer = createReducer<IMotoState, MotoActions>(initialState)
  .handleAction([motoActions.setIsLoading], (state, { payload }) => {
    return { ...state, pending: payload };
  })
  .handleAction([motoActions.addMotoDataSuccess], (state, { payload }) => {
    return { ...state, data: [...state.data, payload] };
  })
  .handleAction([motoActions.deleteMotoDataSuccess], (state, { payload }) => {
    const updetedData = state.data.filter((item) => item.id !== payload);
    return { ...state, data: updetedData };
  })
  .handleAction([motoActions.updateMotoDataSuccess], (state, { payload }) => {
    const updatedData = state.data.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
    return { ...state, data: updatedData };
  });
