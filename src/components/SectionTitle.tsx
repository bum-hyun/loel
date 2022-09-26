import React from "react";
import Link from "next/link";
import styled from "styles/styled";
import { useRouter } from "next/router";

interface ISectionTitle {
  title: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ title }) => {
  const router = useRouter();
  const { category } = router.query;

  return <Title href={`/${category}`}>{title}</Title>;
};

export default SectionTitle;

const Title = styled(Link)`
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;
