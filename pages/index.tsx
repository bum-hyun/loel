import React, { useEffect, useState } from "react";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { Card } from "../src/styles";
import service from "../utils/service";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../api/Post";

const Home: React.FC = () => {
  const router = useRouter();

  const [posts, setPosts] = useState<any[] | null>([]);

  const decodeHTML = (html: string) => {
    const content = html.replace(/(<([^>]+)>)/gi, "");
    return content.substring(0, 150);
  };

  const readPost = (link: string) => {
    router.push(link);
  };

  const data = useQuery(GET_ALL_POSTS, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    async function getData() {
      const { data } = await service.get(`http://localhost:8002/post/all`);
      setPosts(data.data);
    }
    getData();
  }, []);

  return (
    <>
      {posts &&
        Object.entries(posts!).map((item, index) => {
          return (
            <SectionWrap key={index}>
              {item[1].length > 0 && (
                <>
                  <Title>{item[0]}</Title>
                  <CardWrapper>
                    {item[1].map((item2: any) => {
                      return (
                        <Card
                          key={item2.id}
                          title={item2.title}
                          onClick={() => readPost(`/post/${item2.category}/${item2.id}`)}
                          thumbnail={<img src={"/background.jpg"} alt={"image"} />}
                        >
                          {decodeHTML(item2.html)}
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
