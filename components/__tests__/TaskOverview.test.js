import React from "react";
import { render, cleanup } from "@testing-library/react";
const { axe } = require("jest-axe");

import TaskOverview from "../TaskOverview";

afterEach(cleanup);

test("Task Overview should render", () => {
  const { getByTestId } = render(<TaskOverview />);

  expect(getByTestId("empty-overview")).toBeInTheDocument();
});

test("Task Overview should not have any accessibility violations", async () => {
  const { container } = render(<TaskOverview />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
