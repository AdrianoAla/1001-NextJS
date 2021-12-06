/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Firebase.ts":
/*!*********************!*\
  !*** ./Firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fb\": () => (/* binding */ fb),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"database\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nconst fb = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n    apiKey: \"AIzaSyCH9q8IBxZ0Y5J82RJv_1Sc-CHqP5zj8wY\",\n    authDomain: \"project-2762220423763914930.firebaseapp.com\",\n    databaseURL: \"https://project-2762220423763914930-default-rtdb.firebaseio.com/\",\n    projectId: \"project-2762220423763914930.appspot.com\",\n    storageBucket: \"776422876794\",\n    messagingSenderId: \"776422876794:web:8cdb9d857813e116e53dc3\",\n    appId: \"G-MLP91YCYB\"\n});\nconst auth = fb.auth();\nconst database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(fb);\n // export firebase, auth, and the database\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ3BCO0FBQ3lCO0FBQ2xCO0FBRTdCLEtBQUssQ0FBQ0UsRUFBRSxHQUFHRix5RUFBc0IsQ0FBQyxDQUFDO0lBQy9CSSxNQUFNLEVBQUVDLHlDQUE2QjtJQUNyQ0csVUFBVSxFQUFFSCw2Q0FBaUM7SUFDN0NLLFdBQVcsRUFBRUwsa0VBQTRCO0lBQ3pDTyxTQUFTLEVBQUVQLHlDQUFnQztJQUMzQ1MsYUFBYSxFQUFFVCxjQUFvQztJQUNuRFcsaUJBQWlCLEVBQUVYLHlDQUF5QztJQUM1RGEsS0FBSyxFQUFFYixhQUE0QjtBQUN2QyxDQUFDO0FBRUQsS0FBSyxDQUFDZSxJQUFJLEdBQUdsQixFQUFFLENBQUNrQixJQUFJO0FBQ3BCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHcEIsOERBQVcsQ0FBQ0MsRUFBRTtBQUNELENBQTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vRmlyZWJhc2UudHM/Mjg1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiXHJcblxyXG5jb25zdCBmYiA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BVVRIX0RPTUFJTixcclxuICAgIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfVVJMLFxyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPSkVDVF9JRCxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICAgIGFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBQX0lELFxyXG59KTtcclxuXHJcbmNvbnN0IGF1dGggPSBmYi5hdXRoKCk7XHJcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoZmIpOyBcclxuZXhwb3J0IHtmYiwgYXV0aCwgZGF0YWJhc2V9OyAgLy8gZXhwb3J0IGZpcmViYXNlLCBhdXRoLCBhbmQgdGhlIGRhdGFiYXNlIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZ2V0RGF0YWJhc2UiLCJmYiIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiUkVBQ1RfQVBQX0FVVEhfRE9NQUlOIiwiZGF0YWJhc2VVUkwiLCJSRUFDVF9BUFBfREJfVVJMIiwicHJvamVjdElkIiwiUkVBQ1RfQVBQX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiUkVBQ1RfQVBQX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJSRUFDVF9BUFBfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiUkVBQ1RfQVBQX0FQUF9JRCIsImF1dGgiLCJkYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Firebase.ts\n");

/***/ }),

