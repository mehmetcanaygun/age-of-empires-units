import Filters from "../units/Filters";
import UnitList from "../units/UnitList";

const Units = () => {
  return (
    <div className="page units-page">
      <h2>Units Page</h2>
      <hr />
      <Filters />
      <UnitList />
    </div>
  );
};

export default Units;
