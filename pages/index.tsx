import React, { useState } from "react";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { Card } from "../src/styles";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "@api/Post";
import { thumbnail, decodeHTML } from "@utils/common";

const Home = () => {
  const router = useRouter();

  const [posts, setPosts] = useState<IPosts[] | null>([]);

  const readPost = (link: string) => {
    router.push(link);
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
                  <Title>{item.label.toUpperCase()}</Title>
                  <CardWrapper>
                    {item.items.map((item2) => {
                      return (
                        <Card
                          key={item2.id}
                          title={item2.title}
                          onClick={() => readPost(`/post/${item2.id}`)}
                          thumbnail={item2.image && item2.image!.length > 0 ? thumbnail(item2.image) : ""}
                        >
                          {decodeHTML(item2!)}
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

  @media (min-width: 1350px) {
    > div {
      flex: 1 0 33%;
      max-width: 33%;
    }
  }
`;

const Title = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;
