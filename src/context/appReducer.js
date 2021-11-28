import * as types from "./types";

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_UNITS:
      return {
        ...state,
        units: payload,
        loading: false,
      };
    case types.SET_UNIT:
      return {
        ...state,
        unit: state.units.filter((unit) => unit.id === +payload)[0],
      };
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
