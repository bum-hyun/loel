webpackHotUpdate_N_E("pages/_app",{

/***/ "./apollo/index.ts":
/*!*************************!*\
  !*** ./apollo/index.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/context */ \"./node_modules/@apollo/client/link/context/index.js\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/link/error */ \"./node_modules/@apollo/client/link/error/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"createHttpLink\"])({\n  uri: false ? undefined : \"http://146.56.176.230:3306/graphql\" // uri: \"https://api.loelblog.com/graphql\",\n\n});\nvar authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__[\"setContext\"])(function (_, _ref) {\n  var headers = _ref.headers;\n  var token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"accessToken\");\n  var user = localStorage.getItem(\"user\");\n\n  if (!token) {\n    if (user) localStorage.removeItem(\"user\");\n    return;\n  }\n\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token\n    })\n  };\n});\nvar errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__[\"onError\"])(function (_ref2) {\n  var graphQLErrors = _ref2.graphQLErrors,\n      networkError = _ref2.networkError,\n      operation = _ref2.operation,\n      forward = _ref2.forward;\n\n  if (graphQLErrors) {\n    console.log(graphQLErrors);\n  }\n\n  if (networkError) {\n    console.log(\"[Network error]: \".concat(networkError));\n  }\n});\nvar link = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloLink\"].from([authLink, errorLink, httpLink]);\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n  link: link,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"](),\n  connectToDevTools: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL2luZGV4LnRzPzY3YjgiXSwibmFtZXMiOlsiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJjb29raWUiLCJnZXQiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhdXRob3JpemF0aW9uIiwiZXJyb3JMaW5rIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJvcGVyYXRpb24iLCJmb3J3YXJkIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJBcG9sbG9MaW5rIiwiZnJvbSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNvbm5lY3RUb0RldlRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHFFQUFjLENBQUM7QUFDOUJDLEtBQUcsRUFBRSxRQUF3QyxTQUF4QyxHQUE2RSxvQ0FEcEQsQ0FFOUI7O0FBRjhCLENBQUQsQ0FBL0I7QUFLQSxJQUFNQyxRQUFRLEdBQUdDLDhFQUFVLENBQUMsVUFBQ0MsQ0FBRCxRQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM5QyxNQUFNQyxLQUFLLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLENBQWQ7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFiOztBQUVBLE1BQUksQ0FBQ0wsS0FBTCxFQUFZO0FBQ1YsUUFBSUcsSUFBSixFQUFVQyxZQUFZLENBQUNFLFVBQWIsQ0FBd0IsTUFBeEI7QUFDVjtBQUNEOztBQUVELFNBQU87QUFDTFAsV0FBTyxrQ0FDRkEsT0FERTtBQUVMUSxtQkFBYSxFQUFFUDtBQUZWO0FBREYsR0FBUDtBQU1ELENBZjBCLENBQTNCO0FBaUJBLElBQU1RLFNBQVMsR0FBR0MseUVBQU8sQ0FBQyxpQkFBeUQ7QUFBQSxNQUF0REMsYUFBc0QsU0FBdERBLGFBQXNEO0FBQUEsTUFBdkNDLFlBQXVDLFNBQXZDQSxZQUF1QztBQUFBLE1BQXpCQyxTQUF5QixTQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxPQUFjLFNBQWRBLE9BQWM7O0FBQ2pGLE1BQUlILGFBQUosRUFBbUI7QUFDakJJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxhQUFaO0FBQ0Q7O0FBQ0QsTUFBSUMsWUFBSixFQUFrQjtBQUNoQkcsV0FBTyxDQUFDQyxHQUFSLDRCQUFnQ0osWUFBaEM7QUFDRDtBQUNGLENBUHdCLENBQXpCO0FBU0EsSUFBTUssSUFBSSxHQUFHQyx5REFBVSxDQUFDQyxJQUFYLENBQWdCLENBQUN0QixRQUFELEVBQVdZLFNBQVgsRUFBc0JmLFFBQXRCLENBQWhCLENBQWI7QUFFQSxJQUFNMEIsTUFBTSxHQUFHLElBQUlDLDJEQUFKLENBQWlCO0FBQzlCSixNQUFJLEVBQUVBLElBRHdCO0FBRTlCSyxPQUFLLEVBQUUsSUFBSUMsNERBQUosRUFGdUI7QUFHOUJDLG1CQUFpQixFQUFFO0FBSFcsQ0FBakIsQ0FBZjtBQU1lSixxRUFBZiIsImZpbGUiOiIuL2Fwb2xsby9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlSHR0cExpbmssIEluTWVtb3J5Q2FjaGUsIEFwb2xsb0xpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIjtcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiO1xuXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcImh0dHBzOi8vYXBpLmxvZWxibG9nLmNvbS9ncmFwaHFsXCIgOiBcImh0dHA6Ly8xNDYuNTYuMTc2LjIzMDozMzA2L2dyYXBocWxcIixcbiAgLy8gdXJpOiBcImh0dHBzOi8vYXBpLmxvZWxibG9nLmNvbS9ncmFwaHFsXCIsXG59KTtcblxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJhY2Nlc3NUb2tlblwiKTtcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgaWYgKHVzZXIpIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIC4uLmhlYWRlcnMsXG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICB9LFxuICB9O1xufSk7XG5cbmNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yLCBvcGVyYXRpb24sIGZvcndhcmQgfSkgPT4ge1xuICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKGdyYXBoUUxFcnJvcnMpO1xuICB9XG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcbiAgfVxufSk7XG5cbmNvbnN0IGxpbmsgPSBBcG9sbG9MaW5rLmZyb20oW2F1dGhMaW5rLCBlcnJvckxpbmssIGh0dHBMaW5rXSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBsaW5rLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgY29ubmVjdFRvRGV2VG9vbHM6IHRydWUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/index.ts\n");

/***/ })

})