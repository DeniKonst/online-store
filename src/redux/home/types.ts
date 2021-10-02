
// TODO: исправить типизацию (без any)
export interface IHomeState {
  data: any;
  pending: boolean;
  isError: boolean;
};

export interface IGetChangeButtonSuccess {
  id: number;
  name: string;
};