import React, { FC } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { ILaunch } from "../../models";

interface CardProps {
  id: string;
  index: number;
  content: ILaunch;
}

const Card: FC<CardProps> = (props) => {
  const {
    id,
    index,
    content: { name, rocket },
  } = props;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/launch/${id}`);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(providedDraggable: DraggableProvided) => (
        <div
          tabIndex={index}
          ref={providedDraggable.innerRef}
          {...providedDraggable.draggableProps}
          {...providedDraggable.dragHandleProps}
          style={{ ...providedDraggable.draggableProps.style }}
          className={styles.card}
          onClick={handleRedirect}
          role="link"
        >
          <div className={styles.card__name}>{name}</div>
          <div className={styles.card__rocket}>{rocket}</div>
        </div>
      )}
    </Draggable>
  );
};
export default Card;
