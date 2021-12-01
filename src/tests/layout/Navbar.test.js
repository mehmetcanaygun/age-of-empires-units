import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";

test("renders Navbar logo", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const logo = screen.getByAltText("Logo");
  expect(logo).toBeInTheDocument();
});
