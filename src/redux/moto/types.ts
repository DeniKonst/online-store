export interface IAddMotoSuccessPayload {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface IMotoState {
  data: IAddMotoSuccessPayload[];
  pending: boolean;
  isError: boolean;
}

export interface IUpdateMotoSuccessPayload {
  id: string;
  name?: string;
  isCompleted?: boolean;
}
