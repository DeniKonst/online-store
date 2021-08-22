import { createReducer, ActionType } from "typesafe-actions";
import { IHomeState } from "./types";
import * as homeActions from "./actions";

type HomeActions = ActionType<typeof homeActions>;

const initialState = {
  data: [{ id: 1, name: "Увасиа" }],
  isLoading: false,
  isError: false,
};
// почитать дженерик type-script
export default createReducer<IHomeState, HomeActions>(initialState).handleAction(
  [homeActions.getHomeData],
  (state) => {
    return {...state, pending: true}
  }
);
