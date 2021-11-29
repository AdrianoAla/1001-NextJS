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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fb\": () => (/* binding */ fb),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"database\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nconst ak = \"AIzaSyCH9q8IBxZ0Y5J82RJv_1Sc-CHqP5zj8wY\";\nconsole.log(ak === process.env.REACT_APP_API_KEY);\nconst fb = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n    apiKey: process.env.REACT_APP_API_KEY,\n    authDomain: process.env.REACT_APP_AUTH_DOMAIN,\n    databaseURL: process.env.REACT_APP_DB_URL,\n    projectId: process.env.REACT_APP_PROJECT_ID,\n    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,\n    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,\n    appId: process.env.REACT_APP_APP_ID\n});\nconst auth = fb.auth();\nconst database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(fb);\n // export firebase, auth, and the database\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ3BCO0FBQ3lCO0FBQ2xCO0FBRTdCLEtBQUssQ0FBQ0UsRUFBRSxHQUFHLENBQXlDO0FBRXBEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxLQUFLRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRWhELEtBQUssQ0FBQ0MsRUFBRSxHQUFHUix5RUFBc0IsQ0FBQyxDQUFDO0lBQy9CVSxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7SUFDckNJLFVBQVUsRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNNLHFCQUFxQjtJQUM3Q0MsV0FBVyxFQUFFUixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsZ0JBQWdCO0lBQ3pDQyxTQUFTLEVBQUVWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxvQkFBb0I7SUFDM0NDLGFBQWEsRUFBRVosT0FBTyxDQUFDQyxHQUFHLENBQUNZLHdCQUF3QjtJQUNuREMsaUJBQWlCLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyw2QkFBNkI7SUFDNURDLEtBQUssRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsZ0JBQWdCO0FBQ3ZDLENBQUM7QUFFRCxLQUFLLENBQUNDLElBQUksR0FBR2YsRUFBRSxDQUFDZSxJQUFJO0FBQ3BCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHdkIsOERBQVcsQ0FBQ08sRUFBRTtBQUNELENBQTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vRmlyZWJhc2UudHM/Mjg1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlIH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiXG5cbmNvbnN0IGFrID0gXCJBSXphU3lDSDlxOElCeFowWTVKODJSSnZfMVNjLUNIcVA1emo4d1lcIjtcblxuY29uc29sZS5sb2coYWsgPT09IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfS0VZKTtcblxuY29uc3QgZmIgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfS0VZLFxuICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BVVRIX0RPTUFJTixcbiAgICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX1VSTCxcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9KRUNUX0lELFxuICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVE9SQUdFX0JVQ0tFVCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUFBfSUQsXG59KTtcblxuY29uc3QgYXV0aCA9IGZiLmF1dGgoKTtcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoZmIpOyBcbmV4cG9ydCB7ZmIsIGF1dGgsIGRhdGFiYXNlfTsgIC8vIGV4cG9ydCBmaXJlYmFzZSwgYXV0aCwgYW5kIHRoZSBkYXRhYmFzZSJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImdldERhdGFiYXNlIiwiYWsiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9BUElfS0VZIiwiZmIiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsIlJFQUNUX0FQUF9BVVRIX0RPTUFJTiIsImRhdGFiYXNlVVJMIiwiUkVBQ1RfQVBQX0RCX1VSTCIsInByb2plY3RJZCIsIlJFQUNUX0FQUF9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlJFQUNUX0FQUF9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiUkVBQ1RfQVBQX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIlJFQUNUX0FQUF9BUFBfSUQiLCJhdXRoIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Firebase.ts\n");

/***/ }),

/***/ "./authRoutes.tsx":
/*!************************!*\
  !*** ./authRoutes.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthRoute)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ \"./Firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_Firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction AuthRoute({ children  }) {\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _Firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            if (user) {\n                setLoading(false);\n            }\n        });\n    }, []);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n                lineNumber: 19,\n                columnNumber: 16\n            },\n            __self: this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoUm91dGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRVA7QUFJbEIsUUFBUSxDQUFFRyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFPLENBQUM7SUFFbkQsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsSUFBSU4scURBQWMsQ0FBQyxJQUFJO0lBRWpEQyxnREFBUyxLQUFPLENBQUM7UUFDYkMsOERBQXVCLEVBQUNPLElBQUksR0FBSSxDQUFDO1lBQzdCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1BILFVBQVUsQ0FBQyxLQUFLO1lBQ3BCLENBQUM7UUFDTCxDQUFDO0lBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVYLEVBQUUsRUFBRUQsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNLHNFQUFFSyxDQUFHOzs7Ozs7O3NCQUFDLENBQVU7O0lBQzFCLENBQUM7SUFFRCxNQUFNLHNFQUNEQSxDQUFHOzs7Ozs7O2tCQUFHTixRQUFROztBQUV2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXV0aFJvdXRlcy50c3g/YmE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9GaXJlYmFzZSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgaW50ZXJmYWNlIElBdXRoUm91dGVQcm9wcyB7IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIEF1dGhSb3V0ZSh7IGNoaWxkcmVuIH0pOiBhbnkge1xuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfSwgW10pO1xuICAgIFxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj57IGNoaWxkcmVuIH08L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiYXV0aCIsIkF1dGhSb3V0ZSIsImNoaWxkcmVuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./authRoutes.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authRoutes */ \"./authRoutes.tsx\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/stylesheet.css */ \"./css/stylesheet.css\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authRoutes__WEBPACK_IMPORTED_MODULE_1__]);\n_authRoutes__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_authRoutes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n            lineNumber: 5,\n            columnNumber: 12\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/pages/_app.tsx\",\n                lineNumber: 5,\n                columnNumber: 23\n            },\n            __self: this\n        })\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1A7QUFFZixRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JELE1BQU0sc0VBQUVILG1EQUFTOzs7Ozs7O3VGQUFFRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUM1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aFJvdXRlIGZyb20gJy4uL2F1dGhSb3V0ZXMnXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXNoZWV0LmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIDxBdXRoUm91dGU+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvQXV0aFJvdXRlPlxuICB9Il0sIm5hbWVzIjpbIkF1dGhSb3V0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./css/stylesheet.css":
/*!****************************!*\
  !*** ./css/stylesheet.css ***!
  \****************************/
/***/ (() => {



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