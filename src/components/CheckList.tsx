import React from "react";
import styled from "styles/styled";

const CheckList: React.FC = () => {
  return (
    <Border>
      <Title>추후 개발 사항</Title>
      <p>글 수정 시 데이터 바인딩 안되는 이슈</p>
      <p>카테고리 페이지 인피니트 스크롤</p>
      <p>람다 떼고 리사이즈 라우트에서 리사이징 수행</p>
    </Border>
  );
};

export default CheckList;

const Border = styled.div`
  padding: 3rem;
  width: 100%;
  border: 1px solid #eee;

  p + p {
    margin-top: 0.675rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;
