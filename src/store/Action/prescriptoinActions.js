import {ADD_NEW_PRESCRIPTION} from "../ActionTypes/ActionTypes";

export const addPrescription = (data) => {
    return dispatch => {
      dispatch({ type: ADD_NEW_PRESCRIPTION, payload: data });
    };
};