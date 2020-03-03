import React from "react";
import styled from "styled-components";

const Task = ({ title }) => {
  return (
    <TaskBox>
      <p>{title}</p>
    </TaskBox>
  );
};

const TaskBox = styled.div`
  border-radius: 0.25rem;
  padding: 5px;
  background: #edf2f7;
  color: #212121;
  margin: 5px;
`;

export default Task;
