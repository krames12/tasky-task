import React from "react";
import TaskDetails from "./TaskDetails";
import TaskColumn from "./TaskColumn";

const TaskOverview = ({ columns }) => {
  return (
    <>
      <TaskDetails />
      {columns && columns.length ? (
        columns.map((column, index) => <TaskColumn key={index} {...column} />)
      ) : (
        <p className="it-broke" data-testid="empty-overview">
          You don't have any columns, you dun did borked it 🐶
        </p>
      )}
    </>
  );
};

export default TaskOverview;
