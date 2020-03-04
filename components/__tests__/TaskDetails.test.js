import React from "react";
import { render, cleanup } from "@testing-library/react";
const { axe } = require("jest-axe");

import TaskDetails from "../TaskDetails";

afterEach(cleanup);

test("Task Overview should render", () => {
  const { getByTestId } = render(<TaskDetails />);

  expect(getByTestId("task-details-modal")).toBeInTheDocument();
});

test("Task Overview should not have any accessibility violations", async () => {
  const { container } = render(<TaskDetails />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
