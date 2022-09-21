module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+ego":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ layouts_DefaultLayout; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ layouts_EmptyLayout; });

// UNUSED EXPORTS: Header

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/styles/styled.ts
var styled = __webpack_require__("DwXi");

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// CONCATENATED MODULE: ./src/styles/Icon/Close.tsx




const Close = ({
  width,
  height,
  color
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      id: "info"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      id: "icons",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: color ? color : "#000",
        d: "M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z",
        id: "exit"
      })
    })]
  });
};

/* harmony default export */ var Icon_Close = (Close);
// EXTERNAL MODULE: ./src/styles/Icon/EmptyBox.tsx
var EmptyBox = __webpack_require__("BiWG");

// CONCATENATED MODULE: ./src/styles/Icon/index.ts



// EXTERNAL MODULE: ./src/styles/index.ts + 4 modules
var styles = __webpack_require__("bFe0");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./api/User.ts

const LOGIN = external_apollo_boost_["gql"]`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      name
      email
      token
    }
  }
`;
const REGISTER = external_apollo_boost_["gql"]`
  mutation register($registerInput: RegisterInput!) {
    register(input: $registerInput) {
      name
      email
    }
  }
`;
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/layouts/Header.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const menus = [{
  label: "Home",
  link: "/"
}, {
  label: "Edit",
  link: "/edit",
  authority: true
}, {
  label: "Menu",
  link: "#",
  authority: true
}, {
  label: "Guide",
  link: "/guide",
  authority: true
}, {
  label: "Setting",
  link: "/setting",
  authority: true
}];

