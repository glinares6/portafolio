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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/data.json */ \"(app-client)/./src/app/db/data.json\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Paginacion = (param)=>{\n    let { search1 } = param;\n    _s();\n    const itemsPerPage = 12;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const totalPages = Math.ceil(_db_data_json__WEBPACK_IMPORTED_MODULE_2__.length / itemsPerPage);\n    const pageRange = 2;\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const [idx, setIdx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const search = searchParams.get(\"page\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (search1) {\n            setIdx(search1 - 1);\n        }\n    }, [\n        search1\n    ]);\n    const createQueryString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name, value)=>{\n        const params = new URLSearchParams(searchParams.toString());\n        params.set(name, value);\n        return params.toString();\n    }, //* eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        searchParams\n    ]);\n    const handlePaginacion = (pa, ge, page)=>{\n        router.push(pathname + \"?\" + createQueryString(pa, ge));\n        setCurrentPage(page);\n    };\n    const getPageNumbers = ()=>{\n        if (search <= pageRange + 1) {\n            return Array.from({\n                length: Math.min(pageRange * 2 + 1, totalPages)\n            }, (_, index)=>index + 1);\n        }\n        if (search >= totalPages - pageRange) {\n            return Array.from({\n                length: pageRange * 2 + 1\n            }, (_, index)=>totalPages - pageRange * 2 + index);\n        }\n        return Array.from({\n            length: pageRange * 2 + 1\n        }, (_, index)=>search - pageRange + index);\n    };\n    console.log(\"todal actuales\", getPageNumbers());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex  flex justify-end  gap-x-1 items-center text-sm underline border-red-700 border-2\",\n            children: [\n                search > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"\".concat(currentPage - 1), currentPage - 1),\n                    className: \"  w-9 h-8 \",\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 21\n                }, undefined),\n                search > pageRange + 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"1\", 1),\n                    className: \"hover:bg-yellow-300 w-9 h-8\",\n                    children: \"1 \"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 21\n                }, undefined),\n                search > pageRange + 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \" flex justify-center  items-center hover:bg-yellow-300 w-9 h-8 \",\n                    children: \"...\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 21\n                }, undefined),\n                getPageNumbers().map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handlePaginacion(\"page\", \"\".concat(page), page),\n                        className: page - 1 === idx ? \" hover:bg-black hover:text-white w-9 h-8  bg-black  text-white\" : \" hover:bg-yellow-300  w-9 h-8\",\n                        children: page\n                    }, page, false, {\n                        fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 21\n                    }, undefined)),\n                search < totalPages - pageRange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"  flex justify-center  items-center hover:bg-yellow-300 w-9 h-8 \",\n                    children: \"...\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 21\n                }, undefined),\n                search < totalPages - pageRange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"\".concat(totalPages), totalPages),\n                    className: totalPages - 1 === idx ? \" hover:bg-black hover:text-white w-9 h-8  bg-black  text-white\" : \" hover:bg-yellow-300  w-9 h-8\",\n                    children: totalPages\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 21\n                }, undefined),\n                search1 < totalPages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handlePaginacion(\"page\", \"\".concat(currentPage + 1), currentPage + 1),\n                    className: \"   w-9 h-8  \",\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/linarespc/13fef327-7ca0-41a4-9a51-5fddc316e59c/linarespc/Documentos/02-archivos/07-portafolio/01-dorian-desings/portafolio/05-proyectos/02-tienda-inventario-online/01-tienda-inventario-desarrollo/src/app/components/paginacion.tsx\",\n            lineNumber: 99,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Paginacion, \"GQ3I5j+svsg9aa3C0XgMYifs/w4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Paginacion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paginacion);\nvar _c;\n$RefreshReg$(_c, \"Paginacion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYWNpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUVMO0FBRWE7QUFDMkI7QUFPMUUsTUFBTVEsYUFBOEI7UUFBQyxFQUFFQyxPQUFPLEVBQUU7O0lBRzVDLE1BQU1DLGVBQWU7SUFDckIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBRy9DLE1BQU1ZLGFBQWFDLEtBQUtDLEtBQUtiLDBDQUFJQSxDQUFDYyxTQUFTTjtJQUMzQyxNQUFNTyxZQUFZO0lBRWxCLE1BQU1DLGVBQWVYLGdFQUFlQTtJQUNwQyxNQUFNWSxTQUFTYiwwREFBU0E7SUFDeEIsTUFBTWMsV0FBV2YsNERBQVdBO0lBRTVCLE1BQU0sQ0FBQ2dCLEtBQUtDLE9BQU8sR0FBR3JCLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1zQixTQUFjTCxhQUFhTSxJQUFJO0lBR3JDcEIsZ0RBQVNBLENBQUM7UUFFTixJQUFJSyxTQUFTO1lBQ1RhLE9BQU9iLFVBQVU7UUFHckI7SUFHSixHQUFHO1FBQUNBO0tBQVE7SUFLWixNQUFNZ0Isb0JBQW9CdEIsa0RBQVdBLENBQ2pDLENBQUN1QixNQUFjQztRQUNYLE1BQU1DLFNBQVMsSUFBSUMsZ0JBQWdCWCxhQUFhWTtRQUNoREYsT0FBT0csSUFBSUwsTUFBTUM7UUFHakIsT0FBT0MsT0FBT0U7SUFDbEIsR0FDQSx3REFBd0Q7SUFDeEQ7UUFBQ1o7S0FBYTtJQUtsQixNQUFNYyxtQkFBbUIsQ0FBQ0MsSUFBWUMsSUFBWUM7UUFDOUNoQixPQUFPaUIsS0FBS2hCLFdBQVcsTUFBTUssa0JBQWtCUSxJQUFJQztRQUNuRHRCLGVBQWV1QjtJQUVuQjtJQVNBLE1BQU1FLGlCQUFpQjtRQUNuQixJQUFJZCxVQUFVTixZQUFZLEdBQUc7WUFDekIsT0FBT3FCLE1BQU1DLEtBQUs7Z0JBQUV2QixRQUFRRixLQUFLMEIsSUFBSXZCLFlBQVksSUFBSSxHQUFHSjtZQUFZLEdBQUcsQ0FBQzRCLEdBQUdDLFFBQVVBLFFBQVE7UUFDakc7UUFDQSxJQUFJbkIsVUFBVVYsYUFBYUksV0FBVztZQUNsQyxPQUFPcUIsTUFBTUMsS0FBSztnQkFBRXZCLFFBQVFDLFlBQVksSUFBSTtZQUFFLEdBQUcsQ0FBQ3dCLEdBQUdDLFFBQVU3QixhQUFhSSxZQUFZLElBQUl5QjtRQUNoRztRQUNBLE9BQU9KLE1BQU1DLEtBQUs7WUFBRXZCLFFBQVFDLFlBQVksSUFBSTtRQUFFLEdBQUcsQ0FBQ3dCLEdBQUdDLFFBQVVuQixTQUFTTixZQUFZeUI7SUFDeEY7SUFFQUMsUUFBUUMsSUFBSSxrQkFBa0JQO0lBUzlCLHFCQUNJO2tCQU9JLDRFQUFDUTtZQUFJQyxXQUFVOztnQkFFVnZCLFNBQVMsbUJBQ04sOERBQUN3QjtvQkFBT0MsU0FBUyxJQUFNaEIsaUJBQWlCLFFBQVEsR0FBbUIsT0FBaEJyQixjQUFjLElBQUtBLGNBQWM7b0JBQ2hGbUMsV0FBVzs4QkFBZTs7Ozs7O2dCQUVqQ3ZCLFNBQVNOLFlBQVksbUJBQ2xCLDhEQUFDOEI7b0JBQU9DLFNBQVMsSUFBTWhCLGlCQUFpQixRQUFRLEtBQUs7b0JBQUljLFdBQVU7OEJBQStCOzs7Ozs7Z0JBRXJHdkIsU0FBU04sWUFBWSxtQkFDbEIsOERBQUNnQztvQkFBS0gsV0FBVzs4QkFBb0U7Ozs7OztnQkFHeEZULGlCQUFpQmEsSUFBSWYsQ0FBQUEscUJBQ2xCLDhEQUFDWTt3QkFFR0MsU0FBUyxJQUFNaEIsaUJBQWlCLFFBQVEsR0FBUSxPQUFMRyxPQUFRQTt3QkFHbkRXLFdBQVdYLE9BQU8sTUFBTWQsTUFBTSxtRUFBbUU7a0NBRWhHYzt1QkFOSUE7Ozs7O2dCQVNaWixTQUFTVixhQUFhSSwyQkFDbkIsOERBQUNnQztvQkFBS0gsV0FBVzs4QkFBb0U7Ozs7OztnQkFHeEZ2QixTQUFTVixhQUFhSSwyQkFDbkIsOERBQUM4QjtvQkFBT0MsU0FBUyxJQUFNaEIsaUJBQWlCLFFBQVEsR0FBYyxPQUFYbkIsYUFBY0E7b0JBRTdEaUMsV0FBV2pDLGFBQWEsTUFBTVEsTUFBTSxtRUFBbUU7OEJBQ3pHUjs7Ozs7O2dCQUVMSixVQUFVSSw0QkFDUCw4REFBQ2tDO29CQUFPQyxTQUFTLElBQU1oQixpQkFBaUIsUUFBUSxHQUFtQixPQUFoQnJCLGNBQWMsSUFBS0EsY0FBYztvQkFDaEZtQyxXQUFXOzhCQUNkOzs7Ozs7Ozs7Ozs7O0FBU3JCO0dBcElNdEM7O1FBVW1CRCw0REFBZUE7UUFDckJELHNEQUFTQTtRQUNQRCx3REFBV0E7OztLQVoxQkc7QUF5SU4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYWNpb24udHN4PzY5NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RiL2RhdGEuanNvblwiXG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHNlYXJjaDE6IGFueVxufVxuXG5jb25zdCBQYWdpbmFjaW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZWFyY2gxIH0pID0+IHtcblxuXG4gICAgY29uc3QgaXRlbXNQZXJQYWdlID0gMTI7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XG4gICAgY29uc3QgcGFnZVJhbmdlID0gMjtcblxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG5cbiAgICBjb25zdCBbaWR4LCBzZXRJZHhdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBzZWFyY2g6IGFueSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGlmIChzZWFyY2gxKSB7XG4gICAgICAgICAgICBzZXRJZHgoc2VhcmNoMSAtIDEpXG5cblxuICAgICAgICB9XG5cblxuICAgIH0sIFtzZWFyY2gxXSlcblxuXG5cblxuICAgIGNvbnN0IGNyZWF0ZVF1ZXJ5U3RyaW5nID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBwYXJhbXMuc2V0KG5hbWUsIHZhbHVlKVxuXG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICAvLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgICBbc2VhcmNoUGFyYW1zXVxuICAgIClcblxuXG5cbiAgICBjb25zdCBoYW5kbGVQYWdpbmFjaW9uID0gKHBhOiBzdHJpbmcsIGdlOiBzdHJpbmcsIHBhZ2U6IGFueSkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChwYXRobmFtZSArICc/JyArIGNyZWF0ZVF1ZXJ5U3RyaW5nKHBhLCBnZSkpXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpXG5cbiAgICB9XG5cblxuXG5cblxuXG5cblxuICAgIGNvbnN0IGdldFBhZ2VOdW1iZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoIDw9IHBhZ2VSYW5nZSArIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLm1pbihwYWdlUmFuZ2UgKiAyICsgMSwgdG90YWxQYWdlcykgfSwgKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2ggPj0gdG90YWxQYWdlcyAtIHBhZ2VSYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHBhZ2VSYW5nZSAqIDIgKyAxIH0sIChfLCBpbmRleCkgPT4gdG90YWxQYWdlcyAtIHBhZ2VSYW5nZSAqIDIgKyBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHBhZ2VSYW5nZSAqIDIgKyAxIH0sIChfLCBpbmRleCkgPT4gc2VhcmNoIC0gcGFnZVJhbmdlICsgaW5kZXgpO1xuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcInRvZGFsIGFjdHVhbGVzXCIsIGdldFBhZ2VOdW1iZXJzKCkpO1xuXG5cblxuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIDxidXR0b24ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmFjaW9uKFwicGFnZVwiLCBgJHtpdGVtfWApfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aWR4ID09PSBpID8gJyBob3ZlcjpiZy1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIHctOSBoLTggIGJnLWJsYWNrICB0ZXh0LXdoaXRlJyA6ICcgaG92ZXI6YmcteWVsbG93LTMwMCAgdy05IGgtOCd9XG4gICAgICAgICAgICA+e2l0ZW19PC9idXR0b24+ICovfVxuXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBmbGV4IGp1c3RpZnktZW5kICBnYXAteC0xIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHVuZGVybGluZSBib3JkZXItcmVkLTcwMCBib3JkZXItMlwiPlxuXG4gICAgICAgICAgICAgICAge3NlYXJjaCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYWNpb24oXCJwYWdlXCIsIGAke2N1cnJlbnRQYWdlIC0gMX1gLCBjdXJyZW50UGFnZSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnICB3LTkgaC04ICd9ID4mbHQ7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7c2VhcmNoID4gcGFnZVJhbmdlICsgMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hY2lvbihcInBhZ2VcIiwgXCIxXCIsIDEpfSBjbGFzc05hbWU9XCJob3ZlcjpiZy15ZWxsb3ctMzAwIHctOSBoLThcIiA+MSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtzZWFyY2ggPiBwYWdlUmFuZ2UgKyAyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnIGZsZXgganVzdGlmeS1jZW50ZXIgIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy15ZWxsb3ctMzAwIHctOSBoLTggJ30gPi4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge2dldFBhZ2VOdW1iZXJzKCkubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmFjaW9uKFwicGFnZVwiLCBgJHtwYWdlfWAsIHBhZ2UpfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZSAtIDEgPT09IGlkeCA/ICcgaG92ZXI6YmctYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSB3LTkgaC04ICBiZy1ibGFjayAgdGV4dC13aGl0ZScgOiAnIGhvdmVyOmJnLXllbGxvdy0zMDAgIHctOSBoLTgnfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge3NlYXJjaCA8IHRvdGFsUGFnZXMgLSBwYWdlUmFuZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eycgIGZsZXgganVzdGlmeS1jZW50ZXIgIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy15ZWxsb3ctMzAwIHctOSBoLTggJ30+Li4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c2VhcmNoIDwgdG90YWxQYWdlcyAtIHBhZ2VSYW5nZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hY2lvbihcInBhZ2VcIiwgYCR7dG90YWxQYWdlc31gLCB0b3RhbFBhZ2VzKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0b3RhbFBhZ2VzIC0gMSA9PT0gaWR4ID8gJyBob3ZlcjpiZy1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIHctOSBoLTggIGJnLWJsYWNrICB0ZXh0LXdoaXRlJyA6ICcgaG92ZXI6YmcteWVsbG93LTMwMCAgdy05IGgtOCd9XG4gICAgICAgICAgICAgICAgICAgID57dG90YWxQYWdlc308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtzZWFyY2gxIDwgdG90YWxQYWdlcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hY2lvbihcInBhZ2VcIiwgYCR7Y3VycmVudFBhZ2UgKyAxfWAsIGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycgICB3LTkgaC04ICAnfVxuICAgICAgICAgICAgICAgICAgICA+Jmd0OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYWNpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImRhdGEiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiUGFnaW5hY2lvbiIsInNlYXJjaDEiLCJpdGVtc1BlclBhZ2UiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnZVJhbmdlIiwic2VhcmNoUGFyYW1zIiwicm91dGVyIiwicGF0aG5hbWUiLCJpZHgiLCJzZXRJZHgiLCJzZWFyY2giLCJnZXQiLCJjcmVhdGVRdWVyeVN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwic2V0IiwiaGFuZGxlUGFnaW5hY2lvbiIsInBhIiwiZ2UiLCJwYWdlIiwicHVzaCIsImdldFBhZ2VOdW1iZXJzIiwiQXJyYXkiLCJmcm9tIiwibWluIiwiXyIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/paginacion.tsx\n"));

/***/ })

});