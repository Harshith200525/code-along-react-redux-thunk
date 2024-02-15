import { legacy_createStore, applyMiddleware } from "redux";
import Reducer from "./reducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(Reducer, applyMiddleware(thunk));

export default store