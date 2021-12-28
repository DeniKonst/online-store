import { ActionType, createReducer } from "typesafe-actions";
import * as productActions from "./action";

type ProductActions = ActionType<typeof productActions>;

// export interface IDialogInputProduct {
//   products: IInputProduct[];
// }

export interface IInputProduct {
  id: string;
  name: string;
}

export interface IIdProduct {}

export interface IProductState {
  products: IInputProduct[];
}

const initialState: IProductState = {
  products: [
    { id: "1", name: "prod1" },
    { id: "2", name: "prod2" },
    { id: "3", name: "prod3" },
  ],
};

export const productReducer = createReducer<IProductState, ProductActions>(
  initialState
).handleAction(productActions.infoProductDilog, (state, { payload }) => {
  return {
    ...state,
    dilogs: {
      ...state.products,
      payload: { ...payload },
    },
  };
});
