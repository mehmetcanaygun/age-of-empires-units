import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "../../components/pages/Home";
import { BrowserRouter } from "react-router-dom";

test("renders Home CTA", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const ctaText = screen.getByText("See Units");
  expect(ctaText).toBeInTheDocument();
});
