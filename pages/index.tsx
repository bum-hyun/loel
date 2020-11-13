import React from "react";
import styled from "styles/styled";
import DefaultLayout from "layouts";

function Home() {
  return (
    <>
      <Dummy />
    </>
  );
}

const Dummy = styled.div`
  height: 1500px;
`;

export default DefaultLayout(Home);
