import { createAction } from "typesafe-actions";
import { SortByNameType } from "./constants";
import {
  IAddMotoData,
  IAddMotoSuccessPayload,
  IUpdateMotoSuccessPayload,
} from "./types";

export const setIsLoading = createAction("MOTO/SET_IS_LOADING")<boolean>();

export const addMotoData = createAction("MOTO/ADD_MOTO_DATA")<string>();
export const addMotoDataSuccess = createAction(
  "MOTO/ADD_MOTO_DATA_SUCCESS"
)<IAddMotoSuccessPayload>();

export const deleteMotoData = createAction("MOTO/DELETE_MOTO_DATA")<string>();
export const deleteMotoDataSuccess = createAction(
  "MOTO/DELETE_MOTO_DATA_SUCCESS"
)<string>();

export const updateMotoData = createAction(
  "MOTO/UPDATE_MOTO_DATA"
)<IUpdateMotoSuccessPayload>();
export const updateMotoDataSuccess = createAction(
  "MOTO/UPDATE_MOTO_DATA_SUCCESS"
)<IUpdateMotoSuccessPayload>();

export const deleteCheckedMotoData = createAction(
  "MOTO/DELETE_CHECKED_MOTO_DATA"
)<string[]>();
export const deleteCheckedMotoDataSuccess = createAction(
  "MOTO/DELETE_CHECKED_MOTO_DATA_SUCCESS"
)<string[]>();

export const sortItemMotoData = createAction(
  "MOTO/SORT_MOTO_DATA"
)<SortByNameType>();
export const sortItemMotoDataSuccess = createAction(
  "MOTO/SORT_MOTO_DATA_SUCCESS"
)<IAddMotoData[]>();

// const createCustomAction = (type: string) => {
//   return <T>() => {
//     return (payload: T) => {
//       return { type, payload };
//     };
//   };
// };

// const actionCreator = createCustomAction('fdfdf')<string>();

// actionCreator('dsdsd')


