import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UnitDetails from "../../components/pages/UnitDetails";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../../context/appContext";

test("renders unit details", () => {
  const unit = {
    id: 1,
    name: "Archer",
    description:
      "Quick and light. Weak at close range; excels at battle from distance",
    expansion: "Age of Kings",
    age: "Feudal",
    cost: {
      Wood: 25,
      Gold: 45,
    },
    build_time: 35,
    reload_time: 2,
    attack_delay: 0.35,
    movement_rate: 0.96,
    line_of_sight: 6,
    hit_points: 4,
    range: 30,
    attack: 4,
    armor: "0/0",
    accuracy: "80%",
  };
  const setUnit = (id) => {
    console.log(id);
  };

  render(
    <AppContext.Provider value={{ unit, setUnit }}>
      <BrowserRouter>
        <UnitDetails />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const name = screen.getByText(unit.name);

  expect(name).toBeInTheDocument();
});
