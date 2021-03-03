import React from "react";
import Header from "layouts/Header";
import styled from "styles/styled";

const EmptyLayout = (Component: React.FC) => () => {
  return (
    <>
      <Header />
      <Container>
        <Background />
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

const Background = styled.div`
  width: 100%;
  padding-top: 35%;
  background-image: url("https://loel-s3-bucket.s3.ap-northeast-2.amazonaws.com/original/1614754054423background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Wrap = styled.section`
  display: flex;
  padding: 1rem;
`;
