import { ILaunch, IAction } from "../../models";
import { LAUNCHES_DROP_SUCCESS, LAUNCHES_FETCH_SUCCESS } from "../actionTypes/launches";

export interface ILaunchState {
  launches: ILaunch[];
  past: ILaunch[];
  next: ILaunch[];
  my: ILaunch[];
}

const init: ILaunchState = {
  launches: [],
  past: [],
  next: [],
  my: [],
};

const launchReducer = (state = init, action: IAction<any>) => {
  switch (action.type) {
    case LAUNCHES_FETCH_SUCCESS:
      return {
        ...state,
        launches: action.data.launches,
        past: action.data.past,
        next: action.data.next,
      };
    case LAUNCHES_DROP_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
export default launchReducer;
