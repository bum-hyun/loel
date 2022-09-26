import React from "react";
import Header from "layouts/Header";
import styled from "styles/styled";
import { GetServerSidePropsContext } from "next";

interface Props extends GetServerSidePropsContext {
  authority: boolean;
  authenticated: (state: boolean) => void;
}

const EmptyLayout = (Component: (props: Props) => JSX.Element) => (props: Props) => {
  return (
    <>
      <Header authority={props.authority} authenticated={props.authenticated} />
      <Container>
        <Background />
        <Wrap>
          <Component {...props} />
        </Wrap>
      </Container>
    </>
  );
};

export default EmptyLayout;

const Container = styled.div`
  margin: 0 auto;
  max-width: 968px;
`;

const Background = styled.div`
  width: 100%;
  padding-top: 35%;
  background-image: url("/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Wrap = styled.section`
  display: flex;
  padding: 1rem 0;
`;
