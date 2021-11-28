import UnitItem from "./UnitItem";
import PropTypes from "prop-types";

const UnitList = ({ units }) => {
  return (
    <ul className="unit-list">
      <li className="list-title">
        <span>Id</span>
        <span>Name</span>
        <span>Age</span>
        <span>Cost</span>
      </li>

      {units.map((unit) => (
        <UnitItem key={unit.id} unit={unit} />
      ))}
    </ul>
  );
};

UnitList.propTypes = {
  units: PropTypes.array.isRequired,
};

export default UnitList;
