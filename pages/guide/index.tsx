import React from "react";
import Card from "styles/Card";
import styled from "styles/styled";
import DefaultLayout from "layouts";

const Guide: React.FC = () => {
  return (
    <Container>
      <Component>
        <Label>카드</Label>
        <Wrap>
          <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
            길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
          </Card>
          <Card title={"Hello"}>길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.</Card>
          <Card>길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.</Card>
        </Wrap>
      </Component>
      <Component>
        <Label>카드</Label>
        <Wrap>
          <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
            길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
          </Card>
          <Card title={"Hello"}>길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.</Card>
          <Card>길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.</Card>
        </Wrap>
      </Component>
      <Component>
        <Label>카드</Label>
        <Wrap>
          <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
            길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
          </Card>
          <Card title={"Hello"}>길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.</Card>
          <Card>길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.</Card>
        </Wrap>
      </Component>
    </Container>
  );
};

export default DefaultLayout(Guide);

const Container = styled.div`
  padding: 1rem;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Wrap = styled.div`
  display: flex;
  margin: -1rem;
`;

const Label = styled.div`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
`;
