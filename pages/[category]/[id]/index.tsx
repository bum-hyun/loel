import React from "react";
import styled from "styles/styled";

const Post: React.FC = () => {
  return (
    <PostWrap>
      <div>Hello</div>
    </PostWrap>
  );
};

export default Post;

const PostWrap = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
