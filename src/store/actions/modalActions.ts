import { IAction, IShowModal } from "../../models";
import { HIDE_MODAL, SHOW_MODAL } from "../actionTypes/modal";

export const showModal = (data: IShowModal): IAction<IShowModal> => ({
  type: SHOW_MODAL,
  data,
});

export const hideModal = (): IAction<null> => ({
  type: HIDE_MODAL,
});
