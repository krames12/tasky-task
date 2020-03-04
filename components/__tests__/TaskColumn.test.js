import React from "react";
import { render, cleanup } from "@testing-library/react";
const { axe } = require("jest-axe");

import TaskColumn from "../TaskColumn";

afterEach(cleanup);
let title = "To Do";
let tasks = [
  "Let the dogs out",
  "Setup babel to actually accept tests",
  "Get that sweet party-corgi emote"
];

test("Task should render", () => {
  const { getByText } = render(<TaskColumn title={title} taskList={tasks} />);

  expect(getByText(title)).toBeInTheDocument();
});

test("A task card should not have any accessibility violations", async () => {
  const { container } = render(<TaskColumn title={title} taskList={tasks} />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
