// TODO: исправить типизацию (без any)
export interface IAutoState {
  data: IAddAutoSuccessPayload[];
  pending: boolean;
  isError: boolean;
}

export interface IAddAutoSuccessPayload {
  id: string;
  name: string;
}
