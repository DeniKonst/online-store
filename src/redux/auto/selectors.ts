import { State } from "../reducers";


export const selectAutoData = (state: State) => state.autoReducer.data;
export const selectIsLoading = (state: State) => state.autoReducer.pending;
