
// TODO: исправить типизацию (без any)
export interface IHomeState {
  data: IGetChangeButtonSuccess;
  pending: boolean;
  isError: boolean;
};

export interface IGetChangeButtonSuccess {
  id: number;
  name: string;
};