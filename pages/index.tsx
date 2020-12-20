import React, { useEffect, useState } from "react";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import SectionTitle from "../src/components/SectionTitle";
import { Card } from "../src/styles";
import service from "../utils/service";

interface ICategory {
  id?: number;
  category: string;
  isUse: boolean;
  order: number;
  parent?: string | null;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

interface ICategoryWithChildren extends ICategory {
  children?: ICategory[];
}

function Home() {
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  useEffect(() => {
    service.post("http://localhost:8002/v1/token", { email: "ru_bryunak@naver.com" }).then((r) => {
      service.get("http://localhost:8002/v1/test", { headers: { authorization: r.data.token } }).then((r) => console.log(r));
      service.get("http://localhost:8002/category").then((r) => {
        const dummy = r.data.data.reduce((acc: any, cur: any) => {
          if (!cur.parent) {
            acc.push(cur);
            return acc;
          } else {
            acc.filter((item: any) => {
              if (item.category === cur.parent) {
                item.children = [];
                item.children.push(cur);
              }
            });
            return acc;
          }
        }, []);
        setCategories(dummy);
      });
    });
  }, []);

  return (
    <>
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
      <RightWrap>
        <Border>
          <All>전체글 보기</All>
          <ParentCategoryWrap>
            {categories &&
              categories.map((item: ICategoryWithChildren) => {
                if (!item.children) {
                  return <ParentCategory>{item.category}</ParentCategory>;
                } else {
                  return (
                    <>
                      <ParentCategory>{item.category}</ParentCategory>
                      <ChildCategoryWrap>
                        {item.children.map((item) => {
                          return <ChildCategory>{item.category}</ChildCategory>;
                        })}
                      </ChildCategoryWrap>
                    </>
                  );
                }
              })}
          </ParentCategoryWrap>
        </Border>
      </RightWrap>
    </>
  );
}

export default DefaultLayout(Home);

const LeftWrap = styled.div`
  flex: 1;
  width: 100%;
`;

const RightWrap = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex: 0 0 300px;
    width: 100%;
    margin-left: 1rem;
    padding: 0 1rem;
  }
`;

const Border = styled.div`
  padding: 3rem;
  width: 100%;
  border: 1px solid #eee;
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

const All = styled.div`
  padding: 0.2rem 0;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
`;

const ParentCategoryWrap = styled.ul`
  list-style: none;
`;

const ParentCategory = styled.li`
  padding: 0.2rem 0;
  font-size: 0.875rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const ChildCategoryWrap = styled.ul`
  list-style: none;
`;

const ChildCategory = styled.li`
  padding: 0.2rem 0 0.2rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
