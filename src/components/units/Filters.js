import { useState, useContext } from "react";
import AppContext from "../../context/appContext";

const Filters = () => {
  const appContext = useContext(AppContext);
  const { setFilters, filters } = appContext;

  // Local state for disabling/enabling range inputs & getting their values in cost filter
  const [woodToggled, setWoodToogled] = useState(false);
  const [foodToggled, setFoodToogled] = useState(false);
  const [goldToggled, setGoldToogled] = useState(false);

  const [wood, setWood] = useState(filters.cost?.Wood?.value);
  const [food, setFood] = useState(filters.cost?.Food?.value);
  const [gold, setGold] = useState(filters.cost?.Gold?.value);

  const handleAgeFilter = (event, value) => {
    event.preventDefault();

    setFilters("age", value);
  };

  const handleCostFilter = (costType, { isActive, value }) => {
    if (costType === "wood") {
      setWood(value);
      setFilters("cost", { ...filters.cost, Wood: { isActive, value } });
    } else if (costType === "food") {
      setFood(value);
      setFilters("cost", { ...filters.cost, Food: { isActive, value } });
    } else {
      setGold(value);
      setFilters("cost", { ...filters.cost, Gold: { isActive, value } });
    }
  };

  return (
    <form className="unit-filters-form">
      <div className="age-filter">
        <button
          className={filters.age.length === 4 ? "active" : ""}
          onClick={(e) =>
            handleAgeFilter(e, ["Dark", "Feudal", "Castle", "Imperial"])
          }
        >
          All
        </button>
        <button
          className={
            filters.age.length === 1 && filters.age[0] === "Dark"
              ? "active"
              : ""
          }
          onClick={(e) => handleAgeFilter(e, ["Dark"])}
        >
          Dark
        </button>
        <button
          className={
            filters.age.length === 1 && filters.age[0] === "Feudal"
              ? "active"
              : ""
          }
          onClick={(e) => handleAgeFilter(e, ["Feudal"])}
        >
          Feudal
        </button>
        <button
          className={
            filters.age.length === 1 && filters.age[0] === "Castle"
              ? "active"
              : ""
          }
          onClick={(e) => handleAgeFilter(e, ["Castle"])}
        >
          Castle
        </button>
        <button
          className={
            filters.age.length === 1 && filters.age[0] === "Imperial"
              ? "active"
              : ""
          }
          onClick={(e) => handleAgeFilter(e, ["Imperial"])}
        >
          Imperial
        </button>
      </div>

      <div className="cost-filter">
        <div className="range-col">
          <label htmlFor="wood-checkbox">
            <input
              type="checkbox"
              id="wood-checkbox"
              onChange={() => {
                handleCostFilter("wood", {
                  isActive: !woodToggled,
                  value: wood,
                });

                setWoodToogled(!woodToggled);
              }}
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
            onChange={(e) =>
              handleCostFilter("wood", {
                isActive: true,
                value: +e.target.value,
              })
            }
          />
        </div>

        <div className="range-col">
          <label htmlFor="food-checkbox">
            <input
              type="checkbox"
              id="food-checkbox"
              onChange={() => {
                handleCostFilter("food", {
                  isActive: !foodToggled,
                  value: food,
                });

                setFoodToogled(!foodToggled);
              }}
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
            onChange={(e) =>
              handleCostFilter("food", {
                isActive: true,
                value: +e.target.value,
              })
            }
          />
        </div>

        <div className="range-col">
          <label htmlFor="gold-checkbox">
            <input
              type="checkbox"
              id="gold-checkbox"
              onChange={() => {
                handleCostFilter("gold", {
                  isActive: !goldToggled,
                  value: gold,
                });

                setGoldToogled(!goldToggled);
              }}
            />
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
            onChange={(e) =>
              handleCostFilter("gold", {
                isActive: true,
                value: +e.target.value,
              })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Filters;
