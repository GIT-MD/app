import { createStore } from "redux";
import { combineReducers } from "redux";
import { MainReducer } from "./Reducers/MainReducer";

const reducers = combineReducers({
  main: MainReducer,
});

export default createStore(reducers);
