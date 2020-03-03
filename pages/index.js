import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation.js";
import styled from "styled-components";

const BodyWrapper = styled.div`
  background: #1a202c;
  color: white;
  min-height: 100vh;
  min-width: 100vh;
  margin-top: 0;
  font-family: sans-serif;
`;

const Home = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/css/normalize.css" />
    </Head>
    <BodyWrapper>
      <Navigation />
    </BodyWrapper>
  </>
);

export default Home;
