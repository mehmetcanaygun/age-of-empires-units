import { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import { useParams } from "react-router-dom";

const UnitDetails = () => {
  const appContext = useContext(AppContext);
  const { setUnit, unit } = appContext;

  const { id } = useParams();

  useEffect(() => {
    setUnit(id);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page unit-details-page">
      <h2>Unit Details Page</h2>

      <p>{unit.id}</p>
      <p>{unit.name}</p>
      <p>{unit.armor}</p>
    </div>
  );
};

export default UnitDetails;
