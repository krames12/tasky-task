import React from "react";
import TaskColumn from "./TaskColumn";

const TaskOverview = () => {
  const columns = ["To Do", "In Progress", "In Review", "Done"];
  return columns.map((column, index) => (
    <TaskColumn key={index} title={column} />
  ));
};

export default TaskOverview;
