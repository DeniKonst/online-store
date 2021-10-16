import { createAction } from "typesafe-actions";
import { IGetChangeButtonSuccess } from "./types";

export const getHomeData = createAction("HOME/GET_HOME_DATA")();
export const setIsLoading = createAction("HOME/SET_IS_LOADING")<boolean>();
export const getChangeButton = createAction("HOME/GET_CHANGE_BUTTON")();
export const getChangeButtonSuccess = createAction("HOME/GET_CHANGE_BUTTON_SUCCESS")<IGetChangeButtonSuccess>();

