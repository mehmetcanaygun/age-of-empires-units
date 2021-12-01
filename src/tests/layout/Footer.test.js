import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/layout/Footer";

test("renders Footer logo", () => {
  render(<Footer />);
  const logo = screen.getByAltText("Logo");
  expect(logo).toBeInTheDocument();
});
