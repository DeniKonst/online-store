import { State } from "../reducers";

export const selectHomeData = (state: State) => state.homeReducer.data;
export const selectIsLoading = (state: State) => state.homeReducer.pending;