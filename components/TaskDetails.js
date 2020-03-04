import React from "react";
import styled from "styled-components";

const TaskDetails = ({ active }) => {
  return (
    <Backdrop active={active}>
      <Modal data-testid="task-details-modal"></Modal>
    </Backdrop>
  );
};

const Modal = styled.div`
  z-index: 3;
  padding: 0.25rem;
  background: white;
  min-width: 2rem;
  min-height: 2rem;
`;

const Backdrop = styled.div`
  display: ${props => (props.active ? "flex" : "none")};
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #333;
`;

export default TaskDetails;
