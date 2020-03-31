import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";

const reducers = combineReducers({
  assignments: assignmentReducer
});

export default reducers;
