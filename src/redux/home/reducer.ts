import { createReducer, ActionType } from "typesafe-actions";
import { IHomeState } from "./types";
import * as homeActions from "./actions";

type HomeActions = ActionType<typeof homeActions>;

const initialState: IHomeState = {
  data: { id: 1, name: "Увасиа" },
  pending: false,
  isError: false,
};
// почитать дженерик type-script
export const homeReducer = createReducer<IHomeState, HomeActions>(initialState)
  .handleAction([homeActions.setIsLoading], (state, { payload }) => {
    return { ...state, pending: payload };
  })
  .handleAction([homeActions.getChangeButtonSuccess], (state, { payload }) => {
    return { ...state, data: payload };
  });
