import React from "react";
import Header from "layouts/Header";
import styled from "styles/styled";

export default (Component: React.FC) => () => {
  return (
    <>
      <Header />
      <Container>
        <Background />
        <Component />
      </Container>
    </>
  );
};

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
