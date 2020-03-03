import React from "react";
import styled from "styled-components";

import Task from "./Task";

const TaskColumn = ({ title }) => {
  const taskList = ["This is a task", "This is a task", "This is a task"];

  return (
    <Column>
      <ColumnTitle>{title}</ColumnTitle>
      {taskList.map((task, index) => (
        <Task key={index} title={task} />
      ))}
    </Column>
  );
};

const Column = styled.div`
  background: #4a5568;
  border-radius: 10px;
  padding: 0.25rem;
`;

const ColumnTitle = styled.h3`
  text-align: center;
`;
export default TaskColumn;
