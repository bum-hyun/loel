import React, { useRef, useState, useEffect } from "react";
import styled from "styles/styled";

interface ICollapse {
  active?: number;
  children: React.ReactNode;
}

interface ICollapseProps {
  index: number;
  showContent: (index: number) => void;
  isActive: boolean;
}

interface ICollapsePanel {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<ICollapse> = ({ active, children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(active ? active : 0);

  const showContent = (index: number) => setActiveIndex(index);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement, {
      showContent,
      index,
      isActive: index === activeIndex,
    });
  });

  return <Container>{childrenWithProps}</Container>;
};

export default Collapse;

export const Panel: React.FC<ICollapsePanel> = ({ title, children, ...rest }) => {
  const { showContent, index, isActive } = rest as ICollapseProps;
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref]);

  return (
    <Wrap>
      <Header onClick={() => showContent(index)}>{title}</Header>
      {ref && (
        <ContentWrap active={isActive} ref={ref} height={height}>
          <Content>{children}</Content>
        </ContentWrap>
      )}
    </Wrap>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Wrap = styled.div`
  width: 100%;
  border-radius: 4px;
`;

const Header = styled.div`
  padding: 1rem;
  color: #fff;
  background-color: #000;
  cursor: pointer;
`;

const ContentWrap = styled.div<{ active: boolean; height: number }>`
  padding: 0 1rem;
  height: ${(p) => (p.active ? p.height : "0")}px;
  background-color: #ddd;
  overflow: hidden;
  transition: height 0.2s ease-out;
`;

const Content = styled.p`
  margin: 1rem 0;
`;
