"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark, title = param.title;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_5___default().done(true);\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"My portfolio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-5\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-light\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Jonatan Ochoa Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: new Date().getFullYear()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\components\\\\Layout.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1g7QUFDRDtBQUNXO0FBQ047OztBQUVqQyxHQUFLLENBQUNNLE1BQU0sR0FBRyxRQUFRLFFBQThDLENBQUM7UUFBcERDLFFBQVEsU0FBUkEsUUFBUSxrQkFBRUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLElBQUksMEJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxLQUFLLFVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDNUQsR0FBSyxDQUFDQyxNQUFNLEdBQUdQLHNEQUFTO0lBRXhCSCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsR0FBSyxDQUFDVyxpQkFBaUIsR0FBRyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztZQUNmUixzREFBZTtRQUNqQixDQUFDO1FBRURNLE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUVOLGlCQUFpQjtRQUV0REQsTUFBTSxDQUFDTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRSxRQUFRO1lBQUZiLE1BQU0sQ0FBTkEscURBQWMsQ0FBQyxJQUFJOztRQUVqRSxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDWk0sTUFBTSxDQUFDTSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFrQixtQkFBRVIsaUJBQWlCO1FBQ3pELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSFMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVTs7d0ZBQ3RCbkIsa0RBQUk7c0dBQ0ZPLENBQUs7OEJBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBRXBCUiwrQ0FBTTs7Ozs7d0ZBQ05xQixDQUFJO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0I7O29CQUc5QlosS0FBSyxnRkFDRmMsQ0FBRTt3QkFBQ0YsU0FBUyxFQUFDLENBQXdCO2tDQUFFWixLQUFLOzs7Ozs7b0JBSTlDSCxRQUFROzs7Ozs7O1lBRVZDLE1BQU0sZ0ZBQ0pBLENBQU07Z0JBQUNjLFNBQVMsRUFBQyxDQUFnQztzR0FDL0NELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFlOztvR0FDM0JFLENBQUU7c0NBQUMsQ0FBOEI7Ozs7OztvR0FDakNDLENBQUU7c0NBQUUsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7Ozs7OztvR0FDMUJDLENBQUM7c0NBQUMsQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DLENBQUM7R0E3Q0t0QixNQUFNOztRQUNLRixrREFBUzs7O0tBRHBCRSxNQUFNO0FBK0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZSwgdGl0bGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUodHJ1ZSkpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk15IHBvcnRmb2xpbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNVwiPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlICYmIChcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7Zm9vdGVyICYmIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgIDxoMT4mY29weTsgSm9uYXRhbiBPY2hvYSBQb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgICA8aDQ+e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L2g0PlxyXG4gICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiSGVhZCIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsInRpdGxlIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJoNCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});