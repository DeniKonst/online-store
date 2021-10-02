import { createReducer, ActionType } from "typesafe-actions";
import { IHomeState } from "./types";
import * as homeActions from "./actions";

type HomeActions = ActionType<typeof homeActions>;

const initialState = {
  data: { id: 1, name: "Увасиа" },
  pending: false,
  isError: false,
};
// почитать дженерик type-script
export default createReducer<IHomeState, HomeActions>(initialState)
  .handleAction([homeActions.setIsLoading], (state, { payload }) => {
    return { ...state, pending: payload };
  })
  .handleAction([homeActions.getChengeButtonSuccess], (state, { payload }) => {
    return { ...state, data: payload };
  });
