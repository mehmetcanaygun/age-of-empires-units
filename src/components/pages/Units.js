import { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";

import Filters from "../units/Filters";
import UnitList from "../units/UnitList";
import Spinner from "../layout/Spinner";

const Units = () => {
  const appContext = useContext(AppContext);
  const { getUnits, loading, units, filters } = appContext;

  const filterUnits = (units) => {
    // Firstly, filter units by age and put them in a new array
    const ageFilteredUnits = units.filter((unit) =>
      filters.age.includes(unit.age)
    );

    // Secondly, get active cost filters
    const activeCostFilters = [];

    for (let cost in filters.cost) {
      if (filters.cost[cost].isActive) {
        activeCostFilters.push(cost);
      }
    }

    // If there's no active cost filters, then return units that were only filtered by age
    if (activeCostFilters.length === 0) return ageFilteredUnits;

    // If there is only one active cost filter
    if (activeCostFilters.length === 1) {
      const singleCost = activeCostFilters[0];
      const costFilteredUnits = [];

      ageFilteredUnits.forEach((unit) => {
        if (
          unit?.cost &&
          unit?.cost[singleCost] >= filters.cost[singleCost].value
        ) {
          costFilteredUnits.push(unit);
        }
      });

      return costFilteredUnits;
    }

    // If there are 2 active cost filters
    if (activeCostFilters.length === 2) {
      const costOne = activeCostFilters[0];
      const costTwo = activeCostFilters[1];
      const costFilteredUnits = [];

      ageFilteredUnits.forEach((unit) => {
        if (
          unit?.cost &&
          unit?.cost[costOne] >= filters.cost[costOne].value &&
          unit?.cost[costTwo] >= filters.cost[costTwo].value
        ) {
          costFilteredUnits.push(unit);
        }
      });

      return costFilteredUnits;
    }

    // If there are 3 active cost filters
    if (activeCostFilters.length === 3) {
      const costOne = activeCostFilters[0];
      const costTwo = activeCostFilters[1];
      const costThree = activeCostFilters[2];
      const costFilteredUnits = [];

      ageFilteredUnits.forEach((unit) => {
        if (
          unit?.cost &&
          unit?.cost[costOne] >= filters.cost[costOne].value &&
          unit?.cost[costTwo] >= filters.cost[costTwo].value &&
          unit?.cost[costThree] >= filters.cost[costThree].value
        ) {
          costFilteredUnits.push(unit);
        }
      });

      return costFilteredUnits;
    }
  };

  useEffect(() => {
    getUnits();

    // Go to top of the page
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="page units-page">
      <Filters />
      <UnitList units={filterUnits(units)} />
    </div>
  );
};

export default Units;
