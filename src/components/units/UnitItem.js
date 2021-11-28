import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UnitItem = ({ unit }) => {
  const costToString = (cost) => {
    let output = "";

    for (let key in cost) {
      output += `${key}: ${cost[key]}, `;
    }

    return output.slice(0, -2);
  };

  return (
    <li className="unit-item">
      <Link to={`/units/${unit.id}`}>
        <span>{unit.id}</span>
        <span>{unit.name}</span>
        <span>{unit.age}</span>
        <span>{costToString(unit.cost)}</span>
      </Link>
    </li>
  );
};

UnitItem.propTypes = {
  unit: PropTypes.object.isRequired,
};

export default UnitItem;
