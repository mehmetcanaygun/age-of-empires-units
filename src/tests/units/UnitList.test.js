import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UnitList from "../../components/units/UnitList";
import { BrowserRouter } from "react-router-dom";

test("renders UnitList", () => {
  const units = [];

  render(<UnitList units={units} />);

  const listTitleId = screen.getByText("Id");
  const listTitleName = screen.getByText("Name");
  const listTitleAge = screen.getByText("Age");
  const listTitleCost = screen.getByText("Cost");

  expect(listTitleId).toBeInTheDocument();
  expect(listTitleName).toBeInTheDocument();
  expect(listTitleAge).toBeInTheDocument();
  expect(listTitleCost).toBeInTheDocument();
});

test("renders UnitItem in UnitList", () => {
  const units = [
    { id: 0, name: "Ex Unit 1", age: "Dark", cost: { Food: 25, Gold: 25 } },
    { id: 1, name: "Ex Unit 2", age: "Feudal", cost: { Food: 35, Gold: 35 } },
    { id: 3, name: "Ex Unit 3", age: "Castle", cost: { Food: 45, Gold: 45 } },
  ];

  render(
    <BrowserRouter>
      <UnitList units={units} />
    </BrowserRouter>
  );

  const unitDark = screen.getByText("Dark");
  const unitFeudal = screen.getByText("Feudal");
  const unitCastle = screen.getByText("Castle");

  expect(unitDark).toBeInTheDocument();
  expect(unitFeudal).toBeInTheDocument();
  expect(unitCastle).toBeInTheDocument();
});
