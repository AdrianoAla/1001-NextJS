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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthRoute)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ \"./Firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_Firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction AuthRoute({ children  }) {\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _Firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            if (user) {\n                if (!user.emailVerified) {\n                    user.sendEmailVerification();\n                }\n                console.log(\"User detected, redirecting ...\");\n            } else {\n                console.warn(\"User not detected! redirecting ...\");\n            }\n            setLoading(false);\n        });\n    }, []);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n                lineNumber: 26,\n                columnNumber: 16\n            },\n            __self: this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/adrianoalasia/1001-NJS/1001-NextJS/authRoutes.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoUm91dGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRVA7QUFJbEIsUUFBUSxDQUFFRyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFPLENBQUM7SUFFbkQsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsSUFBSU4scURBQWMsQ0FBQyxJQUFJO0lBRWpEQyxnREFBUyxLQUFPLENBQUM7UUFDYkMsOERBQXVCLEVBQUNPLElBQUksR0FBSSxDQUFDO1lBQzdCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxHQUFHQSxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO29CQUN0QkQsSUFBSSxDQUFDRSxxQkFBcUI7Z0JBQzlCLENBQUM7Z0JBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdDO1lBQ2hELENBQUMsTUFDSSxDQUFDO2dCQUNGRCxPQUFPLENBQUNFLElBQUksQ0FBQyxDQUFvQztZQUNyRCxDQUFDO1lBQ0RSLFVBQVUsQ0FBQyxLQUFLO1FBQ3BCLENBQUM7SUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRVgsRUFBRSxFQUFFRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU0sc0VBQUVVLENBQUc7Ozs7Ozs7c0JBQUMsQ0FBVTs7SUFDMUIsQ0FBQztJQUVELE1BQU0sc0VBQ0RBLENBQUc7Ozs7Ozs7a0JBQUdYLFFBQVE7O0FBRXZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hdXRoUm91dGVzLnRzeD9iYTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vRmlyZWJhc2UnO1xuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IGludGVyZmFjZSBJQXV0aFJvdXRlUHJvcHMgeyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICBBdXRoUm91dGUoeyBjaGlsZHJlbiB9KTogYW55IHtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlci5lbWFpbFZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBkZXRlY3RlZCwgcmVkaXJlY3RpbmcgLi4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVXNlciBub3QgZGV0ZWN0ZWQhIHJlZGlyZWN0aW5nIC4uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KX0sIFtdKTtcbiAgICBcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+eyBjaGlsZHJlbiB9PC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImF1dGgiLCJBdXRoUm91dGUiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiZW1haWxWZXJpZmllZCIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ3YXJuIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./authRoutes.tsx\n");

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