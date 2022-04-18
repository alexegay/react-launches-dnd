import { Col, ColProps } from "antd";
import React from "react";
import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import Card from "../card";
import styles from "./styles.module.scss";
import { ILaunch, loadingActionStatus } from "../../models";
import { CardSkeleton } from "../card/CardSkeleton";
import { useAppSelector } from "../../store/reduxHooks";
import { getActionStatus } from "../../store/selectors/loadingSelectors";
import { LAUNCHES_FETCH_REQUEST } from "../../store/actionTypes/launches";

interface IColumnProps extends ColProps {
  data: ILaunch[];
  droppableId: string;
  title: string;
  isDropDisabled: boolean;
}

const Column = (props: IColumnProps) => {
  const { data, droppableId, title, isDropDisabled } = props;
  const isLoading = useAppSelector((state) => getActionStatus(state, LAUNCHES_FETCH_REQUEST));

  return (
    <Col {...props}>
      <h3 className={styles.title}>{title}</h3>
      {isLoading === loadingActionStatus.loading || isLoading === loadingActionStatus.failure ? (
        <div className={styles.col}>
          <CardSkeleton />
        </div>
      ) : (
        <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
          {(provided: DroppableProvided) => (
            <>
              <div ref={provided.innerRef} {...provided.droppableProps} className={styles.col}>
                {data.map((launch, idx) => (
                  <Card content={launch} id={launch.id} index={idx} key={launch.id} />
                ))}
              </div>
              {provided.placeholder}
            </>
          )}
        </Droppable>
      )}
    </Col>
  );
};

export default Column;
