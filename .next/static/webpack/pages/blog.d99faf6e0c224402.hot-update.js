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

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var post1 = param.post;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4 text-danger\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card bg-light p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post1.imageURL,\n                        alt: \"\",\n                        className: \"card-img-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post1.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post1.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: post1.website,\n                            target: \"_blank\",\n                            className: \"btn btn-outline-danger rounded\",\n                            children: \"Read Learn\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostCard;\nvar Blog = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"My Blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_3__.post.map(function(post2, i) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post2\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\54352\\\\Desktop\\\\Portfolio-jco\\\\pages\\\\blog.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ2dCO0FBQ1I7O0FBRWpDLEdBQUssQ0FBQ0csUUFBUSxHQUFHLFFBQVE7UUFBTkQsS0FBSSxTQUFKQSxJQUFJO2tCQUNyQixNQUFNLCtEQUFMRSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFzQjs4RkFDbENELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQW1COzs0RkFDL0JELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFVOzBHQUN0QkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFTCxLQUFJLENBQUNNLFFBQVE7d0JBQUVDLEdBQUcsRUFBQyxDQUFFO3dCQUFDSixTQUFTLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7NEZBRXpERCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBWTs7b0dBQ3hCSyxDQUFFO3NDQUFFUixLQUFJLENBQUNTLEtBQUs7Ozs7OztvR0FDZEMsQ0FBQztzQ0FBRVYsS0FBSSxDQUFDVyxPQUFPOzs7Ozs7b0dBQ2ZDLENBQUM7NEJBQUNDLElBQUksRUFBRWIsS0FBSSxDQUFDYyxPQUFPOzRCQUFFQyxNQUFNLEVBQUMsQ0FBUTs0QkFBQ1osU0FBUyxFQUFDLENBQWdDO3NDQUFDLENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVQ5RkYsUUFBUTtBQWVkLEdBQUssQ0FBQ2UsSUFBSSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNsQixNQUFNLDZFQUNIakIsMERBQU07UUFBQ1UsS0FBSyxFQUFDLENBQVM7OEZBQ3BCUCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO3NCQUVoQkgsOENBQVEsQ0FBQyxRQUFRLENBQVBBLEtBQUksRUFBRWtCLENBQUM7OEJBQ2YsTUFBTSwrREFBTGpCLFFBQVE7b0JBQUNELElBQUksRUFBRUEsS0FBSTttQkFBT2tCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEMsQ0FBQztNQWJLRixJQUFJO0FBZVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4uL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQgdGV4dC1kYW5nZXInPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgYmctbGlnaHQgcC0yJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93Jz5cclxuICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0gYWx0PScnIGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSAnPlxyXG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgIDxhIGhyZWY9e3Bvc3Qud2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtZGFuZ2VyIHJvdW5kZWQnPlJlYWQgTGVhcm48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJNeSBCbG9nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICBwb3N0Lm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtpfSAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2cgICJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsInBvc3QiLCJQb3N0Q2FyZCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVVJMIiwiYWx0IiwiaDEiLCJ0aXRsZSIsInAiLCJjb250ZW50IiwiYSIsImhyZWYiLCJ3ZWJzaXRlIiwidGFyZ2V0IiwiQmxvZyIsIm1hcCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});