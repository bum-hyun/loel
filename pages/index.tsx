import React from "react";
import styled from "styles/styled";
import DefaultLayout from "layouts";
import SectionTitle from "../src/components/SectionTitle";
import { Card } from "../src/styles";

function Home() {
  return (
    <>
      <Dummy>
        <LeftWrap>
          <SectionWrap>
            <SectionTitle>Title</SectionTitle>
            <CardWrapper>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
              <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아.
                아아아아아아.
              </Card>
            </CardWrapper>
          </SectionWrap>
        </LeftWrap>
        <RightWrap></RightWrap>
      </Dummy>
    </>
  );
}

export default DefaultLayout(Home);

const Dummy = styled.div`
  height: 1500px;
  padding: 1rem;
  display: flex;
`;

const LeftWrap = styled.div`
  flex: 1;
  width: 100%;
`;

const RightWrap = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex: 0 0 360px;
    width: 100%;
  }
`;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;

  @media (min-width: 568px) {
    > div {
      flex: 1 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 1024px) {
    > div {
      flex: 1 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 1350px) {
    > div {
      flex: 1 0 25%;
      max-width: 25%;
    }
  }
`;
