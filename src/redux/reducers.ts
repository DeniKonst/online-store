import homeReducer from "./home/reducer";
import { autoReducer } from "./auto/reducer";
import { IAutoState } from "./auto/types";
import { IHomeState } from "./home/types";

export interface State {
  autoReducer: IAutoState;
  homeReducer: IHomeState;
}

const stateToReducer = { homeReducer, autoReducer };

export default stateToReducer;