/***/ "./authRoutes.tsx":
/*!************************!*\
  !*** ./authRoutes.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthRoute)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ \"./Firebase.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_Firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction AuthRoute({ children  }) {\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _Firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            if (user) {\n                if (!user.emailVerified) {\n                    alert(\"Please verify your email address! Scores will not be submitted until you do so.\");\n                    user.sendEmailVerification();\n                }\n                console.log(\"User detected, redirecting ...\");\n            } else {\n                console.warn(\"User not detected! redirecting ...\");\n            }\n            setLoading(false);\n        });\n    }, []);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\authRoutes.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\authRoutes.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"1001\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\authRoutes.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: \"Loading...\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\authRoutes.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoUm91dGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFUDtBQUVMO0FBR2IsUUFBUSxDQUFFSSxTQUFTLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFPLENBQUM7SUFFbkQsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsSUFBSVAscURBQWMsQ0FBQyxJQUFJO0lBRWpEQyxnREFBUyxLQUFPLENBQUM7UUFDYkMsOERBQXVCLEVBQUNRLElBQUksR0FBSSxDQUFDO1lBQzdCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxHQUFHQSxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO29CQUN0QkMsS0FBSyxDQUFFLENBQWlGO29CQUN4RkYsSUFBSSxDQUFDRyxxQkFBcUI7Z0JBQzlCLENBQUM7Z0JBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdDO1lBQ2hELENBQUMsTUFDSSxDQUFDO2dCQUNGRCxPQUFPLENBQUNFLElBQUksQ0FBQyxDQUFvQztZQUNyRCxDQUFDO1lBQ0RULFVBQVUsQ0FBQyxLQUFLO1FBQ3BCLENBQUM7SUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRVgsRUFBRSxFQUFFRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU07O3FGQUVESCxrREFBSTs7Ozs7OzttR0FDQWMsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFJOzs7cUZBRWRDLENBQUc7Ozs7Ozs7OEJBQUMsQ0FBVTs7OztJQUd2QixDQUFDO0lBRUQsTUFBTSxzRUFDREEsQ0FBRzs7Ozs7OztrQkFBR2IsUUFBUTs7QUFFdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2F1dGhSb3V0ZXMudHN4P2JhNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuZXhwb3J0IGludGVyZmFjZSBJQXV0aFJvdXRlUHJvcHMgeyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgQXV0aFJvdXRlKHsgY2hpbGRyZW4gfSk6IGFueSB7XHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdXNlci5lbWFpbFZlcmlmaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQgKFwiUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3MhIFNjb3JlcyB3aWxsIG5vdCBiZSBzdWJtaXR0ZWQgdW50aWwgeW91IGRvIHNvLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGV0ZWN0ZWQsIHJlZGlyZWN0aW5nIC4uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVzZXIgbm90IGRldGVjdGVkISByZWRpcmVjdGluZyAuLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSl9LCBbXSk7XHJcbiAgICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT4xMDAxPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+eyBjaGlsZHJlbiB9PC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImF1dGgiLCJIZWFkIiwiQXV0aFJvdXRlIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImVtYWlsVmVyaWZpZWQiLCJhbGVydCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ3YXJuIiwidGl0bGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./authRoutes.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authRoutes */ \"./authRoutes.tsx\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/stylesheet.css */ \"./css/stylesheet.css\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authRoutes__WEBPACK_IMPORTED_MODULE_1__]);\n_authRoutes__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"en_US\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"1001\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://adrianoalasia.com/\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"link to image / logo\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"1001 is a simple math puzzle game where you must turn a 6 digit number into another 6 digit number using a set of 3 actions using as little actions as possible.\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#adf3dc\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_authRoutes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                    ...pageProps,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Adriano\\\\Desktop\\\\1001\\\\1001-NextJS\\\\pages\\\\_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDUDtBQUNGO0FBRWIsUUFBUSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxNQUFNOztrRkFFSEgsa0RBQUk7Ozs7Ozs7O3lGQUNGSSxDQUFJO3dCQUFDQyxRQUFRLEVBQUMsQ0FBVzt3QkFBQ0MsT0FBTyxFQUFDLENBQU87Ozs7Ozs7O3lGQUN6Q0YsQ0FBSTt3QkFBQ0MsUUFBUSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUFNOzs7Ozs7Ozt5RkFDdkNGLENBQUk7d0JBQUNDLFFBQVEsRUFBQyxDQUFTO3dCQUFDQyxPQUFPLEVBQUMsQ0FBUzs7Ozs7Ozs7eUZBQ3pDRixDQUFJO3dCQUFDQyxRQUFRLEVBQUMsQ0FBUTt3QkFBQ0MsT0FBTyxFQUFDLENBQTRCOzs7Ozs7Ozt5RkFDM0RGLENBQUk7d0JBQUNDLFFBQVEsRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBc0I7Ozs7Ozs7O3lGQUN2REYsQ0FBSTt3QkFBQ0MsUUFBUSxFQUFDLENBQWdCO3dCQUFDQyxPQUFPLEVBQUMsQ0FBa0s7Ozs7Ozs7O3lGQUN6TUYsQ0FBSTt3QkFBQ0csSUFBSSxFQUFDLENBQWE7d0JBQUNELE9BQU8sRUFBQyxDQUFTOzs7Ozs7Ozs7O2lGQUUzQ1AsbURBQVM7Ozs7Ozs7K0ZBQ1BHLFNBQVM7dUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBSTlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoUm91dGUgZnJvbSAnLi4vYXV0aFJvdXRlcydcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzaGVldC5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIjEwMDFcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2Fkcmlhbm9hbGFzaWEuY29tL1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJsaW5rIHRvIGltYWdlIC8gbG9nb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIxMDAxIGlzIGEgc2ltcGxlIG1hdGggcHV6emxlIGdhbWUgd2hlcmUgeW91IG11c3QgdHVybiBhIDYgZGlnaXQgbnVtYmVyIGludG8gYW5vdGhlciA2IGRpZ2l0IG51bWJlciB1c2luZyBhIHNldCBvZiAzIGFjdGlvbnMgdXNpbmcgYXMgbGl0dGxlIGFjdGlvbnMgYXMgcG9zc2libGUuXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2FkZjNkY1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEF1dGhSb3V0ZT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aFJvdXRlPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbiAgfSJdLCJuYW1lcyI6WyJBdXRoUm91dGUiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./css/stylesheet.css":
/*!****************************!*\
  !*** ./css/stylesheet.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();