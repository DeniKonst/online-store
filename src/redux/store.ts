import { composeWithDevTools } from "redux-devtools-extension";
import { IExtension, IModuleStore, createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import reduxRootModule from "./module";

const extensionsList: IExtension[] = [getSagaExtension(), getThunkExtension()];

const store = createStore(
  {
    enhancers: [],
    extensions: extensionsList,
    advancedComposeEnhancers: composeWithDevTools({}),
  },
  reduxRootModule()
);

export default store;
