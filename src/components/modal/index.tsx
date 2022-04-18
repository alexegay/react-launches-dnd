import React from "react";
import { Modal as ModalAnt } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { getSuccessCb, getTitle, isModalVisible } from "../../store/selectors/modalSelectors";
import { hideModal } from "../../store/actions/modalActions";

export const Modal = () => {
  const isVisible = useAppSelector(isModalVisible);
  const onOk = useAppSelector(getSuccessCb);
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const onCancel = () => {
    dispatch(hideModal());
  };

  return <ModalAnt title={title} visible={isVisible} onOk={onOk} onCancel={onCancel} />;
};

