"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/paginacion.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/paginacion.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/data.json */ \"(app-client)/./src/app/db/data.json\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Paginacion = ()=>{\n    _s();\n    const itemsPerPage = 12;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const totalPages = Math.ceil(_db_data_json__WEBPACK_IMPORTED_MODULE_2__.length / itemsPerPage);\n    const pageRange = 2;\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const [idx, setIdx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const search = searchParams.get(\"page\");\n    if (search) {\n        setIdx(search - 1);\n    }\n    const createQueryString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name, value)=>{\n        const params = new URLSearchParams(searchParams.toString());\n        params.set(name, value);\n        return params.toString();\n    }, //* eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        searchParams\n    ]);\n    const handlePaginacion = (pa, ge, page)=>{\n        router.push(pathname + \"?\" + createQueryString(pa, ge));\n        setCurrentPage(page);\n    };\n    const getPageNumbers = ()=>{\n        if (search <= pageRange + 1) {\n            return Array.from({\n                length: Math.min(pageRange * 2 + 1, totalPages)\n            }, (_, index)=>index + 1);\n        }\n        if (search >= totalPages - pageRange) {\n            return Array.from({\n                length: pageRange * 2 + 1\n            }, (_, index)=>totalPages - pageRange * 2 + index);\n        }\n        return Array.from({\n            length: pageRange * 2 + 1\n        }, (_, index)=>search - pageRange + index);\n    };\n    console.log(\"todal actuales\", getPageNumbers());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex  flex justify-end  gap-x-1 items-center text-sm underline border-red-700 border-2\",\n            children: [\n                search > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"\".concat(currentPage - 1), currentPage - 1),\n                    className: \"  w-9 h-8 \",\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 21\n                }, undefined),\n                search > pageRange + 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"1\", 1),\n                    className: \"hover:bg-yellow-300 w-9 h-8\",\n                    children: \"1 \"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 21\n                }, undefined),\n                search > pageRange + 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \" flex justify-center  items-center hover:bg-yellow-300 w-9 h-8 \",\n                    children: \"...\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 21\n                }, undefined),\n                getPageNumbers().map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handlePaginacion(\"page\", \"\".concat(page), page),\n                        className: page - 1 === idx ? \" hover:bg-black hover:text-white w-9 h-8  bg-black  text-white\" : \" hover:bg-yellow-300  w-9 h-8\",\n                        children: page\n                    }, page, false, {\n                        fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 21\n                    }, undefined)),\n                search < totalPages - pageRange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"  flex justify-center  items-center hover:bg-yellow-300 w-9 h-8 \",\n                    children: \"...\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 21\n                }, undefined),\n                search < totalPages - pageRange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"\".concat(totalPages), totalPages),\n                    className: totalPages - 1 === idx ? \" hover:bg-black hover:text-white w-9 h-8  bg-black  text-white\" : \" hover:bg-yellow-300  w-9 h-8\",\n                    children: totalPages\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 21\n                }, undefined),\n                search < totalPages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"\".concat(currentPage + 1), currentPage + 1),\n                    className: \"   w-9 h-8  \",\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n            lineNumber: 99,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Paginacion, \"tn3OmDm3VpiM/YWLpKXwG7ull2Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Paginacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paginacion);\nvar _c;\n$RefreshReg$(_c, \"Paginacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYWNpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUVMO0FBRWE7QUFDMkI7QUFPMUUsTUFBTU8sYUFBOEI7O0lBR2hDLE1BQU1DLGVBQWU7SUFDckIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRy9DLE1BQU1VLGFBQWFDLEtBQUtDLEtBQUtYLDBDQUFJQSxDQUFDWSxTQUFTTjtJQUMzQyxNQUFNTyxZQUFZO0lBRWxCLE1BQU1DLGVBQWVWLGdFQUFlQTtJQUNwQyxNQUFNVyxTQUFTWiwwREFBU0E7SUFDeEIsTUFBTWEsV0FBV2QsNERBQVdBO0lBRTVCLE1BQU0sQ0FBQ2UsS0FBS0MsT0FBTyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDL0IsTUFBTW9CLFNBQWNMLGFBQWFNLElBQUk7SUFLckMsSUFBSUQsUUFBUTtRQUNSRCxPQUFPQyxTQUFTO0lBR3BCO0lBUUEsTUFBTUUsb0JBQW9CcEIsa0RBQVdBLENBQ2pDLENBQUNxQixNQUFjQztRQUNYLE1BQU1DLFNBQVMsSUFBSUMsZ0JBQWdCWCxhQUFhWTtRQUNoREYsT0FBT0csSUFBSUwsTUFBTUM7UUFHakIsT0FBT0MsT0FBT0U7SUFDbEIsR0FDQSx3REFBd0Q7SUFDeEQ7UUFBQ1o7S0FBYTtJQUtsQixNQUFNYyxtQkFBbUIsQ0FBQ0MsSUFBWUMsSUFBWUM7UUFDOUNoQixPQUFPaUIsS0FBS2hCLFdBQVcsTUFBTUssa0JBQWtCUSxJQUFJQztRQUNuRHRCLGVBQWV1QjtJQUVuQjtJQVNBLE1BQU1FLGlCQUFpQjtRQUNuQixJQUFJZCxVQUFVTixZQUFZLEdBQUc7WUFDekIsT0FBT3FCLE1BQU1DLEtBQUs7Z0JBQUV2QixRQUFRRixLQUFLMEIsSUFBSXZCLFlBQVksSUFBSSxHQUFHSjtZQUFZLEdBQUcsQ0FBQzRCLEdBQUdDLFFBQVVBLFFBQVE7UUFDakc7UUFDQSxJQUFJbkIsVUFBVVYsYUFBYUksV0FBVztZQUNsQyxPQUFPcUIsTUFBTUMsS0FBSztnQkFBRXZCLFFBQVFDLFlBQVksSUFBSTtZQUFFLEdBQUcsQ0FBQ3dCLEdBQUdDLFFBQVU3QixhQUFhSSxZQUFZLElBQUl5QjtRQUNoRztRQUNBLE9BQU9KLE1BQU1DLEtBQUs7WUFBRXZCLFFBQVFDLFlBQVksSUFBSTtRQUFFLEdBQUcsQ0FBQ3dCLEdBQUdDLFFBQVVuQixTQUFTTixZQUFZeUI7SUFDeEY7SUFFQUMsUUFBUUMsSUFBSSxrQkFBa0JQO0lBUzlCLHFCQUNJO2tCQU9JLDRFQUFDUTtZQUFJQyxXQUFVOztnQkFFVnZCLFNBQVMsbUJBQ04sOERBQUN3QjtvQkFBT0MsU0FBUyxJQUFNaEIsaUJBQWlCLFFBQVEsR0FBbUIsT0FBaEJyQixjQUFjLElBQUtBLGNBQWM7b0JBQ2hGbUMsV0FBVzs4QkFBZTs7Ozs7O2dCQUVqQ3ZCLFNBQVNOLFlBQVksbUJBQ2xCLDhEQUFDOEI7b0JBQU9DLFNBQVMsSUFBTWhCLGlCQUFpQixRQUFRLEtBQUs7b0JBQUljLFdBQVU7OEJBQStCOzs7Ozs7Z0JBRXJHdkIsU0FBU04sWUFBWSxtQkFDbEIsOERBQUNnQztvQkFBS0gsV0FBVzs4QkFBb0U7Ozs7OztnQkFHeEZULGlCQUFpQmEsSUFBSWYsQ0FBQUEscUJBQ2xCLDhEQUFDWTt3QkFFR0MsU0FBUyxJQUFNaEIsaUJBQWlCLFFBQVEsR0FBUSxPQUFMRyxPQUFRQTt3QkFHbkRXLFdBQVdYLE9BQU8sTUFBTWQsTUFBTSxtRUFBbUU7a0NBRWhHYzt1QkFOSUE7Ozs7O2dCQVNaWixTQUFTVixhQUFhSSwyQkFDbkIsOERBQUNnQztvQkFBS0gsV0FBVzs4QkFBb0U7Ozs7OztnQkFHeEZ2QixTQUFTVixhQUFhSSwyQkFDbkIsOERBQUM4QjtvQkFBT0MsU0FBUyxJQUFNaEIsaUJBQWlCLFFBQVEsR0FBYyxPQUFYbkIsYUFBY0E7b0JBRTdEaUMsV0FBV2pDLGFBQWEsTUFBTVEsTUFBTSxtRUFBbUU7OEJBQ3pHUjs7Ozs7O2dCQUVMVSxTQUFTViw0QkFDTiw4REFBQ2tDO29CQUFPQyxTQUFTLElBQU1oQixpQkFBaUIsUUFBUSxHQUFtQixPQUFoQnJCLGNBQWMsSUFBS0EsY0FBYztvQkFDaEZtQyxXQUFXOzhCQUNkOzs7Ozs7Ozs7Ozs7O0FBU3JCO0dBcElNckM7O1FBVW1CRCw0REFBZUE7UUFDckJELHNEQUFTQTtRQUNQRCx3REFBV0E7OztLQVoxQkc7QUF5SU4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYWNpb24udHN4PzY5NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RiL2RhdGEuanNvblwiXG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXG59XG5cbmNvbnN0IFBhZ2luYWNpb246IFJlYWN0LkZDPFByb3BzPiA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgaXRlbXNQZXJQYWdlID0gMTI7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XG4gICAgY29uc3QgcGFnZVJhbmdlID0gMjtcblxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG5cbiAgICBjb25zdCBbaWR4LCBzZXRJZHhdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBzZWFyY2g6IGFueSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKVxuXG5cblxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgICBzZXRJZHgoc2VhcmNoIC0gMSlcblxuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgY29uc3QgY3JlYXRlUXVlcnlTdHJpbmcgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHBhcmFtcy5zZXQobmFtZSwgdmFsdWUpXG5cblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIC8vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICAgIFtzZWFyY2hQYXJhbXNdXG4gICAgKVxuXG5cblxuICAgIGNvbnN0IGhhbmRsZVBhZ2luYWNpb24gPSAocGE6IHN0cmluZywgZ2U6IHN0cmluZywgcGFnZTogYW55KSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHBhdGhuYW1lICsgJz8nICsgY3JlYXRlUXVlcnlTdHJpbmcocGEsIGdlKSlcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZSlcblxuICAgIH1cblxuXG5cblxuXG5cblxuXG4gICAgY29uc3QgZ2V0UGFnZU51bWJlcnMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzZWFyY2ggPD0gcGFnZVJhbmdlICsgMSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IE1hdGgubWluKHBhZ2VSYW5nZSAqIDIgKyAxLCB0b3RhbFBhZ2VzKSB9LCAoXywgaW5kZXgpID0+IGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlYXJjaCA+PSB0b3RhbFBhZ2VzIC0gcGFnZVJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcGFnZVJhbmdlICogMiArIDEgfSwgKF8sIGluZGV4KSA9PiB0b3RhbFBhZ2VzIC0gcGFnZVJhbmdlICogMiArIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcGFnZVJhbmdlICogMiArIDEgfSwgKF8sIGluZGV4KSA9PiBzZWFyY2ggLSBwYWdlUmFuZ2UgKyBpbmRleCk7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKFwidG9kYWwgYWN0dWFsZXNcIiwgZ2V0UGFnZU51bWJlcnMoKSk7XG5cblxuXG5cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYWNpb24oXCJwYWdlXCIsIGAke2l0ZW19YCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpZHggPT09IGkgPyAnIGhvdmVyOmJnLWJsYWNrIGhvdmVyOnRleHQtd2hpdGUgdy05IGgtOCAgYmctYmxhY2sgIHRleHQtd2hpdGUnIDogJyBob3ZlcjpiZy15ZWxsb3ctMzAwICB3LTkgaC04J31cbiAgICAgICAgICAgID57aXRlbX08L2J1dHRvbj4gKi99XG5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGZsZXgganVzdGlmeS1lbmQgIGdhcC14LTEgaXRlbXMtY2VudGVyIHRleHQtc20gdW5kZXJsaW5lIGJvcmRlci1yZWQtNzAwIGJvcmRlci0yXCI+XG5cbiAgICAgICAgICAgICAgICB7c2VhcmNoID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hY2lvbihcInBhZ2VcIiwgYCR7Y3VycmVudFBhZ2UgLSAxfWAsIGN1cnJlbnRQYWdlIC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycgIHctOSBoLTggJ30gPiZsdDs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtzZWFyY2ggPiBwYWdlUmFuZ2UgKyAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmFjaW9uKFwicGFnZVwiLCBcIjFcIiwgMSl9IGNsYXNzTmFtZT1cImhvdmVyOmJnLXllbGxvdy0zMDAgdy05IGgtOFwiID4xIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3NlYXJjaCA+IHBhZ2VSYW5nZSArIDIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eycgZmxleCBqdXN0aWZ5LWNlbnRlciAgaXRlbXMtY2VudGVyIGhvdmVyOmJnLXllbGxvdy0zMDAgdy05IGgtOCAnfSA+Li4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7Z2V0UGFnZU51bWJlcnMoKS5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYWNpb24oXCJwYWdlXCIsIGAke3BhZ2V9YCwgcGFnZSl9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlIC0gMSA9PT0gaWR4ID8gJyBob3ZlcjpiZy1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIHctOSBoLTggIGJnLWJsYWNrICB0ZXh0LXdoaXRlJyA6ICcgaG92ZXI6YmcteWVsbG93LTMwMCAgdy05IGgtOCd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7c2VhcmNoIDwgdG90YWxQYWdlcyAtIHBhZ2VSYW5nZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17JyAgZmxleCBqdXN0aWZ5LWNlbnRlciAgaXRlbXMtY2VudGVyIGhvdmVyOmJnLXllbGxvdy0zMDAgdy05IGgtOCAnfT4uLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzZWFyY2ggPCB0b3RhbFBhZ2VzIC0gcGFnZVJhbmdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmFjaW9uKFwicGFnZVwiLCBgJHt0b3RhbFBhZ2VzfWAsIHRvdGFsUGFnZXMpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RvdGFsUGFnZXMgLSAxID09PSBpZHggPyAnIGhvdmVyOmJnLWJsYWNrIGhvdmVyOnRleHQtd2hpdGUgdy05IGgtOCAgYmctYmxhY2sgIHRleHQtd2hpdGUnIDogJyBob3ZlcjpiZy15ZWxsb3ctMzAwICB3LTkgaC04J31cbiAgICAgICAgICAgICAgICAgICAgPnt0b3RhbFBhZ2VzfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3NlYXJjaCA8IHRvdGFsUGFnZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYWNpb24oXCJwYWdlXCIsIGAke2N1cnJlbnRQYWdlICsgMX1gLCBjdXJyZW50UGFnZSArIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnICAgdy05IGgtOCAgJ31cbiAgICAgICAgICAgICAgICAgICAgPiZndDs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvPlxuICAgIClcblxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmFjaW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJkYXRhIiwidXNlQ2FsbGJhY2siLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsIlBhZ2luYWNpb24iLCJpdGVtc1BlclBhZ2UiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnZVJhbmdlIiwic2VhcmNoUGFyYW1zIiwicm91dGVyIiwicGF0aG5hbWUiLCJpZHgiLCJzZXRJZHgiLCJzZWFyY2giLCJnZXQiLCJjcmVhdGVRdWVyeVN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwic2V0IiwiaGFuZGxlUGFnaW5hY2lvbiIsInBhIiwiZ2UiLCJwYWdlIiwicHVzaCIsImdldFBhZ2VOdW1iZXJzIiwiQXJyYXkiLCJmcm9tIiwibWluIiwiXyIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/paginacion.tsx\n"));

/***/ })

});