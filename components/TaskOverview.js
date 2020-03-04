import React from "react";
import TaskColumn from "./TaskColumn";

const TaskOverview = () => {
  const columns = ["To Do", "In Progress", "In Review", "Done"];
  const taskList = ["This is a task", "This is a task", "This is a task"];

  return columns.map((column, index) => (
    <TaskColumn key={index} title={column} taskList={taskList} />
  ));
};

export default TaskOverview;
