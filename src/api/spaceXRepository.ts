import axios from "axios";
import moment from "moment";
import { ILaunch } from "../models";
import { ILaunchState } from "../store/reducers/launchReducer";

export const fetchLaunches = (): Promise<ILaunchState> =>
  axios.get<ILaunch[]>("https://api.spacexdata.com/v4/launches").then((res) => {
    const result: ILaunchState = {
      launches: res.data,
      past: [],
      next: [],
      my: [],
    };
    res.data.forEach((launch) => {
      if (moment(launch.date_local).isBefore(moment())) {
        result.past.push(launch);
      } else {
        result.next.push(launch);
      }
    });

    return result;
  });
