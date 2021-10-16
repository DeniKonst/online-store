import { createAction } from "typesafe-actions";
import { IAddMotoSuccessPayload } from "./types";

// export const getMotoData = createAction("MOTO/GET_MOTO_DATA")();
export const setIsLoading = createAction("MOTO/SET_IS_LOADING")<boolean>();
export const addMotoData = createAction("MOTO/ADD_MOTO_DATA")<string>();
export const addMotoDataSuccess = createAction(
  "MOTO/ADD_MOTO_DATA_SUCCESS"
)<IAddMotoSuccessPayload>();
