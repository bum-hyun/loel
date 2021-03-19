import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import styled from "styles/styled";
import { DefaultLayout } from "layouts";
import { useRouter } from "next/router";
import Head from "next/head";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "styles";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { REMOVE_POST, CREATE_COMMENT, GET_COMMENTS } from "@api/Post";
import "prismjs/themes/prism.css";
import { decodeHTMLForHeader, dateDisplay } from "@utils/common";
import { css } from "@emotion/core";
import service from "@utils/service";

interface Props extends GetServerSidePropsContext {
  authority: boolean;
  authenticated: (state: boolean) => void;
}

const Post = ({ authority, post }: any) => {
  const router = useRouter();
  const id = post.id.toString();

  const [comments, setComments] = useState<IComments[] | null>(null);
  const [comment, setComment] = useState<IWriteComment>({ name: "", password: "", contents: "", class: 0 });

  useQuery(GET_COMMENTS, {
    fetchPolicy: "cache-first",
    variables: { postId: id },
    onCompleted: (data) => {
      setComments(data.getComments);
    },
  });

  const [RemovePostMutation] = useMutation(REMOVE_POST, {
    onCompleted: () => {
      router.push(`/`);
    },
  });

  const pushEditPage = () => {
    router.push(`/edit?id=${id}`);
  };

  const remove = async () => {
    await RemovePostMutation({
      variables: { id: id },
    });
  };

  const autoIncreaseHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    target.style.height = `${target.scrollHeight + 2}px`;
  };

  const handleCommentInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const [CreateCommentMutation] = useMutation(CREATE_COMMENT, {
    refetchQueries: [{ query: GET_COMMENTS, variables: { postId: id } }],
    onCompleted: () => {
      setComment({ name: "", password: "", contents: "", class: 0 });
    },
  });

  const registerComment = async () => {
    const { name, password, contents } = comment;
    if (!name) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!contents) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") as string);
    await CreateCommentMutation({
      variables: { comment, postId: id, email: user.email },
    });
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://www.loelblog.com/post/${id}`} />
        <meta name="title" content={`Loel's Blog ${post ? ` - ` + post.title : ""}`} />
        <meta name="description" content={decodeHTMLForHeader(post ? post.html : "음식과 여행을 좋아하는 개발자의 블로그 입니다.")} />
        <meta property="og:title" content={`Loel's Blog ${post ? ` - ` + post.title : ""}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.loelblog.com/post/${id}`} />
        <meta property="og:description" content={decodeHTMLForHeader(post ? post.html : "음식과 여행을 좋아하는 개발자의 블로그 입니다.")} />
        <meta property="og:image" content="https://images.loelblog.com/thumb/background.jpg" />
        <title>{`Loel's Blog ${post ? ` - ` + post.title : ""}`}</title>
      </Head>
      {post && (
        <>
          <PostWrap>
            <HeadWrap>
              <Title>{post.title}</Title>
              <InfoWrap>
                <Author>{post.email}</Author>
                <CreatedAt>{dateDisplay(post.updatedAt)}</CreatedAt>
                {authority && (
                  <EditWrap>
                    <Button onClick={pushEditPage} variant={"warning"}>
                      수정
                    </Button>
                    <Button onClick={remove} variant={"danger"}>
                      삭제
                    </Button>
                  </EditWrap>
                )}
              </InfoWrap>
            </HeadWrap>
            <ContentWrap className={"tui-editor-contents"} dangerouslySetInnerHTML={{ __html: post.html2 ? (post.html2 as string) : (post.html as string) }} />
          </PostWrap>
          <CommentRegisterWrap>
            <TotalComment>댓글 {comments ? comments.length : 0}</TotalComment>
            <div>
              <CommentWriterWrap>
                <CommentWriterInput name={"name"} maxLength={40} value={comment.name} onChange={handleCommentInput} placeholder={"닉네임"} />
                <CommentWriterInput name={"password"} maxLength={40} value={comment.password} onChange={handleCommentInput} placeholder={"비밀번호"} />
              </CommentWriterWrap>
              <InputComment name={"contents"} value={comment.contents} onChange={handleCommentInput} onInput={autoIncreaseHeight} placeholder={"댓글을 남겨주세요."} />
              <CommentRegisterButton>
                <Button variant={"success"} width={120} height={40} onClick={registerComment}>
                  댓글 작성
                </Button>
              </CommentRegisterButton>
            </div>
          </CommentRegisterWrap>
          <CommentsWrap>
            {comments &&
              comments.length > 0 &&
              comments.map((item) => {
                return (
                  <CommentWrap key={item.id}>
                    <CommentInfoWrap>
                      <CommentWriterName>{item.name}</CommentWriterName>
                      <CommentCreatedAt>{dateDisplay(item.createdAt)}</CommentCreatedAt>
                    </CommentInfoWrap>
                    <Comment>{item.contents}</Comment>
                  </CommentWrap>
                );
              })}
          </CommentsWrap>
        </>
      )}
    </>
  );
};

export default DefaultLayout(Post);

export async function getStaticPaths() {
  const { data } = await service.get("/post");
  const paths = data.map((item: any) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = await service.get(`/post/${params.id}`);

  return { props: { post: data } };
}

const Border = css`
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const PostWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
`;

const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
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
  margin-right: 10px;
  font-weight: 600;
`;

const CreatedAt = styled.span``;

const ContentWrap = styled.article`
  font-size: 1rem;

  img {
    display: block;
    max-width: 600px;
  }
`;

const EditWrap = styled.div`
  margin-left: auto;

  button + button {
    margin-left: 0.5rem;
  }
`;

const CommentRegisterWrap = styled.div`
  padding-bottom: 2rem;
`;

const TotalComment = styled.div`
  margin: 0.5rem 0.5rem 1rem;
  font-weight: 500;
`;

const InputComment = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.625rem;
  width: 100%;
  min-height: 5rem;
  font-size: 1rem;
  line-height: 1.75;
  ${Border}
  resize: none;
`;

const CommentRegisterButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CommentsWrap = styled.div`
  margin: 1.5rem 0 3rem;
`;

const CommentWriterWrap = styled.div`
  margin-bottom: 1rem;
`;

const CommentWriterInput = styled.input`
  margin: 0;
  padding: 2px 10px;
  height: 38px;
  font-size: 1rem;
  color: #4c4c4c;
  line-height: 1.2;
  ${Border}

  + input {
    margin-left: 1rem;
  }
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #efefef;
`;

const CommentInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CommentWriterName = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const CommentCreatedAt = styled.div`
  font-size: 0.875rem;
  color: #8a8a8a;
`;

const Comment = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
`;
