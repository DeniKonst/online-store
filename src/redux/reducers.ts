import homeReducer from './home/reducer'

export interface State {
  homeReducer: any;
}

const stateToReducer = {homeReducer};

export default stateToReducer;