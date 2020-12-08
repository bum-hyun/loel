import React, { useRef, useState, useEffect } from "react";
import styled from "styles/styled";

interface ICollapse {
  active?: number | number[];
  accordion?: boolean;
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

const Collapse: React.FC<ICollapse> = ({ active, accordion, children }) => {
  const [activeIndex, setActiveIndex] = useState<number | number[]>(active ? active : accordion ? 0 : []);

  const showContent = (index: number) => {
    if (accordion) {
      setActiveIndex(index);
    } else {
      let temp;
      if ((activeIndex as number[]).includes(index)) {
        temp = (activeIndex as number[]).filter((item) => item !== index);
      } else {
        temp = (activeIndex as number[]).concat(index);
      }
      setActiveIndex(temp);
    }
  };

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if ((child as React.ReactElement)?.type === Panel) {
      return React.cloneElement(child as React.ReactElement, {
        showContent,
        index,
        isActive: accordion ? index === activeIndex : (activeIndex as number[]).includes(index),
      });
    } else {
      throw new Error("패널 컴포넌트를 넣어주세요.");
    }
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
      <Header index={index} onClick={() => showContent(index)}>
        {title}
      </Header>
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
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;

const Wrap = styled.div`
  width: 100%;
`;

const Header = styled.div<{ index: number }>`
  padding: 1rem;
  color: #000;
  background-color: #ddd;
  ${(p) => p.index === 0 && "border-top-left-radius: 4px; border-top-right-radius: 4px;"}
  cursor: pointer;
`;

const ContentWrap = styled.div<{ active: boolean; height: number }>`
  padding: 0 1rem;
  height: ${(p) => (p.active ? p.height : "0")}px;
  background-color: #fff;
  overflow: hidden;
  transition: height 0.2s ease-out;
`;

const Content = styled.p`
  margin: 1rem 0;
`;
