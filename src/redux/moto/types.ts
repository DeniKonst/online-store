export interface IAddMotoSuccessPayload {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface IAddMotoData {
  motoData: IAddMotoSuccessPayload[];
  checkedIds: string[];
  // arrMotoData: IAddMotoSuccessPayload[];
}

export interface IMotoState {
  data: IAddMotoData;
  pending: boolean;
  isError: boolean;
  sort: string;
}

export interface IUpdateMotoSuccessPayload {
  id: string;
  name?: string;
  isCompleted?: boolean;
}
