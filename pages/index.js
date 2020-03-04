import React from "react";
import styled from "styled-components";

import Head from "next/head";
import Navigation from "../components/Navigation.js";
import TaskOverview from "../components/TaskOverview";

const BodyWrapper = styled.div`
  background: #1a202c;
  color: white;
  min-height: 100vh;
  min-width: 100vh;
  margin-top: 0;
  font-family: sans-serif;
`;

const columns = [
  {
    title: "To Do",
    taskList: ["This is a task", "This is a task", "This is a task"]
  },
  {
    title: "In Progress",
    taskList: ["This is a task"]
  },
  {
    title: "In Review",
    taskList: ["This is a task", "This is a task"]
  },
  {
    title: "Done",
    taskList: []
  }
];

const Home = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/css/normalize.css" />
    </Head>
    <BodyWrapper>
      <Navigation />
      <TaskOverview columns={columns} />
    </BodyWrapper>
  </>
);

export default Home;
