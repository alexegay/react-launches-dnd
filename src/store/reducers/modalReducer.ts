import { IAction } from "../../models";
import { HIDE_MODAL, SHOW_MODAL } from "../actionTypes/modal";

interface IModalState {
  isVisible: boolean;
  title: string;
  successCb: () => void;
}

const init = {
  isVisible: false,
  title: "",
  successCb: () => {},
};

const modalReducer = (state: IModalState = init, action: IAction<any>) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        successCb: action.data.cb,
        title: action.data.title,
      };
    case HIDE_MODAL:
      return init;
    default:
      return state;
  }
};
export default modalReducer;
