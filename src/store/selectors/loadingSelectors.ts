import { AppState } from "../store";
import { loadingActionStatus } from "../../models";

export const getActionStatus = (state: AppState, type: string): loadingActionStatus => {
  const loadingState = state.loading;
  if (loadingState.loading.includes(type)) {
    return loadingActionStatus.loading;
  }
  if (loadingState.failure.includes(type)) {
    return loadingActionStatus.failure;
  }

  return loadingActionStatus.success;
};
