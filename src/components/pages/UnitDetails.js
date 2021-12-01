import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";
import { useParams } from "react-router-dom";

const UnitDetails = () => {
  const appContext = useContext(AppContext);
  const { setUnit, unit } = appContext;

  const { id } = useParams();

  useEffect(() => {
    setUnit(id);

    // Go to top of the page
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page unit-details-page">
      <Link to="/units" className="back-to-units-link">
        &#8592; Go Back
      </Link>

      <div className="details-container">
        <div className="info">
          <h1 className="title">
            <span>{unit.id}.</span> {unit.name}
          </h1>

          <p className="description">{unit.description}</p>

          <p>
            <span>Age</span>: {unit.age}
          </p>
          <p>
            <span>Cost (Wood)</span>: {unit?.cost?.Wood}
          </p>
          <p>
            <span>Cost (Food)</span>: {unit?.cost?.Food}
          </p>
          <p>
            <span>Cost (Gold)</span>: {unit?.cost?.Gold}
          </p>
          <p>
            <span>Build Time</span>: {unit.build_time}
          </p>
          <p>
            <span>Reload Time</span>: {unit.reload_time}
          </p>
          <p>
            <span>Hit Points</span>: {unit.hit_points}
          </p>
          <p>
            <span>Attack</span>: {unit.attack}
          </p>
          <p>
            <span>Accuracy</span>: {unit.accuracy}
          </p>
        </div>
        <div className="img">
          <img src="/assets/axe.png" alt="Axe" />
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
