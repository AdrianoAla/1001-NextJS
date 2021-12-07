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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fb\": () => (/* binding */ fb),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"database\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nconst fb = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n    apiKey: \"AIzaSyCH9q8IBxZ0Y5J82RJv_1Sc-CHqP5zj8wY\",\n    authDomain: \"project-2762220423763914930.firebaseapp.com\",\n    databaseURL: \"https://project-2762220423763914930-default-rtdb.firebaseio.com/\",\n    projectId: \"project-2762220423763914930.appspot.com\",\n    storageBucket: \"776422876794\",\n    messagingSenderId: \"776422876794:web:8cdb9d857813e116e53dc3\",\n    appId: \"G-MLP91YCYB\"\n});\nconst auth = fb.auth();\nconst database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(fb);\n // export firebase, auth, and the database\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ3BCO0FBQ3lCO0FBQ2xCO0FBRTdCLEtBQUssQ0FBQ0UsRUFBRSxHQUFHRix5RUFBc0IsQ0FBQyxDQUFDO0lBQy9CSSxNQUFNLEVBQUVDLHlDQUE2QjtJQUNyQ0csVUFBVSxFQUFFSCw2Q0FBaUM7SUFDN0NLLFdBQVcsRUFBRUwsa0VBQTRCO0lBQ3pDTyxTQUFTLEVBQUVQLHlDQUFnQztJQUMzQ1MsYUFBYSxFQUFFVCxjQUFvQztJQUNuRFcsaUJBQWlCLEVBQUVYLHlDQUF5QztJQUM1RGEsS0FBSyxFQUFFYixhQUE0QjtBQUN2QyxDQUFDO0FBRUQsS0FBSyxDQUFDZSxJQUFJLEdBQUdsQixFQUFFLENBQUNrQixJQUFJO0FBQ3BCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHcEIsOERBQVcsQ0FBQ0MsRUFBRTtBQUNELENBQTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vRmlyZWJhc2UudHM/Mjg1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlIH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiXG5cbmNvbnN0IGZiID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVVUSF9ET01BSU4sXG4gICAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9VUkwsXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPSkVDVF9JRCxcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1RPUkFHRV9CVUNLRVQsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NRVNTQUdJTkdfU0VOREVSX0lELFxuICAgIGFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBQX0lELFxufSk7XG5cbmNvbnN0IGF1dGggPSBmYi5hdXRoKCk7XG5jb25zdCBkYXRhYmFzZSA9IGdldERhdGFiYXNlKGZiKTsgXG5leHBvcnQge2ZiLCBhdXRoLCBkYXRhYmFzZX07ICAvLyBleHBvcnQgZmlyZWJhc2UsIGF1dGgsIGFuZCB0aGUgZGF0YWJhc2UiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJnZXREYXRhYmFzZSIsImZiIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0tFWSIsImF1dGhEb21haW4iLCJSRUFDVF9BUFBfQVVUSF9ET01BSU4iLCJkYXRhYmFzZVVSTCIsIlJFQUNUX0FQUF9EQl9VUkwiLCJwcm9qZWN0SWQiLCJSRUFDVF9BUFBfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJSRUFDVF9BUFBfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIlJFQUNUX0FQUF9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJSRUFDVF9BUFBfQVBQX0lEIiwiYXV0aCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Firebase.ts\n");

/***/ }),

