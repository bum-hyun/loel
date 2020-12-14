import React from "react";
import Link from "next/link";
import styled from "styles/styled";

interface ISectionTitle {
  children: React.ReactChildren | string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ children }) => {
  return <Title href={"#"}>{children}</Title>;
};

export default SectionTitle;

const Title = styled(Link)`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;
