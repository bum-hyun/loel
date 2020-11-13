import React, { useEffect, useState } from "react";
import styled from "styles/styled";
import { css } from "@emotion/core";

const menus: { label: string; link: string }[] = [
  { label: "Home", link: "/" },
  { label: "Guide", link: "/guide" },
  { label: "Menu", link: "#" },
  { label: "Menu", link: "#" },
  { label: "Menu", link: "#" },
];

const Header: React.FC = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    function isTopZero() {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }

    window.addEventListener("scroll", isTopZero);
    window.addEventListener("load", isTopZero);
    return () => {
      window.removeEventListener("scroll", isTopZero);
      window.removeEventListener("load", isTopZero);
    };
  }, []);

  return (
    <HeaderContainer isTop={isTop}>
      <HeaderContentsWrap>
        <Logo />
        <Center />
        <Menus>
          {menus.map((item, index) => (
            <Menu key={index} isTop={isTop} href={item.link}>
              <MenuName>{item.label}</MenuName>
            </Menu>
          ))}
        </Menus>
      </HeaderContentsWrap>
    </HeaderContainer>
  );
};

export default Header;

const WhiteBackground = css`
  background-color: #fff;
`;

const HeaderContainer = styled.header<IHeader>`
  position: ${(p) => (p.isTop ? "absolute" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  ${(p) => !p.isTop && WhiteBackground}
  color: ${(p) => (p.isTop ? "#fff" : "#000")};
  z-index: 100;

  ::before {
    background-image: ${(p) => (p.isTop ? "linear-gradient(to bottom, #000, rgba(0, 0, 0, 0))" : "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0))")};
    content: "";
    height: 140%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 150ms opacity ease;
    width: 100%;
    z-index: 0;
    opacity: ${(p) => (p.isTop ? "0.4" : "0")};
  }
`;

const HeaderContentsWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  font-weight: 400;
`;

const Logo = styled.div`
  flex: 1 0 140px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;

const Center = styled.div`
  flex: 1 0 200px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Menus = styled.nav`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;

const Menu = styled.a<IHeader>`
  position: relative;
  padding: 12px;
  font-size: 1rem;
  user-select: none;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: -3px;
    bottom: 0;
    left: -3px;
    border-radius: 22px;
  }

  :hover::before {
    ${(p) => (p.isTop ? "background: rgba(255, 255, 255, 0.15)" : "background: rgb(247, 247, 247)")};
  }
`;

const MenuName = styled.div`
  position: relative;
`;