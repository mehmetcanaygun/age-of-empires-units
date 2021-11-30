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
      age: ["Dark", "Feudal", "Castle", "Imperial"],
      cost: {
        Wood: {
          isActive: false,
          value: 0,
        },
        Food: {
          isActive: false,
          value: 0,
        },
        Gold: {
          isActive: false,
          value: 0,
        },
      },
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Units
  const getUnits = async () => {
    setLoading();

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

  // Set Filters
  const setFilters = (type, value) => {
    if (type === "age") {
      dispatch({
        type: types.SET_AGE_FILTER,
        payload: value,
      });
    } else {
      dispatch({
        type: types.SET_COST_FILTER,
        payload: value,
      });
    }
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
        setFilters,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
