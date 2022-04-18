import { Action } from "redux";

export interface IAction<T> extends Action<string> {
  type: string;
  data?: T;
}

// launch
export interface ILaunch {
  rocket: string;
  name: string;
  date_local: string;
  id: string;
  details: string;
  links: {
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
}

export interface ILaunchesFetchSuccess extends ISplitedLaunches {
  launches: ILaunch[];
}

export interface ISplitedLaunches {
  past: ILaunch[];
  next: ILaunch[];
}

// modal
export interface IShowModal {
  title: string;
  cb: () => void;
}

// loading
export enum loadingActionStatus {
  loading,
  success,
  failure,
}
