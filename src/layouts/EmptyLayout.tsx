import React from "react";
import Header from "layouts/Header";
import styled from "styles/styled";

const EmptyLayout = (Component: React.FC) => () => {
  return (
    <>
      <Header layout={"empty"} />
      <Container>
        <Wrap>
          <Component />
        </Wrap>
      </Container>
    </>
  );
};

export default EmptyLayout;

const Container = styled.div`
  margin: 0 auto;
`;

const Wrap = styled.section`
  display: flex;
  padding: 1rem;
`;
