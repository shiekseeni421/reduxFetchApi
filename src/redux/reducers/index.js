import { combineReducers } from "redux";
import { movieDataReducer } from "./movieDataReducer";

const reducers = combineReducers({
  allProducts: movieDataReducer,
});

export default reducers;
