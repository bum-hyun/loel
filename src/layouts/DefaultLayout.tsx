import React from "react";
import Header from "layouts/Header";
import styled from "styles/styled";
import Categories from "../components/Categories";
import { GetServerSidePropsContext } from "next";
import CheckList from "components/CheckList";

const DefaultLayout = (Component: ({ params }: GetServerSidePropsContext) => JSX.Element) => (params: GetServerSidePropsContext) => {
  return (
    <>
      <Header />
      <Container>
        <Background />
        <Wrap>
          <LeftWrap>
            <Component {...params} />
          </LeftWrap>
          <RightWrap>
            <Categories />
            <CheckList />
          </RightWrap>
        </Wrap>
      </Container>
    </>
  );
};

export default DefaultLayout;

const Container = styled.div`
  margin: 0 auto;
`;

const Background = styled.div`
  width: 100%;
  padding-top: 35%;
  background-image: url("https://images.loelblog.com/original/1614754054423background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Wrap = styled.section`
  display: flex;
  padding: 1rem;
`;

const LeftWrap = styled.div`
  flex: 1;
  width: 100%;
`;

const RightWrap = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    padding: 0 1rem;

    > div + div {
      margin-top: 2rem;
    }
  }
`;
