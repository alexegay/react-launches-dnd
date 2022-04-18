import { call, takeEvery, all, put, select, delay } from "redux-saga/effects";
import { DropResult } from "react-beautiful-dnd";
import { toast } from "react-toastify";
import { LAUNCHES_DROP, LAUNCHES_FETCH_REQUEST } from "../actionTypes/launches";
import { fetchLaunches } from "../../api/spaceXRepository";
import { launchesDropSuccess, launchesFetchSuccess } from "../actions/launchActions";
import { IAction } from "../../models";
// eslint-disable-next-line import/no-cycle
import { getLaunchesState } from "../selectors/launchSelectors";
import { ILaunchState } from "../reducers/launchReducer";
import { replaceLaunch } from "../../helpers/dnd";
import { failLoading, startLoading, stopLoading } from "../actions/loadingActions";

function* launchesFetchWorker() {
  try {
    const res: ILaunchState = yield call(fetchLaunches);
    yield put(startLoading(LAUNCHES_FETCH_REQUEST));
    yield delay(2000);
    yield put(launchesFetchSuccess(res));
    yield put(stopLoading(LAUNCHES_FETCH_REQUEST));
  } catch (e) {
    yield put(failLoading(LAUNCHES_FETCH_REQUEST));
    toast.error(e.message);
  }
}

function* launchesDropWorker(action: IAction<DropResult>) {
  try {
    const { data } = action;
    const state: ILaunchState = yield select(getLaunchesState);
    const newState = replaceLaunch(state, data);
    yield put(launchesDropSuccess(newState));
  } catch (e) {
    toast.error(e.message);
  }
}

function* watchLaunches() {
  yield all([takeEvery(LAUNCHES_FETCH_REQUEST, launchesFetchWorker), takeEvery(LAUNCHES_DROP, launchesDropWorker)]);
}

export default watchLaunches;
