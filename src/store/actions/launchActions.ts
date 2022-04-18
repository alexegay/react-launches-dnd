import { DropResult } from "react-beautiful-dnd";
import { ILaunchesFetchSuccess, IAction } from "../../models";
import {
  LAUNCHES_DROP,
  LAUNCHES_DROP_SUCCESS,
  LAUNCHES_FETCH_REQUEST,
  LAUNCHES_FETCH_SUCCESS,
} from "../actionTypes/launches";
import { ILaunchState } from "../reducers/launchReducer";

export const launchesFetch = () => ({
  type: LAUNCHES_FETCH_REQUEST,
});

export const launchesFetchSuccess = (data: ILaunchesFetchSuccess): IAction<ILaunchesFetchSuccess> => ({
  type: LAUNCHES_FETCH_SUCCESS,
  data,
});

export const launchesDrop = (data: DropResult): IAction<DropResult> => ({
  type: LAUNCHES_DROP,
  data,
});

export const launchesDropSuccess = (data: ILaunchState): IAction<ILaunchState> => ({
  type: LAUNCHES_DROP_SUCCESS,
  data,
});