/***/ "./authRoutes.tsx":
/*!************************!*\
  !*** ./authRoutes.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthRoute)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ \"./Firebase.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_Firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction AuthRoute({ children  }) {\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _Firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            if (user) {\n                if (!user.emailVerified) {\n                    alert(\"Please verify your email address! Scores will not be submitted until you do so.\");\n                    user.sendEmailVerification();\n                }\n                console.log(\"User detected, redirecting ...\");\n            } else {\n                console.warn(\"User not detected! redirecting ...\");\n            }\n            setLoading(false);\n        });\n    }, []);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    __source: {\n                        fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"1001\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: \"Loading...\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoUm91dGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFUDtBQUVMO0FBR2IsUUFBUSxDQUFFSSxTQUFTLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFPLENBQUM7SUFFbkQsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsSUFBSVAscURBQWMsQ0FBQyxJQUFJO0lBRWpEQyxnREFBUyxLQUFPLENBQUM7UUFDYkMsOERBQXVCLEVBQUNRLElBQUksR0FBSSxDQUFDO1lBQzdCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxHQUFHQSxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO29CQUN0QkMsS0FBSyxDQUFFLENBQWlGO29CQUN4RkYsSUFBSSxDQUFDRyxxQkFBcUI7Z0JBQzlCLENBQUM7Z0JBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdDO1lBQ2hELENBQUMsTUFDSSxDQUFDO2dCQUNGRCxPQUFPLENBQUNFLElBQUksQ0FBQyxDQUFvQztZQUNyRCxDQUFDO1lBQ0RULFVBQVUsQ0FBQyxLQUFLO1FBQ3BCLENBQUM7SUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRVgsRUFBRSxFQUFFRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU07O3FGQUVESCxrREFBSTs7Ozs7OzttR0FDQWMsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFJOzs7cUZBRWRDLENBQUc7Ozs7Ozs7OEJBQUMsQ0FBVTs7OztJQUd2QixDQUFDO0lBRUQsTUFBTSxzRUFDREEsQ0FBRzs7Ozs7OztrQkFBR2IsUUFBUTs7QUFFdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2F1dGhSb3V0ZXMudHN4P2JhNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9GaXJlYmFzZSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoUm91dGVQcm9wcyB7IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIEF1dGhSb3V0ZSh7IGNoaWxkcmVuIH0pOiBhbnkge1xuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyLmVtYWlsVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQgKFwiUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3MhIFNjb3JlcyB3aWxsIG5vdCBiZSBzdWJtaXR0ZWQgdW50aWwgeW91IGRvIHNvLlwiKVxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGV0ZWN0ZWQsIHJlZGlyZWN0aW5nIC4uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVzZXIgbm90IGRldGVjdGVkISByZWRpcmVjdGluZyAuLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSl9LCBbXSk7XG4gICAgXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT4xMDAxPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj57IGNoaWxkcmVuIH08L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiYXV0aCIsIkhlYWQiLCJBdXRoUm91dGUiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiZW1haWxWZXJpZmllZCIsImFsZXJ0Iiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJ0aXRsZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./authRoutes.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authRoutes */ \"./authRoutes.tsx\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/stylesheet.css */ \"./css/stylesheet.css\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authRoutes__WEBPACK_IMPORTED_MODULE_1__]);\n_authRoutes__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"html\", {\n        lang: \"en-US\",\n        __source: {\n            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"google-site-verification\",\n                        content: \"xumJ3-kn2Ksq5-JmkXXJ2seuI90nDpOzr6R0bsh9PxA\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"en_US\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"1001\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://adrianoalasia.com/\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"link to image / logo\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"1001 is a simple math puzzle game where you must turn a 6 digit number into another 6 digit number using a set of 3 actions using as little actions as possible.\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#adf3dc\",\n                        __source: {\n                            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_authRoutes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                    ...pageProps,\n                    __source: {\n                        fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDUDtBQUNGO0FBRWIsUUFBUSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxNQUFNLHVFQUNMQyxDQUFJO1FBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7OztrRkFDZkwsa0RBQUk7Ozs7Ozs7O3lGQUNGTSxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBMEI7d0JBQUNDLE9BQU8sRUFBQyxDQUE2Qzs7Ozs7Ozs7eUZBQzFGRixDQUFJO3dCQUFDRyxRQUFRLEVBQUMsQ0FBVzt3QkFBQ0QsT0FBTyxFQUFDLENBQU87Ozs7Ozs7O3lGQUN6Q0YsQ0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQVU7d0JBQUNELE9BQU8sRUFBQyxDQUFNOzs7Ozs7Ozt5RkFDdkNGLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFTO3dCQUFDRCxPQUFPLEVBQUMsQ0FBUzs7Ozs7Ozs7eUZBQ3pDRixDQUFJO3dCQUFDRyxRQUFRLEVBQUMsQ0FBUTt3QkFBQ0QsT0FBTyxFQUFDLENBQTRCOzs7Ozs7Ozt5RkFDM0RGLENBQUk7d0JBQUNHLFFBQVEsRUFBQyxDQUFVO3dCQUFDRCxPQUFPLEVBQUMsQ0FBc0I7Ozs7Ozs7O3lGQUN2REYsQ0FBSTt3QkFBQ0csUUFBUSxFQUFDLENBQWdCO3dCQUFDRCxPQUFPLEVBQUMsQ0FBa0s7Ozs7Ozs7O3lGQUN6TUYsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUFTOzs7Ozs7Ozs7O2lGQUUzQ1QsbURBQVM7Ozs7Ozs7K0ZBQ1BHLFNBQVM7dUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBSTlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoUm91dGUgZnJvbSAnLi4vYXV0aFJvdXRlcydcbmltcG9ydCAnLi4vY3NzL3N0eWxlc2hlZXQuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuLVVTJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cInh1bUozLWtuMktzcTUtSm1rWFhKMnNldUk5MG5EcE96cjZSMGJzaDlQeEFcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiMTAwMVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9hZHJpYW5vYWxhc2lhLmNvbS9cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImxpbmsgdG8gaW1hZ2UgLyBsb2dvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIxMDAxIGlzIGEgc2ltcGxlIG1hdGggcHV6emxlIGdhbWUgd2hlcmUgeW91IG11c3QgdHVybiBhIDYgZGlnaXQgbnVtYmVyIGludG8gYW5vdGhlciA2IGRpZ2l0IG51bWJlciB1c2luZyBhIHNldCBvZiAzIGFjdGlvbnMgdXNpbmcgYXMgbGl0dGxlIGFjdGlvbnMgYXMgcG9zc2libGUuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNhZGYzZGNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEF1dGhSb3V0ZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUm91dGU+XG4gICAgPC9odG1sPlxuICAgIClcbiAgfSJdLCJuYW1lcyI6WyJBdXRoUm91dGUiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJodG1sIiwibGFuZyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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