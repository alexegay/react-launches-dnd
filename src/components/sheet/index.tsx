import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Row } from "antd";
import Column from "../column";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { getLaunchesState } from "../../store/selectors/launchSelectors";
import { launchesDrop } from "../../store/actions/launchActions";
import { hideModal, showModal } from "../../store/actions/modalActions";

const columns = [
  {
    id: "past",
    title: "Past Launches",
  },
  {
    id: "next",
    title: "Launches",
  },
  {
    id: "my",
    title: "My Launches",
  },
];

const Sheet = () => {
  const [, updateState] = useState<object>();
  const forceUpdate = useCallback(() => updateState({}), []);
  const launches = useAppSelector(getLaunchesState);
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    if (result.source.droppableId === "my" && result.destination.droppableId === "next") {
      const launchName = launches[result.source.droppableId as keyof typeof launches][result.source.index].name;

      dispatch(
        showModal({
          title: `are u sure to cancel launch ${launchName}`,
          cb: () => {
            dispatch(launchesDrop(result));
            dispatch(hideModal());
            forceUpdate();
          },
        })
      );
    } else {
      dispatch(launchesDrop(result));
      forceUpdate();
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Row justify="space-between" gutter={16}>
        {columns.map((col) => (
          <Column
            isDropDisabled={col.id === "past"}
            data={launches[col.id as keyof typeof launches]}
            title={col.title}
            droppableId={col.id}
            span="8"
            key={col.id}
          />
        ))}
      </Row>
    </DragDropContext>
  );
};

export default Sheet;
