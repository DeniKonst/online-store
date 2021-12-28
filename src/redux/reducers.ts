import { dilogReduser, IDilogsState } from './sharedDialog/reducer';
import { homeReducer } from "./home/reducer";
import { autoReducer } from "./auto/reducer";
import { motoReducer } from './moto/reducer';
import { IAutoState } from "./auto/types";
import { IHomeState } from "./home/types";
import { IMotoState } from './moto/types';
import {ReducersMapObject} from "redux";
import { IProductState, productReducer} from './product/reducer';

export interface State {
  [x: string]: any;
  autoReducer: IAutoState;
  homeReducer: IHomeState;
  motoReducer: IMotoState;
  dilogReduser: IDilogsState;
  productReducer: IProductState;
}

const stateToReducer: ReducersMapObject<State, any> = { motoReducer, homeReducer, autoReducer, dilogReduser, productReducer};

export default stateToReducer;
