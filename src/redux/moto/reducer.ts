import { createReducer, ActionType } from "typesafe-actions";
import { IMotoState } from "./types";
import * as motoActions from "./actions";
import { isDebuggerStatement } from "typescript";
import { SortByType } from "./constants";

type MotoActions = ActionType<typeof motoActions>;

const initialState: IMotoState = {
  data: {
    motoData: [
      { id: 1, name: "Ява", isCompleted: false },
      { id: 2, name: "Сузуки", isCompleted: false },
      { id: 3, name: "БМВ", isCompleted: false },
      { id: 4, name: "Хонда", isCompleted: false },
      { id: 5, name: "Мицубиши", isCompleted: false },
    ],
    checkedIds: [],
  },
  sort: null,
  pending: false,
  isError: false,
};

export const motoReducer = createReducer<IMotoState, MotoActions>(initialState)
  .handleAction([motoActions.setIsLoading], (state, { payload }) => {
    return { ...state, pending: payload };
  })
  .handleAction([motoActions.addMotoDataSuccess], (state, { payload }) => {
    return {
      ...state,
      data: { ...state.data, motoData: [...state.data.motoData, payload] },
    };
  })
  .handleAction([motoActions.deleteMotoDataSuccess], (state, { payload }) => {
    const checkedIds: number[] = [];
    const updetedData = state.data.motoData.filter((item) => {
      if (item.isCompleted && item.id !== payload) {
        checkedIds.push(item.id);
      }
      return item.id !== payload;
    });
    return { ...state, data: { checkedIds, motoData: updetedData } };
  })
  .handleAction([motoActions.updateMotoDataSuccess], (state, { payload }) => {
    const checkedIds: number[] = [];
    const updatedData = state.data.motoData.map((item) => {
      if (item.id === payload.id) {
        if (payload.isCompleted) {
          checkedIds.push(payload.id);
        }
      } else if (item.isCompleted) {
        checkedIds.push(item.id);
      }
      return item.id === payload.id ? { ...item, ...payload } : item;
    });
    return { ...state, data: { checkedIds, motoData: updatedData } };
  })
  .handleAction(
    [motoActions.deleteCheckedMotoDataSuccess],
    (state, { payload }) => {
      const deleteCheckeddData = state.data.motoData.filter(
        (item) => !payload.includes(item.id)
      );
      return {
        ...state,
        data: { checkedIds: [], motoData: deleteCheckeddData },
      };
    }
  )
  .handleAction(
    [motoActions.getItemMotoDataSuccess],
    (state, { payload: { motoData, sort } }) => {
      return {
        ...state,
        data: { ...state.data, motoData },
        sort,
      };
    }
  );
