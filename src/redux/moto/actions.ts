import { createAction } from "typesafe-actions";
import { SortByType } from "./constants";
import {
  IAddMotoData,
  IAddMotoSuccessPayload,
  IGetMotoDataPayload,
  IUpdateMotoSuccessPayload,
} from "./types";

export const setIsLoading = createAction("MOTO/SET_IS_LOADING")<boolean>();

export const addMotoData = createAction("MOTO/ADD_MOTO_DATA")<string>();
export const addMotoDataSuccess = createAction(
  "MOTO/ADD_MOTO_DATA_SUCCESS"
)<IAddMotoSuccessPayload>();

export const deleteMotoData = createAction("MOTO/DELETE_MOTO_DATA")<number>();
export const deleteMotoDataSuccess = createAction(
  "MOTO/DELETE_MOTO_DATA_SUCCESS"
)<number>();

export const updateMotoData = createAction(
  "MOTO/UPDATE_MOTO_DATA"
)<IUpdateMotoSuccessPayload>();
export const updateMotoDataSuccess = createAction(
  "MOTO/UPDATE_MOTO_DATA_SUCCESS"
)<IUpdateMotoSuccessPayload>();

export const deleteCheckedMotoData = createAction(
  "MOTO/DELETE_CHECKED_MOTO_DATA"
)<number[]>();
export const deleteCheckedMotoDataSuccess = createAction(
  "MOTO/DELETE_CHECKED_MOTO_DATA_SUCCESS"
)<number[]>();

export const getItemMotoData = createAction(
  "MOTO/GET_ITEM_MOTO_DATA"
)<SortByType>();

export const getItemMotoDataSuccess = createAction(
  "MOTO/GET_ITEM_MOTO_DATA_SUCCESS"
)<IGetMotoDataPayload>();

// const createCustomAction = (type: string) => {
//   return <T>() => {
//     return (payload: T) => {
//       return { type, payload };
//     };
//   };
// };

// const actionCreator = createCustomAction('fdfdf')<string>();

// actionCreator('dsdsd')
