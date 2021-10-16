export interface IAddMotoSuccessPayload {
  id: string;
  name: string;
}

export interface IMotoState {
  data: IAddMotoSuccessPayload[];
  pending: boolean;
  isError: boolean;
}
