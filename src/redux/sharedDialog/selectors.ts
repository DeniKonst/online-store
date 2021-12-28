import { State } from "../reducers";

export const selectDilog = (id: string) => (state: State) =>
  state.dilogReduser.dilogs[id];
export const selectIsShowedDialog = (id: string) => (state: State) =>
  Boolean(state.dilogReducer.dialogs[id]?.isShowed);
