import React from "react";
import { render, cleanup } from "@testing-library/react";
const { axe } = require("jest-axe");

import Task from "../Task";

afterEach(cleanup);
let title = "You know the rules, and so do I.";

test("Task should render", () => {
  const { getByText } = render(<Task title={title} />);

  expect(getByText(title)).toBeInTheDocument();
});

test("A task card should not have any accessibility violations", async () => {
  const { container } = render(<Task title={title} />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
