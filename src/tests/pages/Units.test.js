import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Units from "../../components/pages/Units";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../../context/appContext";

test("renders Spinner if loading is true", () => {
  const loading = true;
  const getUnits = () => console.log("Get Units");

  render(
    <AppContext.Provider value={{ loading, getUnits }}>
      <BrowserRouter>
        <Units />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const spinner = screen.getByAltText("Axe");

  expect(spinner).toBeInTheDocument();
});

test("renders Filters and UnitList components if loading is false", () => {
  const loading = false;
  const getUnits = () => console.log("Get Units");
  const units = [
    { id: 0, name: "Ex Unit 1", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 1, name: "Ex Unit 2", age: "Feudal", cost: { Food: 25, Wood: 25 } },
  ];
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: false, value: 0 },
      Wood: { isActive: false, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };

  render(
    <AppContext.Provider value={{ loading, getUnits, units, filters }}>
      <BrowserRouter>
        <Units />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const ageBtnDark = screen.getByTestId("age-btn-dark");
  const listTitleName = screen.getByText("Name");

  expect(ageBtnDark).toBeInTheDocument();
  expect(listTitleName).toBeInTheDocument();
});

test("renders units for only single selected cost type", () => {
  const loading = false;
  const getUnits = () => console.log("Get Units");
  const units = [
    { id: 0, name: "Ex Unit 1", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 1, name: "Ex Unit 2", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 2, name: "Ex Unit 3", age: "Castle", cost: { Gold: 25, Wood: 25 } },
    { id: 3, name: "Ex Unit 4", age: "Imperial", cost: { Gold: 25, Wood: 25 } },
  ];
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: true, value: 0 },
      Wood: { isActive: false, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };

  render(
    <AppContext.Provider value={{ loading, getUnits, units, filters }}>
      <BrowserRouter>
        <Units />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const unitsWithFood = screen.getAllByText("Dark");

  // 2 units + 1 button
  expect(unitsWithFood).toHaveLength(3);
});

test("renders units for only two selected cost type", () => {
  const loading = false;
  const getUnits = () => console.log("Get Units");
  const units = [
    { id: 0, name: "Ex Unit 1", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 1, name: "Ex Unit 2", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 2, name: "Ex Unit 3", age: "Castle", cost: { Gold: 25, Food: 25 } },
    { id: 3, name: "Ex Unit 4", age: "Imperial", cost: { Gold: 25, Wood: 25 } },
  ];
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: true, value: 0 },
      Wood: { isActive: true, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };

  render(
    <AppContext.Provider value={{ loading, getUnits, units, filters }}>
      <BrowserRouter>
        <Units />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const unitsWithFoodandWood = screen.getAllByText("Dark");

  // 2 units + 1 button
  expect(unitsWithFoodandWood).toHaveLength(3);
});

test("renders no units for three selected cost type", () => {
  const loading = false;
  const getUnits = () => console.log("Get Units");
  const units = [
    { id: 0, name: "Ex Unit 1", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 1, name: "Ex Unit 2", age: "Dark", cost: { Food: 25, Wood: 25 } },
    { id: 2, name: "Ex Unit 3", age: "Castle", cost: { Gold: 25, Food: 25 } },
    { id: 3, name: "Ex Unit 4", age: "Imperial", cost: { Gold: 25, Wood: 25 } },
  ];
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: true, value: 0 },
      Wood: { isActive: true, value: 0 },
      Gold: { isActive: true, value: 0 },
    },
  };

  render(
    <AppContext.Provider value={{ loading, getUnits, units, filters }}>
      <BrowserRouter>
        <Units />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const unitsWithAllCosts = screen.getAllByText("Dark");

  // Only the button, but not units
  expect(unitsWithAllCosts).toHaveLength(1);
});
