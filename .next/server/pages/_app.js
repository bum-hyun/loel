module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

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

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "VU9W":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "XyoR":
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/ko");

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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: ./src/styles/index.ts + 4 modules
var styles = __webpack_require__("bFe0");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "@apollo/client/link/context"
var context_ = __webpack_require__("VU9W");

// EXTERNAL MODULE: external "@apollo/client/link/error"
var error_ = __webpack_require__("v5rf");

// CONCATENATED MODULE: ./apollo/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const httpLink = Object(client_["createHttpLink"])({
  uri: true ? "https://api.loelblog.com/graphql" : undefined // uri: "https://api.loelblog.com/graphql",

});
const authLink = Object(context_["setContext"])((_, {
  headers
}) => {
  const token = external_js_cookie_default.a.get("accessToken");
  const user = localStorage.getItem("user");

  if (!token) {
    if (user) localStorage.removeItem("user");
    return;
  }

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token
    })
  };
});
const errorLink = Object(error_["onError"])(({
  graphQLErrors,
  networkError,
  operation,
  forward
}) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const apollo_link = client_["ApolloLink"].from([authLink, errorLink, httpLink]);
const client = new client_["ApolloClient"]({
  link: apollo_link,
  cache: new client_["InMemoryCache"](),
  connectToDevTools: true
});
/* harmony default export */ var apollo = (client);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/locale/ko"
var ko_ = __webpack_require__("XyoR");

// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__("jYNn");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);

// CONCATENATED MODULE: ./pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










external_dayjs_default.a.locale("ko");
external_dayjs_default.a.extend(relativeTime_default.a);

const App = ({
  Component,
  pageProps
}) => {
  const {
    0: authority,
    1: setAuthority
  } = Object(external_react_["useState"])(false);

  const authenticated = state => {
    setAuthority(state);
  };

  const modifiedProps = _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
    authenticated,
    authority
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1, viewport-fit=cover"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "canonical",
        href: "https://loelblog.com/"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "title",
        content: "Loel's Blog"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "\uC74C\uC2DD\uACFC \uC5EC\uD589\uC744 \uC88B\uC544\uD558\uB294 \uAC1C\uBC1C\uC790\uC758 \uBE14\uB85C\uADF8 \uC785\uB2C8\uB2E4. \uC55E\uC73C\uB85C \uC8FC\uC2DD \uC774\uC57C\uAE30, \uC74C\uC2DD \uB9AC\uBDF0, \uAC1C\uBC1C \uC774\uC57C\uAE30\uB4E4\uC744 \uC62C\uB9AC\uACE0, \uC791\uC740 \uC11C\uBE44\uC2A4\uB4E4\uB3C4 \uD558\uB098\uC529 \uBD99\uC77C \uC608\uC815\uC785\uB2C8\uB2E4."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: "\uAC1C\uBC1C,\uC74C\uC2DD,\uC5EC\uD589,react,graphql,\uB808\uC2A4\uD1A0\uB791,\uBBF8\uC290\uB7AD"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: "Loel's Blog"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:url",
        content: "https://loelblog.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:description",
        content: "\uC74C\uC2DD\uACFC \uC5EC\uD589\uC744 \uC88B\uC544\uD558\uB294 \uAC1C\uBC1C\uC790\uC758 \uBE14\uB85C\uADF8 \uC785\uB2C8\uB2E4."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:image",
        content: "/background.jpg"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "robots",
        content: "index, follow"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "naver-site-verification",
        content: "350dd4433903daa6e87a92cebc3a476d5f976cb5"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "google-site-verification",
        content: "Yy6-Sy6XRLnTkTIKXHteilEWWr1AJLLcQGxwvilrGow"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Loel's Blog"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Global"], {
      styles: styles["e" /* Reset */]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_hooks_["ApolloProvider"], {
      client: apollo,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, modifiedProps))
    })]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "v5rf":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });