import {IExtension, IModuleStore, createStore} from 'redux-dynamic-modules';
import {getSagaExtension} from "redux-dynamic-modules-saga";
import {getThunkExtension} from "redux-dynamic-modules-thunk";
import reduxRootModule from "./module";

const extensionsList: IExtension[] = [getSagaExtension(), getThunkExtension()];

const store = createStore({extensions: extensionsList}, reduxRootModule())

export default store;