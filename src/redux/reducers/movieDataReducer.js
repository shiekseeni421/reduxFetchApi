import { actionType } from "../contants/action-typ";

const initialState = {
  moviesArray: [],
};

export const movieDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.GET_DATA:
      return {
        ...state,
        moviesArray: payload,
      };
    default:
      return state;
  }
};
