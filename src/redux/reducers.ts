import { motoReducer } from './moto/reducer';
import homeReducer from "./home/reducer";
import { autoReducer } from "./auto/reducer";
import { IAutoState } from "./auto/types";
import { IHomeState } from "./home/types";
import { IMotoState } from './moto/types';

export interface State {
  autoReducer: IAutoState;
  homeReducer: IHomeState;
  motoReducer: IMotoState;
}

const stateToReducer = { homeReducer, autoReducer, motoReducer };

export default stateToReducer;
