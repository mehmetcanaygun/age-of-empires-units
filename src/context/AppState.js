import { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import * as types from "./types";
import axios from "axios";

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

  // Get Units
  const getUnits = async () => {
    try {
      const res = await axios.get("./data/age-of-empires-units.json");

      dispatch({
        type: types.GET_UNITS,
        payload: res.data.units,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Set Unit
  const setUnit = (id) => {
    dispatch({
      type: types.SET_UNIT,
      payload: id,
    });
  };

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
        getUnits,
        setUnit,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
