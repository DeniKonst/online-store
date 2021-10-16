import { State } from "../reducers";

export const selectMotoData = (state: State) => state.motoReducer.data;
export const selectIsLoading = (state: State) => state.motoReducer.pending;