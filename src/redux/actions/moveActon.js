import { actionType } from "../contants/action-typ";

export const setMovieData = (moviesData) => {
  return {
    type: actionType.GET_DATA,
    payload: moviesData,
  };
};
