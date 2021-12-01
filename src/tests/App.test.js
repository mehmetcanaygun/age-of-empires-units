import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  render(<App />);
  const logo = screen.getAllByAltText("Logo");
  expect(logo).toHaveLength(2);
});
