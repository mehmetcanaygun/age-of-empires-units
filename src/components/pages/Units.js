import { useContext, useState } from "react";
import AppContext from "../../context/appContext";

import Filters from "../units/Filters";
import UnitList from "../units/UnitList";

const Units = () => {
  const appContext = useContext(AppContext);
  const { units } = appContext;

  return (
    <div className="page units-page">
      <Filters />
      <UnitList units={units} />
    </div>
  );
};

export default Units;
