import React from "react";
import styled from "styles/styled";

const CheckList: React.FC = () => {
  return (
    <Border>
      <Title>추후 개발 사항</Title>
      <p>카테고리 페이지 인피니트 스크롤</p>
      <p>방문자 수, 글 조회 수 기록</p>
      <p>헤더 손보기</p>
      <p>댓글 시스템 구현</p>
      <p>인증 더 다듬기</p>
      <p>다중 이미지 업로드</p>
    </Border>
  );
};

export default CheckList;

const Border = styled.div`
  padding: 3rem;
  width: 100%;

  p + p {
    margin-top: 0.675rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;
