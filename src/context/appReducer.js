import * as types from "./types";

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default AppReducer;
