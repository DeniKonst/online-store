import { IShowDilogPayload } from "./reducer";
import { createAction } from "typesafe-actions";

export const showDilog = createAction(
  "SHARED_DILOG/SHOW_DILOG"
)<IShowDilogPayload>();
export const cancelDilog = createAction("SHARED_DILOG/CANCEL_DILOG")<string>();
export const confirmDilog = createAction(
  "SHARED_DILOG/CONFIRM_DILOG"
)<string>();
