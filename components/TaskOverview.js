import React from "react";
import TaskColumn from "./TaskColumn";

const TaskOverview = ({ columns }) => {
  // const columns = ["To Do", "In Progress", "In Review", "Done"];
  // const taskList = ["This is a task", "This is a task", "This is a task"];

  return columns && columns.length ? (
    columns.map((column, index) => <TaskColumn key={index} {...column} />)
  ) : (
    <p className="it-broke" data-testid="empty-overview">
      You don't have any columns, you dun did borked it 🐶
    </p>
  );
};

export default TaskOverview;
