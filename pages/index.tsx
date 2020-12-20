import React, { useEffect } from "react";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import SectionTitle from "../src/components/SectionTitle";
import { Card } from "../src/styles";
import service from "../utils/service";

function Home() {
  useEffect(() => {
    service.post("http://localhost:8002/v1/token", { email: "ru_bryunak@naver.com" }).then((r) => {
      service.get("http://localhost:8002/v1/test", { headers: { authorization: r.data.token } }).then((r) => console.log(r));
    });
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>Title</SectionTitle>
      <CardWrapper>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
        <Card title={"써보겠습니다아아아아아아아아아아아아길게길게한번써보겠습니"} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
          길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아. 길게길게 한번 써보겠습니다아아. 아아아아. 아아아아아아.
        </Card>
      </CardWrapper>
    </SectionWrap>
  );
}

export default DefaultLayout(Home);

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
