import React, { useState } from "react";
import styled from "styles/styled";
import { useQuery } from "@apollo/react-hooks";
import { GET_CATEGORIES } from "@api/Category";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  useQuery(GET_CATEGORIES, {
    fetchPolicy: "cache-first",
    onCompleted: (data) => {
      const dummy = data.getCategories.reduce((acc: ICategory[], cur: ICategoryWithChildren) => {
        cur = { ...cur, children: [] };
        if (!cur.parent) {
          acc.push(cur);
          return acc;
        } else {
          acc.map((item: ICategoryWithChildren) => {
            if (item.category === cur.parent) {
              item.children = item.children?.concat(cur);
            }
          });
          return acc;
        }
      }, []);
      setCategories(dummy);
    },
  });

  const selectedCategory = (category: string) => {
    return category === location.pathname.replace("/", "");
  };

  return (
    <Border>
      <All href={"/"}>전체글 보기</All>
      <ParentCategoryWrap>
        {categories &&
          categories.map((item: ICategoryWithChildren) => {
            if (!item.children) {
              return (
                <ParentCategory key={item.category}>
                  <Link href={`/${item.category}`} selected={selectedCategory(item.category)}>
                    {item.name}
                  </Link>
                </ParentCategory>
              );
            } else {
              return (
                <div key={item.category}>
                  <ParentCategory key={item.category}>
                    <Link href={`/${item.category}`} selected={selectedCategory(item.category)}>
                      {item.name}
                    </Link>
                  </ParentCategory>
                  <ChildCategoryWrap>
                    {item.children.map((item2) => {
                      return (
                        <ChildCategory key={item2.category}>
                          <Link href={`/${item2.category}`} selected={selectedCategory(item.category)}>
                            {item2.name}
                          </Link>
                        </ChildCategory>
                      );
                    })}
                  </ChildCategoryWrap>
                </div>
              );
            }
          })}
      </ParentCategoryWrap>
    </Border>
  );
};

export default Categories;

const Border = styled.div`
  padding: 1rem;
  width: 100%;
`;

const All = styled.a`
  display: flex;
  margin-bottom: 1rem;
  padding: 0.2rem 0;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const ParentCategoryWrap = styled.ul`
  list-style: none;
`;

const ParentCategory = styled.li`
  padding: 0.2rem 0;
  font-size: 0.875rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const ChildCategoryWrap = styled.ul`
  list-style: none;
`;

const ChildCategory = styled.li`
  padding: 0.2rem 0 0.2rem 1rem;
  font-size: 0.875rem;

  :hover {
    text-decoration: underline;
  }
`;

const Link = styled.a<{ selected: boolean }>`
  display: flex;
  ${(props) => props.selected && "font-weight: bold"}
`;
