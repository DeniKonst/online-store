import { createAction } from "typesafe-actions";
import { IAddAutoSuccessPayload } from "./types";

export const getAutoData = createAction("AUTO/GET_AUTO_DATA")();
export const setIsLoading = createAction("AUTO/SET_IS_LOADING")<boolean>();
export const getAuto = createAction("AUTO/GET_AUTO")();
export const getAutoSuccess = createAction(
  "AUTO/GET_AUTO_SUCCESS"
)<IAddAutoSuccessPayload>();
export const addAuto = createAction("AUTO/ADD_AUTO")<string>();
export const addAutoSuccess = createAction(
  "AUTO/ADD_AUTO_SUCCESS"
)<IAddAutoSuccessPayload>();
