

import {
  SET_MAP_DATA,
  LOADING,
} from "../actions/types";

const INITIAL_STATE = {
  restaurants:[],
  loading: false,
};

const settingMApData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAP_DATA:
      return {
        ...state,
        restaurants:action.payload
      };
    case LOADING:
      return {
        ...state,
        ...action.payload,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default settingMApData;
