import React, { useEffect, useState } from "react";
import styled from "styles/styled";
import { css } from "@emotion/core";
import { Close } from "styles/Icon";
import { Button } from "styles";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN, REGISTER } from "@api/User";
import cookie from "js-cookie";

const menus: { label: string; link: string; authority?: boolean }[] = [
  { label: "Home", link: "/" },
  { label: "Edit", link: "/edit", authority: true },
  { label: "Menu", link: "#", authority: true },
  { label: "Guide", link: "/guide", authority: true },
  { label: "Setting", link: "/setting", authority: true },
];

const Header: React.FC<ILayoutType> = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [registerInput, setRegisterInput] = useState({ email: "", name: "", password: "" });
  const [authority, setAuthority] = useState<boolean>(false);

  const [LoginMutation] = useMutation(LOGIN, {
    onCompleted: (data) => {
      cookie.set("accessToken", data.login.token);
      localStorage.setItem("user", JSON.stringify({ email: data.login.email, name: data.login.name }));
      setAuthority(true);
      setLoginModal(false);
    },
  });

  const [RegisterMutation] = useMutation(REGISTER, {
    onCompleted: (data) => {
      setLoginModal(true);
      setRegisterModal(false);
    },
  });

  useEffect(() => {
    const token = cookie.get("accessToken");
    if (token) {
      setAuthority(true);
    }
  }, [authority]);

  const handleLoginModal = () => {
    setLoginModal(false);
  };

  const handleRegisterModal = () => {
    if (loginModal && !registerModal) {
      setLoginModal(false);
      setRegisterModal(true);
    } else {
      setRegisterModal(false);
    }
  };

  const changeToRegisterModal = () => {
    setLoginModal(false);
    setRegisterModal(true);
  };

  const changeToLoginModal = () => {
    setRegisterModal(false);
    setLoginModal(true);
  };

  const handleLoginInput = (event: React.ChangeEvent<{ name: string; value: string }>) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  const handleRegisterInput = (event: React.ChangeEvent<{ name: string; value: string }>) => {
    setRegisterInput({ ...registerInput, [event.target.name]: event.target.value });
  };

  const login = () => {
    LoginMutation({
      variables: { loginInput },
    });
  };

  const register = () => {
    RegisterMutation({
      variables: { registerInput },
    });
  };

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
          {menus.map((item, index) => {
            if (authority) {
              return (
                <Menu key={index} isTop={isTop} href={item.link}>
                  <MenuName>{item.label}</MenuName>
                </Menu>
              );
            } else {
              if (!item.authority) {
                return (
                  <Menu key={index} isTop={isTop} href={item.link}>
                    <MenuName>{item.label}</MenuName>
                  </Menu>
                );
              }
            }
          })}
        </Menus>
      </HeaderContentsWrap>
      {!authority && <ModalButton onClick={() => setLoginModal(true)}>버튼</ModalButton>}
      {loginModal && (
        <LoginModalContainer>
          <DarkLayer onClick={handleLoginModal} />
          <LoginModal>
            <LoginModalHeader>
              로그인
              <CloseButton onClick={handleLoginModal}>
                <Close width={20} height={20} color={"#313131"} />
              </CloseButton>
            </LoginModalHeader>
            <LoginModalBody>
              <LoginInputWrap>
                <LoginInput name={"email"} placeholder={"이메일"} onChange={handleLoginInput} />
              </LoginInputWrap>
              <LoginInputWrap>
                <LoginInput name={"password"} type={"password"} placeholder={"비밀번호"} onChange={handleLoginInput} />
              </LoginInputWrap>
              <LoginButtonWrap>
                <Button width={"100%"} height={48} variant={"danger"} onClick={login}>
                  로그인
                </Button>
              </LoginButtonWrap>
            </LoginModalBody>
            <LoginModalFooter>
              계정이 없다면? <Register onClick={changeToRegisterModal}>회원등록</Register>
            </LoginModalFooter>
          </LoginModal>
        </LoginModalContainer>
      )}
      {registerModal && (
        <LoginModalContainer>
          <DarkLayer onClick={handleRegisterModal} />
          <LoginModal>
            <LoginModalHeader>
              회원등록
              <CloseButton onClick={handleRegisterModal}>
                <Close width={20} height={20} color={"#313131"} />
              </CloseButton>
            </LoginModalHeader>
            <LoginModalBody>
              <LoginInputWrap>
                <LoginInput name={"email"} placeholder={"이메일"} onChange={handleRegisterInput} />
              </LoginInputWrap>
              <LoginInputWrap>
                <LoginInput name={"name"} placeholder={"이름"} onChange={handleRegisterInput} />
              </LoginInputWrap>
              <LoginInputWrap>
                <LoginInput name={"password"} type={"password"} placeholder={"비밀번호"} onChange={handleRegisterInput} />
              </LoginInputWrap>
              <LoginButtonWrap>
                <Button width={"100%"} height={48} variant={"danger"} onClick={register}>
                  회원등록
                </Button>
              </LoginButtonWrap>
            </LoginModalBody>
            <LoginModalFooter>
              <Register onClick={changeToLoginModal}>로그인</Register>
            </LoginModalFooter>
          </LoginModal>
        </LoginModalContainer>
      )}
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
  border-bottom: ${(p) => !p.isTop && "1px solid #eee"};
  box-shadow: ${(p) => !p.isTop && "rgba(0, 0, 0, 0.08) 0px 1px 12px"};
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

const ModalButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  opacity: 0;
  cursor: none;
`;

const LoginModalContainer = styled.div``;

const DarkLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const LoginModal = styled.div`
  position: fixed;
  top: 50%;
  left: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 80%;
  max-width: 568px;
  max-height: 100%;
  color: #000;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0 8px 28px;
  transform: translate(-50%, -50%);
  z-index: 15;
`;

const LoginModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #313131;
  border-bottom: 1px solid #e7e7e7;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 1rem;
  display: inline-flex;
  cursor: pointer;
`;

const LoginModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-bottom: 1px solid #e7e7e7;
`;

const LoginInputWrap = styled.div`
  padding: 0.5rem 0;
`;

const LoginInput = styled.input`
  margin: 0;
  padding: 1rem 1rem;
  width: 100%;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
`;

const LoginButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const LoginModalFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const Register = styled.span`
  margin-left: 0.5rem;
  font-weight: 500;
  color: #3469d3;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
