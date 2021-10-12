import { createReducer, ActionType } from "typesafe-actions";
import { IAutoState } from "./types";
import * as autoActions from "./actions";

type AutoActions = ActionType<typeof autoActions>;

const initialState = {
  data: [],
  pending: false,
  isError: false,
};
// почитать дженерик type-script
export const autoReducer = createReducer<IAutoState, AutoActions>(initialState)
  .handleAction([autoActions.setIsLoading], (state, { payload }) => {
    return { ...state, pending: payload };
  })
  .handleAction([autoActions.addAutoSuccess], (state, { payload }) => {
    return { ...state, data: [...state.data, payload] };
  });
