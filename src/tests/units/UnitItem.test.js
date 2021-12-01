import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UnitItem from "../../components/units/UnitItem";
import { BrowserRouter } from "react-router-dom";

test("renders UnitItem", () => {
  const unit = {
    id: 0,
    name: "Archer",
    age: "Feudal",
    cost: { Food: 25, Gold: 50 },
  };

  render(
    <BrowserRouter>
      <UnitItem unit={unit} />
    </BrowserRouter>
  );

  const unitId = screen.getByText(unit.id);
  const unitName = screen.getByText(unit.name);
  const unitAge = screen.getByText(unit.age);

  expect(unitId).toBeInTheDocument();
  expect(unitName).toBeInTheDocument();
  expect(unitAge).toBeInTheDocument();
});
