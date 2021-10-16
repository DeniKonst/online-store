import { createReducer, ActionType } from "typesafe-actions";
import { IMotoState } from "./types";
import * as motoActions from "./actions";

type MotoActions = ActionType<typeof motoActions>;

const initialState = {
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
  });
