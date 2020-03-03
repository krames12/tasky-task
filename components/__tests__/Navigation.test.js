import { render, cleanup } from "@testing-library/react";
import Navigation from "../Navigation";

afterEach(cleanup);

test("Navigation should render", () => {
  const { getByText } = render(<Navigation />);

  expect(getByText("Tasky Task")).toBeInTheDocument();
});
