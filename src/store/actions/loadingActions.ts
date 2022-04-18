import { IAction } from "../../models";
import { FAIL_LOADING, START_LOADING, STOP_LOADING } from "../actionTypes/loading";

export const startLoading = (data: string): IAction<string> => ({ type: START_LOADING, data });
export const stopLoading = (data: string): IAction<string> => ({ type: STOP_LOADING, data });
export const failLoading = (data: string): IAction<string> => ({ type: FAIL_LOADING, data });
