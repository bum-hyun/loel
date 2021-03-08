import { css } from "@emotion/core";

const FONT_PRIMARY = css`
  font-family: "Noto Sans KR", "Noto Sans", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", "dotum", Helvetica, Arial, Verdana, Tahoma, sans-serif;
`;

const FONT_SECONDARY = css`
  font-family: "Roboto", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", "dotum", Helvetica, Arial, Verdana, Tahoma, sans-serif;
`;

export { FONT_PRIMARY, FONT_SECONDARY };

export default css`
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
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: inherit;
  }
`;
