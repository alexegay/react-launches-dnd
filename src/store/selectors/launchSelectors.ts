import { AppState } from "../store";

export const getLaunches = (state: AppState) => state.launches.launches;
export const getPastLaunches = (state: AppState) => state.launches.past;
export const getNextLaunches = (state: AppState) => state.launches.next;
export const getLaunchesState = (state: AppState) => state.launches;
