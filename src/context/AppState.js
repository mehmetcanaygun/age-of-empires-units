import { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import * as types from "./types";

const AppState = (props) => {
  const initialState = {
    units: [],
    unit: {},
    loading: false,
    filters: {
      age: "All",
      costs: {
        wood: 0,
        food: 0,
        gold: 0,
      },
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions will be here

  // Set Loading
  const setLoading = () => {
    dispatch({ type: types.SET_LOADING });
  };

  return (
    <AppContext.Provider
      value={{
        units: state.units,
        unit: state.unit,
        loading: state.loading,
        filters: state.filters,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
