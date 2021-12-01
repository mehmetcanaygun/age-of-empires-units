import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Filters from "../../components/units/Filters";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../../context/appContext";
import userEvent from "@testing-library/user-event";

test("renders Filter inputs", () => {
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: false, value: 0 },
      Wood: { isActive: false, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };
  const setFilters = () => console.log("Set Filters");

  render(
    <AppContext.Provider value={{ filters, setFilters }}>
      <BrowserRouter>
        <Filters />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const ageBtnAll = screen.getByText("All");
  const ageBtnDark = screen.getByText("Dark");
  const ageBtnFeudal = screen.getByText("Feudal");
  const ageBtnCastle = screen.getByText("Castle");
  const ageBtnImperial = screen.getByText("Imperial");

  const woodCheckboxLabel = screen.getByLabelText(/Wood/i);
  const foodCheckboxLabel = screen.getByLabelText(/Food/i);
  const goldCheckboxLabel = screen.getByLabelText(/Gold/i);

  expect(ageBtnAll).toBeInTheDocument();
  expect(ageBtnDark).toBeInTheDocument();
  expect(ageBtnFeudal).toBeInTheDocument();
  expect(ageBtnCastle).toBeInTheDocument();
  expect(ageBtnImperial).toBeInTheDocument();

  expect(woodCheckboxLabel).toBeInTheDocument();
  expect(foodCheckboxLabel).toBeInTheDocument();
  expect(goldCheckboxLabel).toBeInTheDocument();
});

test("renders age buttons with correct class name", () => {
  const filters = {
    age: ["Dark", "Feudal", "Castle", "Imperial"],
    cost: {
      Food: { isActive: false, value: 0 },
      Wood: { isActive: false, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };
  const setFilters = () => console.log("Set Filters");

  render(
    <AppContext.Provider value={{ filters, setFilters }}>
      <BrowserRouter>
        <Filters />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const ageBtnAll = screen.getByTestId("age-btn-all");
  const ageBtnDark = screen.getByTestId("age-btn-dark");
  const ageBtnFeudal = screen.getByTestId("age-btn-feudal");
  const ageBtnCastle = screen.getByTestId("age-btn-castle");
  const ageBtnImperial = screen.getByTestId("age-btn-imperial");

  expect(ageBtnAll).toHaveClass("active");
  expect(ageBtnDark).not.toHaveClass("active");
  expect(ageBtnFeudal).not.toHaveClass("active");
  expect(ageBtnCastle).not.toHaveClass("active");
  expect(ageBtnImperial).not.toHaveClass("active");
});

test("calls handleAgeFilter function on click", () => {
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: false, value: 0 },
      Wood: { isActive: false, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };
  const setFilters = () => console.log("Set Filters");

  render(
    <AppContext.Provider value={{ filters, setFilters }}>
      <BrowserRouter>
        <Filters />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const ageBtnAll = screen.getByTestId("age-btn-all");
  const ageBtnDark = screen.getByTestId("age-btn-dark");
  const ageBtnFeudal = screen.getByTestId("age-btn-feudal");
  const ageBtnCastle = screen.getByTestId("age-btn-castle");
  const ageBtnImperial = screen.getByTestId("age-btn-imperial");

  userEvent.click(ageBtnAll);
  userEvent.click(ageBtnDark);
  userEvent.click(ageBtnFeudal);
  userEvent.click(ageBtnCastle);
  userEvent.click(ageBtnImperial);
});

test("calls handleCostFilter function on checkbox click and range change", () => {
  const filters = {
    age: ["Dark"],
    cost: {
      Food: { isActive: false, value: 0 },
      Wood: { isActive: false, value: 0 },
      Gold: { isActive: false, value: 0 },
    },
  };
  const setFilters = () => console.log("Set Filters");

  render(
    <AppContext.Provider value={{ filters, setFilters }}>
      <BrowserRouter>
        <Filters />
      </BrowserRouter>
    </AppContext.Provider>
  );

  const costCheckboxWood = screen.getByTestId("cost-checkbox-wood");
  const costRangeWood = screen.getByTestId("cost-range-wood");

  const costCheckboxFood = screen.getByTestId("cost-checkbox-food");
  const costRangeFood = screen.getByTestId("cost-range-food");

  const costCheckboxGold = screen.getByTestId("cost-checkbox-gold");
  const costRangeGold = screen.getByTestId("cost-range-gold");

  userEvent.click(costCheckboxWood);
  userEvent.click(costCheckboxFood);
  userEvent.click(costCheckboxGold);

  userEvent.click(costRangeWood);
  userEvent.click(costRangeFood);
  userEvent.click(costRangeGold);
});