const Header = ({
  authority,
  authenticated
}) => {
  const {
    0: isTop,
    1: setIsTop
  } = Object(external_react_["useState"])(true);
  const {
    0: loginModal,
    1: setLoginModal
  } = Object(external_react_["useState"])(false);
  const {
    0: registerModal,
    1: setRegisterModal
  } = Object(external_react_["useState"])(false);
  const {
    0: loginInput,
    1: setLoginInput
  } = Object(external_react_["useState"])({
    email: "",
    password: ""
  });
  const {
    0: registerInput,
    1: setRegisterInput
  } = Object(external_react_["useState"])({
    email: "",
    name: "",
    password: ""
  });
  const [LoginMutation] = Object(react_hooks_["useMutation"])(LOGIN, {
    onCompleted: data => {
      external_js_cookie_default.a.set("accessToken", data.login.token);
      localStorage.setItem("user", JSON.stringify({
        email: data.login.email,
        name: data.login.name
      }));
      authenticated(true);
      setLoginModal(false);
    }
  });
  const [RegisterMutation] = Object(react_hooks_["useMutation"])(REGISTER, {
    onCompleted: () => {
      setLoginModal(true);
      setRegisterModal(false);
    }
  });
  Object(external_react_["useEffect"])(() => {
    const token = external_js_cookie_default.a.get("accessToken");

    if (token) {
      authenticated(true);
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

  const handleLoginInput = event => {
    setLoginInput(_objectSpread(_objectSpread({}, loginInput), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleRegisterInput = event => {
    setRegisterInput(_objectSpread(_objectSpread({}, registerInput), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const login = () => {
    LoginMutation({
      variables: {
        loginInput
      }
    });
  };

  const enterLogin = event => {
    if (event.key === "Enter") {
      login();
    }
  };

  const register = () => {
    RegisterMutation({
      variables: {
        registerInput
      }
    });
  };

  Object(external_react_["useEffect"])(() => {
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
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderContainer, {
    isTop: isTop,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderContentsWrap, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Center, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menus, {
        children: menus.map((item, index) => {
          if (authority) {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu, {
              isTop: isTop,
              href: item.link,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuName, {
                children: item.label
              })
            }, index);
          } else {
            if (!item.authority) {
              return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu, {
                isTop: isTop,
                href: item.link,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuName, {
                  children: item.label
                })
              }, index);
            }
          }
        })
      })]
    }), !authority && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalButton, {
      onClick: () => setLoginModal(true),
      children: "\uBC84\uD2BC"
    }), loginModal && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DarkLayer, {
        onClick: handleLoginModal
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModal, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalHeader, {
          children: ["\uB85C\uADF8\uC778", /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseButton, {
            onClick: handleLoginModal,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_Close, {
              width: 20,
              height: 20,
              color: "#313131"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalBody, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInputWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInput, {
              name: "email",
              placeholder: "이메일",
              onChange: handleLoginInput
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInputWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInput, {
              name: "password",
              type: "password",
              placeholder: "비밀번호",
              onChange: handleLoginInput,
              onKeyPress: enterLogin
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginButtonWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles["a" /* Button */], {
              width: "100%",
              height: 48,
              variant: "danger",
              onClick: login,
              children: "\uB85C\uADF8\uC778"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalFooter, {
          children: ["\uACC4\uC815\uC774 \uC5C6\uB2E4\uBA74? ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Register, {
            onClick: changeToRegisterModal,
            children: "\uD68C\uC6D0\uB4F1\uB85D"
          })]
        })]
      })]
    }), registerModal && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DarkLayer, {
        onClick: handleRegisterModal
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModal, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalHeader, {
          children: ["\uD68C\uC6D0\uB4F1\uB85D", /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseButton, {
            onClick: handleRegisterModal,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_Close, {
              width: 20,
              height: 20,
              color: "#313131"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LoginModalBody, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInputWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInput, {
              name: "email",
              placeholder: "이메일",
              onChange: handleRegisterInput
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInputWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInput, {
              name: "name",
              placeholder: "이름",
              onChange: handleRegisterInput
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInputWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginInput, {
              name: "password",
              type: "password",
              placeholder: "비밀번호",
              onChange: handleRegisterInput
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginButtonWrap, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles["a" /* Button */], {
              width: "100%",
              height: 48,
              variant: "danger",
              onClick: register,
              children: "\uD68C\uC6D0\uB4F1\uB85D"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginModalFooter, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Register, {
            onClick: changeToLoginModal,
            children: "\uB85C\uADF8\uC778"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var layouts_Header = (Header);
const WhiteBackground = core_["css"]`
  background-color: #fff;
`;
const HeaderContainer = styled["a" /* default */].header`
  position: ${p => p.isTop ? "absolute" : "fixed"};
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  ${p => !p.isTop && WhiteBackground}
  color: ${p => p.isTop ? "#fff" : "#000"};
  border-bottom: ${p => !p.isTop && "1px solid #eee"};
  box-shadow: ${p => !p.isTop && "rgba(0, 0, 0, 0.08) 0px 1px 12px"};
  z-index: 100;

  ::before {
    background-image: ${p => p.isTop ? "linear-gradient(to bottom, #000, rgba(0, 0, 0, 0))" : "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0))"};
    content: "";
    height: 140%;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 0;
    max-width: 1440px;
    width: 100%;
    z-index: 0;
    transform: translateX(-50%);
    transition: 150ms opacity ease;
    opacity: ${p => p.isTop ? "0.4" : "0"};
  }
`;
const HeaderContentsWrap = styled["a" /* default */].div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  font-weight: 400;
`;
const Logo = styled["a" /* default */].div`
  flex: 1 0 140px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;
const Center = styled["a" /* default */].div`
  flex: 1 0 200px;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const Menus = styled["a" /* default */].nav`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;
const Menu = styled["a" /* default */].a`
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
    ${p => p.isTop ? "background: rgba(255, 255, 255, 0.15)" : "background: rgb(247, 247, 247)"};
  }
`;
const MenuName = styled["a" /* default */].div`
  position: relative;
`;
const ModalButton = styled["a" /* default */].button`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  opacity: 0;
  cursor: none;
`;
const LoginModalContainer = styled["a" /* default */].div``;
const DarkLayer = styled["a" /* default */].div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;
const LoginModal = styled["a" /* default */].div`
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
const LoginModalHeader = styled["a" /* default */].div`
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
const CloseButton = styled["a" /* default */].div`
  position: absolute;
  right: 1rem;
  display: inline-flex;
  cursor: pointer;
`;
const LoginModalBody = styled["a" /* default */].div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-bottom: 1px solid #e7e7e7;
`;
const LoginInputWrap = styled["a" /* default */].div`
  padding: 0.5rem 0;
`;
const LoginInput = styled["a" /* default */].input`
  margin: 0;
  padding: 1rem 1rem;
  width: 100%;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
`;
const LoginButtonWrap = styled["a" /* default */].div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const LoginModalFooter = styled["a" /* default */].div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
`;
const Register = styled["a" /* default */].span`
  margin-left: 0.5rem;
  font-weight: 500;
  color: #3469d3;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
// EXTERNAL MODULE: ./api/Category.ts
var Category = __webpack_require__("XHXx");

// CONCATENATED MODULE: ./src/components/Categories.tsx



function Categories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Categories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Categories_ownKeys(Object(source), true).forEach(function (key) { Categories_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Categories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Categories_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Categories = () => {
  const {
    0: categories,
    1: setCategories
  } = Object(external_react_["useState"])(null);
  Object(react_hooks_["useQuery"])(Category["a" /* GET_CATEGORIES */], {
    fetchPolicy: "cache-first",
    onCompleted: data => {
      const dummy = data.getCategories.reduce((acc, cur) => {
        cur = Categories_objectSpread(Categories_objectSpread({}, cur), {}, {
          children: []
        });

        if (!cur.parent) {
          acc.push(cur);
          return acc;
        } else {
          acc.map(item => {
            if (item.category === cur.parent) {
              var _item$children;

              item.children = (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.concat(cur);
            }
          });
          return acc;
        }
      }, []);
      setCategories(dummy);
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Border, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(All, {
      href: "/",
      children: "\uC804\uCCB4\uAE00 \uBCF4\uAE30"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParentCategoryWrap, {
      children: categories && categories.map(item => {
        if (!item.children) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParentCategory, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
              href: `/${item.link}`,
              children: item.category
            })
          }, item.category);
        } else {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ParentCategory, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                href: `/${item.link}`,
                children: item.category
              })
            }, item.category), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChildCategoryWrap, {
              children: item.children.map(item2 => {
                return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChildCategory, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                    href: `/${item2.link}`,
                    children: item2.category
                  })
                }, item2.category);
              })
            })]
          }, item.category);
        }
      })
    })]
  });
};

/* harmony default export */ var components_Categories = (Categories);
const Border = styled["a" /* default */].div`
  padding: 3rem;
  width: 100%;
`;
const All = styled["a" /* default */].a`
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
const ParentCategoryWrap = styled["a" /* default */].ul`
  list-style: none;
`;
const ParentCategory = styled["a" /* default */].li`
  padding: 0.2rem 0;
  font-size: 0.875rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
const ChildCategoryWrap = styled["a" /* default */].ul`
  list-style: none;
`;
const ChildCategory = styled["a" /* default */].li`
  padding: 0.2rem 0 0.2rem 1rem;
  font-size: 0.875rem;

  :hover {
    text-decoration: underline;
  }
`;
const Link = styled["a" /* default */].a`
  display: flex;
`;
// CONCATENATED MODULE: ./src/components/CheckList.tsx





const CheckList = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CheckList_Border, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
      children: "\uCD94\uD6C4 \uAC1C\uBC1C \uC0AC\uD56D"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "\uCE74\uD14C\uACE0\uB9AC \uD398\uC774\uC9C0 \uC778\uD53C\uB2C8\uD2B8 \uC2A4\uD06C\uB864"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "\uBC29\uBB38\uC790 \uC218, \uAE00 \uC870\uD68C \uC218 \uAE30\uB85D"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "\uD5E4\uB354 \uC190\uBCF4\uAE30"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "\uB313\uAE00 \uC2DC\uC2A4\uD15C \uAD6C\uD604"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "\uC778\uC99D \uB354 \uB2E4\uB4EC\uAE30"
    })]
  });
};

/* harmony default export */ var components_CheckList = (CheckList);
const CheckList_Border = styled["a" /* default */].div`
  padding: 3rem;
  width: 100%;

  p + p {
    margin-top: 0.675rem;
  }
`;
const Title = styled["a" /* default */].div`
  font-weight: bold;
  margin-bottom: 1rem;
`;
// CONCATENATED MODULE: ./src/layouts/DefaultLayout.tsx




function DefaultLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DefaultLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DefaultLayout_ownKeys(Object(source), true).forEach(function (key) { DefaultLayout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DefaultLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DefaultLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const DefaultLayout = Component => props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(layouts_Header, {
      authority: props.authority,
      authenticated: props.authenticated
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Background, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrap, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LeftWrap, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, DefaultLayout_objectSpread({}, props))
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(RightWrap, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Categories, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CheckList, {})]
        })]
      })]
    })]
  });
};

/* harmony default export */ var layouts_DefaultLayout = (DefaultLayout);
const Container = styled["a" /* default */].div`
  margin: 0 auto;
  max-width: 1440px;
`;
const Background = styled["a" /* default */].div`
  width: 100%;
  padding-top: 35%;
  background-image: url("/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
const Wrap = styled["a" /* default */].section`
  display: flex;
  padding: 1rem;
`;
const LeftWrap = styled["a" /* default */].div`
  flex: 1;
  width: 100%;
`;
const RightWrap = styled["a" /* default */].div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    padding-left: 1rem;

    > div + div {
      margin-top: 2rem;
    }
  }
`;
// CONCATENATED MODULE: ./src/layouts/EmptyLayout.tsx




function EmptyLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EmptyLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EmptyLayout_ownKeys(Object(source), true).forEach(function (key) { EmptyLayout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EmptyLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EmptyLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const EmptyLayout = Component => props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(layouts_Header, {
      authority: props.authority,
      authenticated: props.authenticated
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(EmptyLayout_Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(EmptyLayout_Background, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(EmptyLayout_Wrap, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, EmptyLayout_objectSpread({}, props))
      })]
    })]
  });
};

/* harmony default export */ var layouts_EmptyLayout = (EmptyLayout);
const EmptyLayout_Container = styled["a" /* default */].div`
  margin: 0 auto;
  max-width: 1440px;
`;
const EmptyLayout_Background = styled["a" /* default */].div`
  width: 100%;
  padding-top: 35%;
  background-image: url("/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
const EmptyLayout_Wrap = styled["a" /* default */].section`
  display: flex;
  padding: 1rem;
`;
// CONCATENATED MODULE: ./src/layouts/index.tsx




/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("M2GZ");


/***/ }),

/***/ "9LAt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return thumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decodeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return decodeHTMLForHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateDisplay; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const thumbnail = images => {
  return images[0].replace(/\/original\//, "/thumb/");
};
const decodeHTML = item => {
  const content = item.html.replace(/(<([^>]+)>)/gi, "");

  if (item.image && item.image.length > 0) {
    return content.substring(0, 150);
  } else {
    return content.substring(0, 500);
  }
};
const decodeHTMLForHeader = html => {
  const content = html.replace(/(<([^>]+)>)/gi, "");
  return content.substring(0, 150);
};
const dateDisplay = date => {
  const nowDate = new Date();
  const compareDate = new Date(date);
  const dayGap = nowDate.getDate() - compareDate.getDate();
  return dayGap > 7 ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY년 MM월 DD일 hh시 mm분 ss초") : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).fromNow();
};

/***/ }),

/***/ "9RMS":
/***/ (function(module, exports) {



/***/ }),

/***/ "BiWG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const EmptyBox = ({
  width,
  height,
  color
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: width,
    height: height,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m129.27 142.19-85.32-46.82a2.31 2.31 0 0 0 -3.43 2c-.41 18-2 93.55.09 96 3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16c3.66-2.11.86-78.2.15-96.08a2.32 2.32 0 0 0 -3.43-1.93z",
      fill: "#191919"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m129.27 252.5c-2.47 0-4.81 0-48.44-25.2-42.92-24.79-45.39-27.68-46.32-28.77-2.38-2.8-3.28-3.85-2.89-47.45.19-21.47.69-44.87.9-53.93a10.31 10.31 0 0 1 15.28-8.8l81.48 44.71 81.54-44.74a10.32 10.32 0 0 1 15.27 8.68c.36 9.09 1.23 32.57 1.57 54.15.19 12.24.17 22 0 29.11-.38 12.16-1 17.37-5.66 20.07-.67.39-3.4 2-7.5 4.47-80.02 47.7-81.87 47.7-85.23 47.7zm-81.27-63.59c11.93 8.12 68.16 40.61 81.26 47 8-4 33.89-19.1 77-44.86l4.92-2.94c1-9.16.77-40.76-.71-81.3l-77.35 42.39a8 8 0 0 1 -7.7 0l-77.11-42.31c-.88 41.74-1.01 73-.31 82.02z",
      fill: "#191919"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m40.6 91.49 88.67-47.29 88.67 47.29-88.67 48.65z",
      fill: "#fff"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m130.52 41.08v95.94l-88.67-48.66z",
      fill: "#e6e6e6"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m129.27 142.19-88.67-48.66s-2.38 97 0 99.81c3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16 0-99.81 0-99.81z",
      fill: color
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m129.27 142.19c-1 2.06-2 102.81 0 102.31 6.35-1.56 85.32-46.93 89-51.75 1.58-2.09 2.39-97.93-.31-99.22s-87.66 46.6-88.69 48.66z",
      fill: color
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m217.42 88c4.59-2.53 29.46-16.33 28.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-24.48 14.1-28.13 16.5-3.76-2.61-30.82-21.24-33.9-19.52-3.31 1.8-83.39 46.48-86.26 48.14-2.64 1.57 26.79 16.36 31.34 18.64-4.25 2.15-29.69 14.59-28.12 15.49s83.82 49.44 88.22 49.92c2.83.31 25.8-14.24 28.82-16.24 3.38 2.24 31 20.48 33.76 18.92l87.13-50c1.61-.88-25.92-15.44-31.16-18.16zm-89.73 48.86-87.75-48.81 87.59-46.72 88.31 46.58z",
      fill: "#191919"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m161.14 164.31c-4 0-9.47-2.68-20.47-9.33-4.79-2.9-9.64-6-13-8.2-2.87 1.8-6.64 4.14-10.33 6.33-13.41 7.89-16.34 8.65-19.34 8.33-2.56-.28-5.74-.62-89.37-49.78l-2-1.17a8.12 8.12 0 0 1 -4.06-7.29c.17-5.52 4.61-7.87 14.34-13 1.38-.73 2.82-1.48 4.25-2.21l-3.58-1.99c-14.26-7.76-18.15-10.64-18.31-16.06a8.3 8.3 0 0 1 4.17-7.44c2.2-1.27 46.78-26.15 83.79-46.8l2.57-1.43c5.16-2.88 11-.32 24.84 8.34 4.81 3 9.61 6.2 13.06 8.54 24.9-16.2 26.79-15.62 30.37-14.52 3.42 1 90.8 46.91 91.51 47.33a8.18 8.18 0 0 1 4.04 7.04c-.05 5.43-3.52 7.44-16.41 14.93l-3.21 1.86 4.77 2.63c14.33 8 17.72 10.07 17.82 15.51a8.13 8.13 0 0 1 -4.07 7.2l-79.15 45.38-8 4.58a8.31 8.31 0 0 1 -4.23 1.22zm-18.25-26.76c7.55 4.74 14 8.49 17.37 10.08l5.21-3 67.9-38.93c-4.31-2.43-9.94-5.51-16.7-9.1zm-116.71-34.15c44.25 25.93 66.18 38.21 72.94 41.54 2.91-1.42 8.15-4.46 13.18-7.51l-73.1-40.63c-5.51 2.75-9.76 4.91-13.02 6.6zm30.49-15.2 71 39.48 71.33-39.58-71.48-37.7zm-34.45-17.88c4.58 2.57 10.55 5.74 17 9l73.28-39.08a184 184 0 0 0 -17.58-10.52c-40.63 22.67-61.84 34.52-72.71 40.6zm120.7-29.91 73.68 38.86c5-2.78 9.58-5.39 13.34-7.59-20.94-11-63.28-33-74.59-38.71-2.62 1.41-7.08 4.03-12.43 7.44z",
      fill: "#191919"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m218.42 88c .08-1.3 28.46-16.33 27.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-27.54 16.43-28.13 16.5s-30.83-21.28-33.9-19.56c-3.31 1.84-83.39 46.52-86.26 48.18-2.64 1.57 31.27 17.8 31.34 18.64s-29.69 14.59-28.13 15.49 83.83 49.44 88.23 49.92c2.83.31 27.92-16.24 28.82-16.24s31 20.48 33.76 18.92l87.13-50c1.61-.88-30.24-16.89-30.16-18.16zm-90.73 48.86c-1-.08-87.72-48.14-87.74-48.78s87-46.63 87.59-46.72 88.32 45.33 88.31 46.58-87.15 48.97-88.16 48.89z",
      fill: "#fff"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m72.15 187.68-.44-35.68c0-2.23 2.05-2.7 3.71-.82l25.44 28.82c1.59 1.81 1.62 4.47.06 4.89l-25 6.81c-1.63.49-3.74-1.79-3.77-4.02z",
      fill: "#fff"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m128.67 142.67c-.67 17.17-1 77.67.61 101.83",
      fill: "#d32920"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "m129.27 248.5a4 4 0 0 1 -4-3.73c-1.64-24.68-1.27-85.22-.61-102.25a4 4 0 1 1 8 .31c-.64 16.44-1 77.43.6 101.41a4 4 0 0 1 -3.73 4.26z",
      fill: "#191919"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (EmptyBox);

/***/ }),

/***/ "DwXi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export theme */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  light: {
    COLOR: {
      primary: "#333333"
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "M2GZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DwXi");
/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+ego");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("p77/");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9RMS");
/* harmony import */ var _toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bFe0");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("w2n2");
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("qHiR");
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9LAt");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Xz5C");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const Post = ({
  authority,
  post
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: "Loading..."
    });
  }

  const id = post.id.toString();
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    password: "",
    contents: "",
    class: 0
  });
  Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_api_Post__WEBPACK_IMPORTED_MODULE_10__[/* GET_COMMENTS */ "e"], {
    fetchPolicy: "cache-first",
    variables: {
      postId: id
    },
    onCompleted: data => {
      setComments(data.getComments);
    }
  });
  const [RemovePostMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_api_Post__WEBPACK_IMPORTED_MODULE_10__[/* REMOVE_POST */ "h"], {
    refetchQueries: [{
      query: _api_Post__WEBPACK_IMPORTED_MODULE_10__[/* GET_ALL_POSTS */ "c"]
    }],
    onCompleted: () => {
      router.push(`/`);
    }
  });

  const pushEditPage = () => {
    router.push(`/edit?id=${id}`);
  };

  const remove = async () => {
    await RemovePostMutation({
      variables: {
        id: id
      }
    });
  };

  const autoIncreaseHeight = event => {
    const {
      target
    } = event;
    target.style.height = `${target.scrollHeight + 2}px`;
  };

  const handleCommentInput = event => {
    const {
      name,
      value
    } = event.target;
    setComment(_objectSpread(_objectSpread({}, comment), {}, {
      [name]: value
    }));
  };

  const [CreateCommentMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_api_Post__WEBPACK_IMPORTED_MODULE_10__[/* CREATE_COMMENT */ "a"], {
    refetchQueries: [{
      query: _api_Post__WEBPACK_IMPORTED_MODULE_10__[/* GET_COMMENTS */ "e"],
      variables: {
        postId: id
      }
    }],
    awaitRefetchQueries: true,
    update: (store, {
      data: {
        createComment
      }
    }) => {
      const newComments = comments ? [createComment, ...comments] : null;
      setComments(newComments);
    },
    onCompleted: () => {
      setComment({
        name: "",
        password: "",
        contents: "",
        class: 0
      });
    }
  });

  const registerComment = async () => {
    const {
      name,
      password,
      contents
    } = comment;

    if (!name) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!contents) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    await CreateCommentMutation({
      variables: {
        comment,
        postId: id,
        email: user && user.email ? user.email : ""
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "canonical",
        href: `https://www.loelblog.com/post/${id}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "title",
        content: `Loel's Blog ${post ? ` - ` + post.title : ""}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "description",
        content: Object(_utils_common__WEBPACK_IMPORTED_MODULE_12__[/* decodeHTMLForHeader */ "c"])(post ? post.html : "음식과 여행을 좋아하는 개발자의 블로그 입니다.")
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:title",
        content: `Loel's Blog ${post ? ` - ` + post.title : ""}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:type",
        content: "article"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:url",
        content: `https://www.loelblog.com/post/${id}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:description",
        content: Object(_utils_common__WEBPACK_IMPORTED_MODULE_12__[/* decodeHTMLForHeader */ "c"])(post ? post.html : "음식과 여행을 좋아하는 개발자의 블로그 입니다.")
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:image",
        content: "https://images.loelblog.com/thumb/background.jpg"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: `Loel's Blog ${post ? ` - ` + post.title : ""}`
      })]
    }), post && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(PostWrap, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(HeadWrap, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Title, {
            children: post.title
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(InfoWrap, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Author, {
              children: post.email
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CreatedAt, {
              children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_12__[/* dateDisplay */ "a"])(post.updatedAt)
            }), authority && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(EditWrap, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styles__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
                onClick: pushEditPage,
                variant: "warning",
                children: "\uC218\uC815"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styles__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
                onClick: remove,
                variant: "danger",
                children: "\uC0AD\uC81C"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ContentWrap, {
          className: "tui-editor-contents",
          dangerouslySetInnerHTML: {
            __html: post.html2 ? post.html2 : post.html
          }
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(CommentRegisterWrap, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(TotalComment, {
          children: ["\uB313\uAE00 ", comments ? comments.length : 0]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(CommentWriterWrap, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CommentWriterInput, {
              name: "name",
              maxLength: 40,
              value: comment.name,
              onChange: handleCommentInput,
              placeholder: "닉네임"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CommentWriterInput, {
              name: "password",
              maxLength: 40,
              value: comment.password,
              onChange: handleCommentInput,
              placeholder: "비밀번호"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(InputComment, {
            name: "contents",
            value: comment.contents,
            onChange: handleCommentInput,
            onInput: autoIncreaseHeight,
            placeholder: "댓글을 남겨주세요."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CommentRegisterButton, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styles__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
              variant: "success",
              width: 120,
              height: 40,
              onClick: registerComment,
              children: "\uB313\uAE00 \uC791\uC131"
            })
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CommentsWrap, {
        children: comments && comments.length > 0 && comments.map(item => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(CommentWrap, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(CommentInfoWrap, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CommentWriterName, {
                children: item.name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CommentCreatedAt, {
                children: Object(_utils_common__WEBPACK_IMPORTED_MODULE_12__[/* dateDisplay */ "a"])(item.createdAt)
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Comment, {
              children: item.contents
            })]
          }, item.id);
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(layouts__WEBPACK_IMPORTED_MODULE_3__[/* DefaultLayout */ "a"])(Post));
async function getStaticPaths() {
  const {
    data
  } = await _utils_service__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].get("/post");
  const paths = !data ? [] : data.map(item => ({
    params: {
      id: item.id.toString()
    }
  }));
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  const {
    data
  } = await _utils_service__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].get(`/post/${params.id}`);
  return {
    props: {
      post: data
    },
    revalidate: 1
  };
}
const Border = _emotion_core__WEBPACK_IMPORTED_MODULE_13__["css"]`
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;
const PostWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
`;
const HeadWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;
const Title = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].h1`
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 800;
  color: #313131;
  word-break: keep-all;
  margin-bottom: 2rem;
`;
const InfoWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  display: flex;
  font-size: 1rem;
`;
const Author = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].span`
  margin-right: 10px;
  font-weight: 600;
`;
const CreatedAt = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].span``;
const ContentWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].article`
  font-size: 1rem;

  img {
    display: block;
    max-width: 768px;
  }
`;
const EditWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  margin-left: auto;

  button + button {
    margin-left: 0.5rem;
  }
`;
const CommentRegisterWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  padding-bottom: 2rem;
`;
const TotalComment = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  margin: 0.5rem 0.5rem 1rem;
  font-weight: 500;
`;
const InputComment = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].textarea`
  margin-bottom: 1rem;
  padding: 0.625rem;
  width: 100%;
  min-height: 5rem;
  font-size: 1rem;
  line-height: 1.75;
  ${Border}
  resize: none;
`;
const CommentRegisterButton = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  display: flex;
  justify-content: flex-end;
`;
const CommentsWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  margin: 1.5rem 0 3rem;
`;
const CommentWriterWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  margin-bottom: 1rem;
`;
const CommentWriterInput = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].input`
  margin: 0;
  padding: 2px 10px;
  height: 38px;
  font-size: 1rem;
  color: #4c4c4c;
  line-height: 1.2;
  ${Border}

  + input {
    margin-left: 1rem;
  }
`;
const CommentWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #efefef;
`;
const CommentInfoWrap = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
const CommentWriterName = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  font-weight: 600;
  margin-bottom: 5px;
`;
const CommentCreatedAt = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  font-size: 0.875rem;
  color: #8a8a8a;
`;
const Comment = styles_styled__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].div`
  font-size: 1.2rem;
  line-height: 1.5;
`;

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "XHXx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CATEGORIES; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const GET_CATEGORIES = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getCategories {
    getCategories {
      category
      link
      order
      parent
      isUse
    }
  }
`;

/***/ }),

/***/ "Xz5C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: false ? undefined : "https://api.loelblog.com",
  timeout: 100000
});
service.interceptors.request.use(config => {
  return config;
}, error => {
  return error;
});
service.interceptors.response.use(response => {
  return response;
}, error => {
  return error;
});
/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "bFe0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Reset; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ styles_Button; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ styles_Card; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ styles_Collapse; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Panel; });

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// CONCATENATED MODULE: ./src/styles/Reset.ts

const FONT_PRIMARY = core_["css"]`
  font-family: "Noto Sans KR", "Noto Sans", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", "dotum", Helvetica, Arial, Verdana, Tahoma, sans-serif;
`;
const FONT_SECONDARY = core_["css"]`
  font-family: "Roboto", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", "dotum", Helvetica, Arial, Verdana, Tahoma, sans-serif;
`;

/* harmony default export */ var Reset = (core_["css"]`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    color: #555;
    ${FONT_PRIMARY}
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  textarea,
  blockquote,
  th,
  td,
  p,
  button,
  span {
    text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  fieldset,
  img,
  abbr,
  acronym {
    border: 0 none;
  }

  img {
    vertical-align: top;
  }

  legend {
    *margin-left: -7px;
  }

  legend.hidden {
    position: absolute;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    text-indent: -10000px;
  }

  input:focus,
  a:focus,
  button:focus {
    /* outline: #000 dotted 1px !important; outline-offset: -1px;  */
    outline: 0 none;
  }

  textarea:focus {
    /* outline: none !important; */
  }

  a {
    font-weight: 500;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  a:focus {
    transition: outline 0.2s;
  }

  a:focus,
  a:hover {
    text-decoration: none;
  }

  button {
    position: relative;
    border: 0 none;
    background: none;
  }

  /* button span,
  button:active span,
  button:focus span,
  button:active img,
  button:focus img {
    position: relative;
    top: 0;
    left: 0;
  } */

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  label,
  button,
  input,
  select,
  textarea {
    color: #5b5b5b;
    line-height: 1.2;
    font-size: inherit;
    vertical-align: middle;
    ${FONT_PRIMARY};
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    overflow: visible;
    appearance: button;
  }

  select {
    border-radius: 0;
  }

  textarea {
    overflow: auto;
    resize: none;
  }

  textarea[readonly="readonly"]:focus {
    border-color: #bfbfbf;
  }

  input[type="checkbox"],
  input[type="radio"] {
    width: 13px;
    height: 13px;
    border-radius: 0;
    cursor: pointer;
  }

  input[type="search"] {
    appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #a1a1a1;
    opacity: 1;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a1a1a1;
    opacity: 1;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a1a1a1;
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a1a1a1;
  }

  :-ms-textarea-placeholder {
    /* Internet Explorer 10-11 */
    color: #a1a1a1;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  label {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  label:active {
    appearance: none;
  }

  label:focus {
    outline: none;
  }

  /* html5 태그 */

  header,
  footer,
  article,
  section,
  aside,
  details,
  figure,
  figcaption,
  nav,
  hgroup {
    display: block;
    margin: 0;
    padding: 0;
  }

  audio[controls],
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  svg {
    fill: currentColor;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0;
  }

  .tui-editor-contents pre,
  .tui-editor-contents code,
  .tui-md-code,
  .tui-md-code-block {
    font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .tui-editor-contents p {
    margin: 1rem 0;
  }

  .tui-editor-contents blockquote p,
  .tui-editor-contents blockquote ul,
  .tui-editor-contents blockquote ol {
    color: #222;
  }

  .tui-editor-contents blockquote {
    padding: 1rem;
    background: #f1f1f1;
    border-left: 4px solid #dc0000;
  }

  .tui-editor-contents pre {
    margin: 16px 0 8px;
    font-size: 14px;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: inherit;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #fbfbfb;
    border-radius: 4px;
  }
`);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/styles/styled.ts
var styled = __webpack_require__("DwXi");

// CONCATENATED MODULE: ./src/styles/Button/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    width,
    height,
    size,
    variant,
    shape,
    disabled,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["width", "height", "size", "variant", "shape", "disabled", "children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledButton, _objectSpread(_objectSpread({
    width: width ? width : "",
    height: height ? height : "",
    variant: variant,
    size: size,
    shape: shape,
    disabled: disabled
  }, rest), {}, {
    children: children
  }));
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  shape: "default",
  disabled: false
};
/* harmony default export */ var styles_Button = (Button);
const Button_variant = {
  primary: core_["css"]`
    background: #538cff;
    color: white;
  `,
  secondary: core_["css"]`
    background: #9ea9af;
    color: #fff;
  `,
  success: core_["css"]`
    background: #64d849;
    color: #fff;
  `,
  danger: core_["css"]`
    background: #f86b51;
    color: #fff;
  `,
  warning: core_["css"]`
    background: #f4c22b;
    color: #fff;
  `,
  info: core_["css"]`
    background: #09c3c8;
    color: #fff;
  `,
  dark: core_["css"]`
    background: #4a5256;
    color: #fff;
  `
};
const Button_shape = {
  default: core_["css"]`
    border-radius: 4px;
  `,
  square: core_["css"]`
    border-radius: 0;
  `,
  circle: core_["css"]`
    border-radius: 20px;
  `
};
const Button_size = {
  small: core_["css"]`
    padding: 0 14px;
    height: 28px;
    font-size: 12px;
  `,
  medium: core_["css"]`
    padding: 0 16px;
    height: 34px;
    font-size: 16px;
  `,
  big: core_["css"]`
    padding: 0 24px;
    height: 40px;
    font-size: 18px;
  `
};
const StyledButton = styled["a" /* default */].button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  ${p => p.width ? typeof p.width === "number" ? `width: ${p.width}px !important;` : `width: ${p.width} !important;` : ""}
  ${p => p.height ? typeof p.height === "number" ? `height: ${p.height}px !important;` : `height: ${p.height} !important;` : ""}
  border: none;
  cursor: pointer;
  outline: none;
  transition: opacity ease-in-out 0.3s;

  &:hover:enabled {
    opacity: 0.7;
  }

  &:active:enabled {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${p => {
  if (p.variant) {
    return Button_variant[p.variant];
  } else {
    return Button_variant.primary;
  }
}}

  ${p => {
  if (p.size) {
    return Button_size[p.size];
  } else {
    return Button_size.medium;
  }
}}

  ${p => {
  if (p.shape) {
    return Button_shape[p.shape];
  } else {
    return Button_shape.default;
  }
}}
`;
// CONCATENATED MODULE: ./src/styles/Card/index.tsx






const Card = ({
  width,
  title,
  onClick,
  thumbnail,
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Outer, {
    className: "card",
    onClick: onClick,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrap, {
      width: width,
      children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader, {
        children: title
      }), thumbnail && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThumbnailWrap, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: thumbnail
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody, {
        expandable: thumbnail,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: children
        })
      })]
    })
  });
};

/* harmony default export */ var styles_Card = (Card);
const LongSentence = core_["css"]`
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Outer = styled["a" /* default */].div`
  padding: 1rem;
  width: 100%;
`;
const Wrap = styled["a" /* default */].div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: calc(495px - 2rem);
  font-size: 1rem;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;

  :hover {
    border-color: transparent;
    transform: translateY(-5px);
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  }
`;
const CardHeader = styled["a" /* default */].div`
  padding: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid #e6e6e6;
  white-space: nowrap;
  ${LongSentence}
`;
const MaxLine = core_["css"]`
  -webkit-line-clamp: 3;
`;
const CardBody = styled["a" /* default */].div`
  padding: 1.25rem;

  p {
    display: -webkit-box;
    font-size: 0.875rem;
    line-height: 1.5;
    -webkit-box-orient: vertical;
    ${props => props.expandable && MaxLine}
    ${LongSentence}
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;
const ThumbnailWrap = styled["a" /* default */].div`
  margin-left: -1px;
  margin-right: -1px;
  transform: translateY(-1px);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
// CONCATENATED MODULE: ./src/styles/Collapse/index.tsx



function Collapse_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Collapse_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Collapse_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Collapse = ({
  active,
  accordion,
  children
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(external_react_["useState"])(active ? active : accordion ? 0 : []);

  const showContent = index => {
    if (accordion) {
      setActiveIndex(index);
    } else {
      let temp;

      if (activeIndex.includes(index)) {
        temp = activeIndex.filter(item => item !== index);
      } else {
        temp = activeIndex.concat(index);
      }

      setActiveIndex(temp);
    }
  };

  const childrenWithProps = external_react_default.a.Children.map(children, (child, index) => {
    if ((child === null || child === void 0 ? void 0 : child.type) === Panel) {
      return /*#__PURE__*/external_react_default.a.cloneElement(child, {
        showContent,
        index,
        isActive: accordion ? index === activeIndex : activeIndex.includes(index)
      });
    } else {
      throw new Error("패널 컴포넌트를 넣어주세요.");
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container, {
    children: childrenWithProps
  });
};

/* harmony default export */ var styles_Collapse = (Collapse);
const Panel = (_ref) => {
  let {
    title,
    children
  } = _ref,
      rest = Collapse_objectWithoutProperties(_ref, ["title", "children"]);

  const {
    showContent,
    index,
    isActive
  } = rest;
  const ref = Object(external_react_["useRef"])(null);
  const {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Collapse_Wrap, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
      index: index,
      onClick: () => showContent(index),
      children: title
    }), ref && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentWrap, {
      active: isActive,
      ref: ref,
      height: height,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
        children: children
      })
    })]
  });
};
const Container = styled["a" /* default */].div`
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;
const Collapse_Wrap = styled["a" /* default */].div`
  width: 100%;
