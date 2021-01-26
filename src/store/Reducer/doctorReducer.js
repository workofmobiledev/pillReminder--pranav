import { ADD_NEW_PRESCRIPTION } from '../ActionTypes/ActionTypes';
const initialState = {
  precriptions: []
};

const DoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRESCRIPTION:
      return {
        ...state,
        precriptions: [...state.precriptions, action.payload]
      }

      default: return state;
  }
};

export default DoctorReducer;