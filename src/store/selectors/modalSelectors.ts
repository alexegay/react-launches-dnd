import { AppState } from "../store";

export const isModalVisible = (state: AppState) => state.modal.isVisible;
export const getSuccessCb = (state: AppState) => state.modal.successCb;
export const getTitle = (state: AppState) => state.modal.title;
