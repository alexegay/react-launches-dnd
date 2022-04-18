import { DropResult } from "react-beautiful-dnd";
import { ILaunchState } from "../store/reducers/launchReducer";

export function replaceLaunch(currentsState: ILaunchState, dndResult: DropResult): ILaunchState {
  const state = { ...currentsState };
  const replaced = state[dndResult.source.droppableId as keyof typeof state].splice(dndResult.source.index, 1);
  state[dndResult.destination.droppableId as keyof typeof state].splice(dndResult.destination.index, 0, replaced[0]);

  return state;
}
