import { SortByType } from "./constants";

export interface IAddMotoSuccessPayload {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface IAddMotoData {
  motoData: IAddMotoSuccessPayload[];
  checkedIds: number[];
}

export interface IMotoState {
  data: IAddMotoData;
  pending: boolean;
  isError: boolean;
  sort: SortByType | null;
}

export interface IUpdateMotoSuccessPayload {
  id: number;
  name?: string;
  isCompleted?: boolean;
}

export interface IGetMotoDataPayload {
  motoData: IAddMotoSuccessPayload[];
  sort: SortByType;
}