`;
const Header = styled["a" /* default */].div`
  padding: 1rem;
  color: #000;
  background-color: #ddd;
  ${p => p.index === 0 && "border-top-left-radius: 4px; border-top-right-radius: 4px;"}
  cursor: pointer;
`;
const ContentWrap = styled["a" /* default */].div`
  padding: 0 1rem;
  height: ${p => p.active ? p.height : "0"}px;
  background-color: #fff;
  overflow: hidden;
  transition: height 0.2s ease-out;
`;
const Content = styled["a" /* default */].p`
  margin: 1rem 0;
`;
// CONCATENATED MODULE: ./src/styles/index.ts





/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "p77/":
/***/ (function(module, exports) {



/***/ }),

/***/ "qHiR":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "w2n2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_CATEGORY_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MODIFY_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REMOVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_COMMENTS; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALL_POSTS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getAllPosts {
    getAllPosts {
      id
      category
      title
      html
      markdown
      image
      createdAt
      updatedAt
    }
  }
`;
const GET_CATEGORY_POSTS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getCategoryPosts($category: String!) {
    getCategoryPosts(category: $category) {
      id
      category
      title
      html
      markdown
      image
      createdAt
      updatedAt
    }
  }
`;
const GET_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getPosts($id: String!) {
    getPost(id: $id) {
      id
      category
      title
      html
      html2
      markdown
      image
      createdAt
      updatedAt
      user {
        email
        name
      }
    }
  }
`;
const CREATE_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      category
      title
      html
      markdown
      image
      createdAt
      updatedAt
    }
  }
`;
const MODIFY_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation modifyPost($id: String!, $input: ModifyPostInput!) {
    modifyPost(id: $id, input: $input)
  }
`;
const REMOVE_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation removePost($id: String!) {
    removePost(id: $id)
  }
`;
const CREATE_COMMENT = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation createComment($comment: PostComment!, $postId: String!, $email: String) {
    createComment(comment: $comment, postId: $postId, email: $email) {
      id
      name
      contents
      parent
      class
      email
      createdAt
    }
  }
`;
const GET_COMMENTS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getComments($postId: String!) {
    getComments(postId: $postId) {
      id
      name
      contents
      email
      parent
      class
      createdAt
    }
  }
`;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });