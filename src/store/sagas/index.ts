import { all } from "redux-saga/effects";
import watchLaunches from "./launchSaga";

function* rootSaga() {
  yield all([watchLaunches()]);
}

export default rootSaga;
