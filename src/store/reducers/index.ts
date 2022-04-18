import { combineReducers } from "redux";
import launchReducer from "./launchReducer";
import modalReducer from "./modalReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  launches: launchReducer,
  modal: modalReducer,
  loading: loadingReducer,
});

export default rootReducer;
