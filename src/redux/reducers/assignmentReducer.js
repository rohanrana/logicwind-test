import {
  GET_ALL_ASSIGNMENTS_SUCCESS,
  GET_ALL_ASSIGNMENTS_START,
  GET_ALL_ASSIGNMENTS_FAIL,
  SET_HEADER_NAME
} from "../../constants/ActionTypes";

let INTIAL_STATE = {
  assignmentData: [],
  loading: false,
  headerName:
    localStorage.getItem("as-header-name") !== null
      ? JSON.parse(localStorage.getItem("as-header-name"))
      : "ASSIGNMENT SETUP"
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ASSIGNMENTS_START:
      return { ...state, loading: action.payload, loading: true };
    case GET_ALL_ASSIGNMENTS_SUCCESS:
      return { ...state, assignmentData: action.payload, loading: false };
    case GET_ALL_ASSIGNMENTS_FAIL:
      return { ...state, assignmentData: action.payload, loading: false };
    case SET_HEADER_NAME: {
      localStorage.setItem("as-header-name", JSON.stringify(action.payload));
      return {
        ...state,
        headerName: action.payload
      };
    }

    default:
      return { ...state };
  }
};
