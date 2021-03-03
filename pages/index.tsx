import React, { useState } from "react";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { Card } from "../src/styles";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "@api/Post";

const Home = () => {
  const router = useRouter();

  const [posts, setPosts] = useState<IPosts[] | null>([]);

  const decodeHTML = (html: string) => {
    const content = html.replace(/(<([^>]+)>)/gi, "");
    return content.substring(0, 150);
  };

  const readPost = (link: string) => {
    router.push(link);
  };

  const thumbnail = (item: IReadPost) => {
    if (item.image && item.image.length > 0) {
      return item.image[0].replace(/\/original\//, "/thumb/");
    } else {
      return "https://loel-s3-bucket.s3.ap-northeast-2.amazonaws.com/thumb/1614754054423background.jpg";
    }
  };

  useQuery(GET_ALL_POSTS, {
    fetchPolicy: "cache-first",
    onCompleted: (data) => {
      setPosts(data.getAllPosts);
    },
  });

  return (
    <>
      {posts &&
        posts.map((item) => {
          return (
            <SectionWrap key={item.label}>
              {item.items.length > 0 && (
                <>
                  <Title>{item.label}</Title>
                  <CardWrapper>
                    {item.items.map((item2) => {
                      return (
                        <Card key={item2.id} title={item2.title} onClick={() => readPost(`/post/${item2.id}`)} thumbnail={<img src={thumbnail(item2)} alt={"image"} />}>
                          {decodeHTML(item2.html!)}
                        </Card>
                      );
                    })}
                  </CardWrapper>
                </>
              )}
            </SectionWrap>
          );
        })}
    </>
  );
};

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

const Title = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;
