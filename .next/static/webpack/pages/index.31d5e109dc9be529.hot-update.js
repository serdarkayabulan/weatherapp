"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useForecast.ts":
/*!******************************!*\
  !*** ./hooks/useForecast.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BASE_URL = \"http://api.openweathermap.org\";\nconst useForecast = ()=>{\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [term, setTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [forecast, setForecast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const getSearchOptions = async (term)=>{\n        fetch(\"\".concat(BASE_URL, \"/geo/1.0/direct?q=\").concat(term.trim(), \"&limit=3&lang=en&appid=\").concat(\"API KEY\")).then((res)=>res.json()).then((data)=>setOptions(data)).catch((e)=>console.log({\n                e\n            }));\n    };\n    const onSubmit = ()=>{\n        if (!city) return;\n        getForecast(city);\n    };\n    const getForecast = (data)=>{\n        fetch(\"\".concat(BASE_URL, \"/data/2.5/forecast?lat=\").concat(data.lat, \"&lon=\").concat(data.lon, \"&units=metric&lang=en&appid=\").concat(\"API KEY\")).then((res)=>res.json()).then((data)=>{\n            const forecastData = {\n                ...data.city,\n                list: data.list.slice(0, 16)\n            };\n            console.log(forecastData);\n            setForecast(forecastData);\n        }).catch((e)=>console.log({\n                e\n            }));\n    };\n    const onOptionSelect = (option)=>{\n        setCity(option);\n    };\n    const onInputChange = (e)=>{\n        const value = e.target.value.trim();\n        setTerm(e.target.value);\n        if (value !== \"\") {\n            getSearchOptions(value);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (city) {\n            setTerm(city.name);\n            setOptions([]);\n        }\n    }, [\n        city\n    ]);\n    return {\n        forecast,\n        options,\n        term,\n        onOptionSelect,\n        onSubmit,\n        onInputChange\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useForecast);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VGb3JlY2FzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBd0Q7QUFJeEQsTUFBTUUsV0FBVztBQUVqQixNQUFNQyxjQUFjO0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBb0I7SUFDcEQsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBSyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBc0I7SUFFOUQsTUFBTVksbUJBQW1CLE9BQU9OO1FBQzlCTyxNQUNFLEdBQWdDUCxPQUE3QkosVUFBUyxzQkFDVlksT0FEOEJSLEtBQUtTLElBQUksSUFBRywyQkFFM0MsT0FEQ0QsU0FBbUMsR0FHcENJLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csT0FBU1osV0FBV1ksT0FDMUJDLEtBQUssQ0FBQyxDQUFDQyxJQUFNQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVGO1lBQUU7SUFDbEM7SUFFQSxNQUFNRyxXQUFXO1FBQ2YsSUFBSSxDQUFDdEIsTUFBTTtRQUVYdUIsWUFBWXZCO0lBQ2Q7SUFFQSxNQUFNdUIsY0FBYyxDQUFDTjtRQUNuQlIsTUFDRSxHQUFxQ1EsT0FBbENuQixVQUFTLDJCQUF5Q21CLE9BQWhCQSxLQUFLTyxHQUFHLEVBQUMsU0FBOENkLE9BQXZDTyxLQUFLUSxHQUFHLEVBQUMsZ0NBQWtFLE9BQXBDZixTQUFtQyxHQUU5SEksSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNMLE1BQU1TLGVBQWU7Z0JBQ25CLEdBQUdULEtBQUtqQixJQUFJO2dCQUNaMkIsTUFBTVYsS0FBS1UsSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRztZQUMzQjtZQUNBUixRQUFRQyxHQUFHLENBQUNLO1lBQ1puQixZQUFZbUI7UUFDZCxHQUNDUixLQUFLLENBQUMsQ0FBQ0MsSUFBTUMsUUFBUUMsR0FBRyxDQUFDO2dCQUFFRjtZQUFFO0lBQ2xDO0lBRUEsTUFBTVUsaUJBQWlCLENBQUNDO1FBQ3RCN0IsUUFBUTZCO0lBRVY7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ1o7UUFDckIsTUFBTWEsUUFBUWIsRUFBRWMsTUFBTSxDQUFDRCxLQUFLLENBQUNyQixJQUFJO1FBQ2pDUixRQUFRZ0IsRUFBRWMsTUFBTSxDQUFDRCxLQUFLO1FBRXRCLElBQUlBLFVBQVUsSUFBSTtZQUNoQnhCLGlCQUFpQndCO1FBQ25CO0lBQ0Y7SUFFQW5DLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUcsTUFBTTtZQUNSRyxRQUFRSCxLQUFLa0MsSUFBSTtZQUNqQjdCLFdBQVcsRUFBRTtRQUNmO0lBQ0YsR0FBRztRQUFDTDtLQUFLO0lBRVQsT0FBTztRQUNMTTtRQUNBRjtRQUNBRjtRQUNBMkI7UUFDQVA7UUFDQVM7SUFDRjtBQUNGO0FBRUEsK0RBQWVoQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUZvcmVjYXN0LnRzPzMzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IG9wdGlvblR5cGUsIGZvcmVjYXN0VHlwZSB9IGZyb20gJy4vLi4vdHlwZXMvaW5kZXgnXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZydcclxuXHJcbmNvbnN0IHVzZUZvcmVjYXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPG9wdGlvblR5cGUgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8W10+KFtdKVxyXG4gIGNvbnN0IFtmb3JlY2FzdCwgc2V0Rm9yZWNhc3RdID0gdXNlU3RhdGU8Zm9yZWNhc3RUeXBlIHwgbnVsbD4obnVsbClcclxuXHJcbiAgY29uc3QgZ2V0U2VhcmNoT3B0aW9ucyA9IGFzeW5jICh0ZXJtOiBzdHJpbmcpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgJHtCQVNFX1VSTH0vZ2VvLzEuMC9kaXJlY3Q/cT0ke3Rlcm0udHJpbSgpfSZsaW1pdD0zJmxhbmc9ZW4mYXBwaWQ9JHtcclxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XRUFUSEVSX0tFWVxyXG4gICAgICB9YFxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0T3B0aW9ucyhkYXRhKSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyh7IGUgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGlmICghY2l0eSkgcmV0dXJuXHJcblxyXG4gICAgZ2V0Rm9yZWNhc3QoY2l0eSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gKGRhdGE6IG9wdGlvblR5cGUpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgJHtCQVNFX1VSTH0vZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7ZGF0YS5sYXR9Jmxvbj0ke2RhdGEubG9ufSZ1bml0cz1tZXRyaWMmbGFuZz1lbiZhcHBpZD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dFQVRIRVJfS0VZfWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSB7XHJcbiAgICAgICAgICAuLi5kYXRhLmNpdHksXHJcbiAgICAgICAgICBsaXN0OiBkYXRhLmxpc3Quc2xpY2UoMCwgMTYpLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpXHJcbiAgICAgICAgc2V0Rm9yZWNhc3QoZm9yZWNhc3REYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKHsgZSB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uT3B0aW9uU2VsZWN0ID0gKG9wdGlvbjogb3B0aW9uVHlwZSkgPT4ge1xyXG4gICAgc2V0Q2l0eShvcHRpb24pXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpXHJcbiAgICBzZXRUZXJtKGUudGFyZ2V0LnZhbHVlKVxyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcclxuICAgICAgZ2V0U2VhcmNoT3B0aW9ucyh2YWx1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2l0eSkge1xyXG4gICAgICBzZXRUZXJtKGNpdHkubmFtZSlcclxuICAgICAgc2V0T3B0aW9ucyhbXSlcclxuICAgIH1cclxuICB9LCBbY2l0eV0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmb3JlY2FzdCxcclxuICAgIG9wdGlvbnMsXHJcbiAgICB0ZXJtLFxyXG4gICAgb25PcHRpb25TZWxlY3QsXHJcbiAgICBvblN1Ym1pdCxcclxuICAgIG9uSW5wdXRDaGFuZ2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGb3JlY2FzdCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJBU0VfVVJMIiwidXNlRm9yZWNhc3QiLCJjaXR5Iiwic2V0Q2l0eSIsInRlcm0iLCJzZXRUZXJtIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmb3JlY2FzdCIsInNldEZvcmVjYXN0IiwiZ2V0U2VhcmNoT3B0aW9ucyIsImZldGNoIiwicHJvY2VzcyIsInRyaW0iLCJlbnYiLCJORVhUX1BVQkxJQ19XRUFUSEVSX0tFWSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImdldEZvcmVjYXN0IiwibGF0IiwibG9uIiwiZm9yZWNhc3REYXRhIiwibGlzdCIsInNsaWNlIiwib25PcHRpb25TZWxlY3QiLCJvcHRpb24iLCJvbklucHV0Q2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useForecast.ts\n"));

/***/ })

});