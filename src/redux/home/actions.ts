import { createAction } from "typesafe-actions";
import { IGetChangeButtonSuccess } from "./types";

export const getHomeData = createAction("HOME/GET_HOME_DATA")();
export const setIsLoading = createAction("HOME/SET_IS_LOADING")<boolean>();
export const getChengeButton = createAction("HOME/GET_CHENGE_BUTTON")();
export const getChengeButtonSuccess = createAction("HOME/GET_CHENGE_BUTTON_SUCCESS")<IGetChangeButtonSuccess>();

