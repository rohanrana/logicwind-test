import UtilService from "../../service/ApiService";
import { API_GET_ASSIGNMENTS } from "../../constants/ApiConstants";
import {
  GET_ALL_ASSIGNMENTS_SUCCESS,
  GET_ALL_ASSIGNMENTS_FAIL,
  GET_ALL_ASSIGNMENTS_START,
  SET_HEADER_NAME
} from "../../constants/ActionTypes";

export const getAssignments = data => {
  return dispatch => {
    //   dispatch({ type: FETCH_START });
    let obj = {
      ...API_GET_ASSIGNMENTS
    };
    dispatch({ type: GET_ALL_ASSIGNMENTS_START });

    UtilService.callApi(obj, (err, data) => {
      if (data && data.length !== 0) {
        dispatch({ type: GET_ALL_ASSIGNMENTS_SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_ALL_ASSIGNMENTS_FAIL, payload: data });
      }
    });
  };
};

export const setHeaderName = name => {
  // let routes =[]
  return dispatch => {
    dispatch({ type: SET_HEADER_NAME, payload: name });
  };
};
