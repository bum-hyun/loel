import React, { useEffect, useState } from "react";
import { Card } from "styles";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { useRouter } from "next/router";
import service from "../../utils/service";
import EmptyBox from "styles/Icon/EmptyBox";

const Posts: React.FC = () => {
  const router = useRouter();
  const { category, page, per } = router.query;

  const [posts, setPosts] = useState<IReadPost[] | null>([]);

  const decodeHTML = (html: string) => {
    const content = html.replace(/(<([^>]+)>)/gi, "");
    return content.substring(0, 150);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await service.get(`http://localhost:8002/${category}?page=${page}&per=${per}`);
      const { totalCount, items } = data.data as IResponsePosts;
      setPosts(totalCount ? items : null);
    }
    if (category) {
      getData();
    }
  }, [category, page, per]);

  return (
    <>
      <SectionWrap>
        <Title>{category}</Title>
        <CardWrapper>
          {posts &&
            posts.map((item: IReadPost) => {
              return (
                <Card key={item.id} title={item.title} thumbnail={<img src={"./background.jpg"} alt={"image"} />}>
                  {decodeHTML(item.html)}
                </Card>
              );
            })}
          {!posts && (
            <Empty>
              <EmptyBox width={80} height={80} color={"#ff9494"} />
              <EmptyText>글이 없습니다.</EmptyText>
            </Empty>
          )}
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
    > .card {
      flex: 1 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 1024px) {
    > .card {
      flex: 1 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 1350px) {
    > .card {
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

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.625rem;
  width: 100%;
  height: 300px;
  border: 1px solid #aeaeae;
  border-radius: 4px;
`;

const EmptyText = styled.div`
  margin-top: 1rem;
  font-weight: 500;
  color: #313131;
`;
