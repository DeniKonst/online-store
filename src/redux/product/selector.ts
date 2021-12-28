import { State } from "../reducers";

export const selectProduct = (state: State) =>
  state.productReducer.products