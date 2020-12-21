import React, { useEffect, useState } from "react";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import service from "@utils/service";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

const Post: React.FC = () => {
  const router = useRouter();
  const { category, id } = router.query;

  const [post, setPost] = useState<IReadPost | null>(null);

  useEffect(() => {
    async function getData() {
      const { data } = await service.get(`http://localhost:8002/${category}/${id}`);
      setPost(data.data);
    }
    if (category && id) {
      getData();
    }
  }, [id, category]);

  return (
    <PostWrap>
      {post && (
        <>
          <HeadWrap>
            <Title>{post.title}</Title>
            <InfoWrap>
              <Author>{post.email}</Author>
              <Date>{dayjs(post.updatedAt).format("YYYY년 MM월 DD일 hh시 mm분 ss초")}</Date>
            </InfoWrap>
          </HeadWrap>
          <ContentWrap className={"tui-editor-contents"} dangerouslySetInnerHTML={{ __html: post.html as string }} />
        </>
      )}
    </PostWrap>
  );
};

export default DefaultLayout(Post);

const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 3rem 4rem;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 800;
  color: #313131;
  word-break: keep-all;
  margin-bottom: 2rem;
`;

const InfoWrap = styled.div`
  display: flex;
  font-size: 1rem;
`;

const Author = styled.span`
  margin-right: 1rem;
  font-weight: 600;
`;

const Date = styled.span``;

const ContentWrap = styled.section`
  font-size: 1rem;
`;
