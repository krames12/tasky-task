import React from "react";
import styled from "styled-components";

import Task from "./Task";

const TaskColumn = ({ title, taskList }) => {
  return (
    <Column>
      <ColumnTitle>{title}</ColumnTitle>
      {taskList && taskList.length ? (
        taskList.map((task, index) => <Task key={index} title={task} />)
      ) : (
        <p>No current tasks</p>
      )}
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
