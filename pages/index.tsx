import React from "react";
import styled from "styles/styled";
import Header from "layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Background />
        <Dummy />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

const Background = styled.div`
  width: 100%;
  padding-top: 35%;
  background-image: url("./background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Dummy = styled.div`
  height: 1500px;
`;
