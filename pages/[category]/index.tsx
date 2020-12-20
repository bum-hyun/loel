import React, { useEffect, useState } from "react";
import { Card } from "styles";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { useRouter } from "next/router";
import service from "../../utils/service";

const Posts: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  const [posts, setPosts] = useState([]);

  const decodeHTML = (html: string) => {
    const content = html.replace(/(<([^>]+)>)/gi, "");
    return content.substring(0, 150);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await service.get(`http://localhost:8002/${category}`);
      setPosts(data.data.items);
    }
    if (category) {
      getData();
    }
  }, [category]);

  return (
    <>
      <SectionWrap>
        <Title>{category}</Title>
        <CardWrapper>
          {posts.map((item: any) => {
            return (
              <Card key={item.id} title={item.title} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                {decodeHTML(item.html)}
              </Card>
            );
          })}
        </CardWrapper>
      </SectionWrap>
    </>
  );
};

export default DefaultLayout(Posts);

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

const Title = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;
