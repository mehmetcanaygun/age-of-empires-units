import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Spinner from "../../components/layout/Spinner";
import AppContext from "../../context/appContext";

test("renders Spinner image when loading is true", () => {
  const loading = true;

  render(
    <AppContext.Provider value={loading}>
      <Spinner />
    </AppContext.Provider>
  );

  expect(screen.getByAltText("Axe")).toBeInTheDocument();
});
