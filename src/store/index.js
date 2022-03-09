import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers/index";

const _reducers = combineReducers(reducers);
// 开启chrome redux-dev-tool调试
const extension = window.__REDUX_DEVTOOLS_EXTENSION__;
const devTool = extension ? extension() : f => f;

const enhancer = compose(
  applyMiddleware(thunk),
  devTool
);

export default createStore(_reducers, enhancer);
