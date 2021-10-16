import { homeReducer } from "./home/reducer";
import { autoReducer } from "./auto/reducer";
import { motoReducer } from './moto/reducer';
import { IAutoState } from "./auto/types";
import { IHomeState } from "./home/types";
import { IMotoState } from './moto/types';
import {ReducersMapObject} from "redux";

export interface State {
  autoReducer: IAutoState;
  homeReducer: IHomeState;
  motoReducer: IMotoState;
}

const stateToReducer: ReducersMapObject<State, any> = { motoReducer, homeReducer, autoReducer };

export default stateToReducer;
