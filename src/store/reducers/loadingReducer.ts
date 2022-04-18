import { IAction } from "../../models";
import { FAIL_LOADING, START_LOADING, STOP_LOADING } from "../actionTypes/loading";

interface ILoadingReducerState {
  loading: string[];
  failure: string[];
}

const init: ILoadingReducerState = {
  loading: [],
  failure: [],
};
const loadingReducer = (state = init, action: IAction<any>) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: [...state.loading, action.data],
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: state.loading.filter((type) => type !== action.data),
      };
    case FAIL_LOADING:
      return {
        ...state,
        loading: state.loading.filter((type) => type !== action.data),
        failure: [...state.failure, action.data],
      };
    default:
      return state;
  }
};

export default loadingReducer;
