import React from "react";
import { render, cleanup } from "@testing-library/react";
const { axe } = require("jest-axe");

import Navigation from "../Navigation";

afterEach(cleanup);

test("Navigation should render", () => {
  const { getByText } = render(<Navigation />);

  expect(getByText("Tasky Task")).toBeInTheDocument();
});

test("navigation should not have any accessibility violations", async () => {
  const { container } = render(<Navigation />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
