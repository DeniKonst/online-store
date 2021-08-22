import reducerMap from "./reducers";
import rootSaga from './sagas';

const reduxRootModule = () => ({
  id: "rootModule",
  reducerMap,
  retained: true,
  sagas: [rootSaga],
});

export default reduxRootModule;
