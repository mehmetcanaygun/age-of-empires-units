import { useState, useContext } from "react";
import AppContext from "../../context/appContext";

const Filters = () => {
  const appContext = useContext(AppContext);
  const { setFilters, filters } = appContext;

  // Local state for disabling/enabling range inputs & getting their values in cost filter
  const [woodToggled, setWoodToogled] = useState(false);
  const [foodToggled, setFoodToogled] = useState(false);
  const [goldToggled, setGoldToogled] = useState(false);

  const [wood, setWood] = useState(filters.costs.wood);
  const [food, setFood] = useState(filters.costs.food);
  const [gold, setGold] = useState(filters.costs.gold);

  const handleAgeFilter = (event, value) => {
    event.preventDefault();

    setFilters("age", value);
  };

  const handleCostFilter = (costType, value) => {
    if (costType === "wood") {
      setWood(value);
      setFilters("cost", { ...filters.costs, wood });
    } else if (costType === "food") {
      setFood(value);
      setFilters("cost", { ...filters.costs, food });
    } else {
      setGold(value);
      setFilters("cost", { ...filters.costs, gold });
    }
  };

  return (
    <form className="unit-filters-form">
      <div className="age-filter">
        <button className="active" onClick={(e) => handleAgeFilter(e, "All")}>
          All
        </button>
        <button onClick={(e) => handleAgeFilter(e, "Dark")}>Dark</button>
        <button onClick={(e) => handleAgeFilter(e, "Feudal")}>Feudal</button>
        <button onClick={(e) => handleAgeFilter(e, "Castle")}>Castle</button>
        <button onClick={(e) => handleAgeFilter(e, "Imperial")}>
          Imperial
        </button>
      </div>

      <div className="cost-filter">
        <div className="range-col">
          <label htmlFor="wood-checbox">
            <input
              type="checkbox"
              id="wood-checkbox"
              onChange={() => setWoodToogled(!woodToggled)}
            />{" "}
            Wood
            <span>Min: {wood} - Max: 200</span>
          </label>
          <input
            type="range"
            id="wood-range"
            min="0"
            max="200"
            value={wood}
            disabled={woodToggled ? false : true}
            onChange={(e) => handleCostFilter("wood", e.target.value)}
          />
        </div>

        <div className="range-col">
          <label htmlFor="food-checbox">
            <input
              type="checkbox"
              id="food-checkbox"
              onChange={() => setFoodToogled(!foodToggled)}
            />
            Food
            <span>Min: {food} - Max: 200</span>
          </label>
          <input
            type="range"
            id="food-range"
            min="0"
            max="200"
            value={food}
            disabled={foodToggled ? false : true}
            onChange={(e) => handleCostFilter("food", e.target.value)}
          />
        </div>

        <div className="range-col">
          <label htmlFor="gold-checbox">
            <input
              type="checkbox"
              id="gold-checkbox"
              onChange={() => setGoldToogled(!goldToggled)}
            />{" "}
            Gold
            <span>Min: {gold} - Max: 200</span>
          </label>
          <input
            type="range"
            id="gold-range"
            min="0"
            max="200"
            value={gold}
            disabled={goldToggled ? false : true}
            onChange={(e) => handleCostFilter("gold", e.target.value)}
          />
        </div>
      </div>

      <button className="search-btn">Search</button>
    </form>
  );
};

export default Filters;
