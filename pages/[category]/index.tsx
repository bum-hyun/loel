import React, { useState } from "react";
import Head from "next/head";
import { Card } from "styles";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { useRouter } from "next/router";
import EmptyBox from "styles/Icon/EmptyBox";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { useQuery } from "@apollo/react-hooks";
import { GET_CATEGORY_POSTS } from "@api/Post";

const Posts = ({ params }: GetServerSidePropsContext) => {
  const router = useRouter();

  const { category } = (params as unknown) as IParams;

  const [posts, setPosts] = useState<IReadPost[] | null>([]);

  useQuery(GET_CATEGORY_POSTS, {
    fetchPolicy: "cache-first",
    variables: { category },
    onCompleted: (data) => {
      setPosts(data.getCategoryPosts.length > 0 ? data.getCategoryPosts : null);
    },
  });

  const decodeHTML = (html: string) => {
    const content = html.replace(/(<([^>]+)>)/gi, "");
    return content.substring(0, 150);
  };

  const readPost = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://loelblog.com/${category}`} />
        <meta name="title" content={`Loel's Blog - ${category}`} />
        <meta name="description" content={`${category} 글 리스트 입니다.`} />
        <meta property="og:title" content={`Loel's Blog - ${category}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.loelblog.com/${category}`} />
        <meta property="og:description" content={`${category} 글 리스트 입니다.`} />
        <meta property="og:image" content="https://loel-s3-bucket.s3.ap-northeast-2.amazonaws.com/thumb/1614754054423background.jpg" />
        <title>{`Loel's Blog - ${category}`}</title>
      </Head>
      <SectionWrap>
        <Title>{category}</Title>
        <CardWrapper>
          {posts &&
            posts.map((item: IReadPost) => {
              return (
                <Card onClick={() => readPost(`/post/${item.id}`)} key={item.id} title={item.title} thumbnail={<img src={"https://loel-s3-bucket.s3.ap-northeast-2.amazonaws.com/thumb/1614754054423background.jpg"} alt={"image"} />}>
                  {decodeHTML(item.html!)}
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

export async function getServerSideProps({ params }: GetStaticPropsContext) {
  return {
    props: { params },
  };
}

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
