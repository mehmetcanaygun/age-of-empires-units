import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NotFound from "../../components/pages/NotFound";
import { BrowserRouter } from "react-router-dom";

test("renders NotFound message", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const message = screen.getByText(
    /Page you're looking for could not be found.../i
  );
  expect(message).toBeInTheDocument();
});

test("renders NotFound link to get back to the home page", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const link = screen.getByText(/Back to Home/i);
  expect(link).toBeInTheDocument();
});
