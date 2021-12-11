import { State } from "../reducers";

export const selectMotoData = (state: State) => state.motoReducer.data;
export const selectMotoItems = (state: State) =>
  state.motoReducer.data.motoData;
export const selectCheckedIds = (state: State) =>
  state.motoReducer.data.checkedIds;
export const selectIsLoading = (state: State) => state.motoReducer.pending;
export const selectSortType = (state: State) => state.motoReducer.sort;
