import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UnitItem = ({ unit }) => {
  return (
    <li className="unit-item">
      <Link to={`/units/${unit.id}`}>
        {unit.id} - {unit.name}
      </Link>
    </li>
  );
};

UnitItem.propTypes = {
  unit: PropTypes.object.isRequired,
};

export default UnitItem;
