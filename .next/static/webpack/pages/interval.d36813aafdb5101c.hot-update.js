"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/interval",{

/***/ "./src/pages/interval.js":
/*!*******************************!*\
  !*** ./src/pages/interval.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _interval_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interval.module.css */ \"./src/pages/interval.module.css\");\n/* harmony import */ var _interval_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_interval_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst IntervalGenerator = ()=>{\n    _s();\n    const [generatedInterval, setGeneratedInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [previousInterval, setPreviousInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedInterval, setSelectedInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [attemptedQuestions, setAttemptedQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [correctAnswers, setCorrectAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const intervals = [\n        \"m2\",\n        \"M2\",\n        \"m3\",\n        \"M3\",\n        \"P4\",\n        \"D5\",\n        \"P5\",\n        \"m6\",\n        \"M6\",\n        \"m7\",\n        \"M7\",\n        \"P8\"\n    ];\n    const generateRandomInterval = ()=>{\n        let randomInterval = previousInterval;\n        while(randomInterval === previousInterval){\n            randomInterval = intervals[Math.floor(Math.random() * intervals.length)];\n        }\n        setGeneratedInterval(randomInterval);\n        setPreviousInterval(randomInterval);\n        playInterval(randomInterval);\n    };\n    const playInterval = (interval)=>{\n        const synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth().toDestination();\n        const now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        switch(interval){\n            case \"m2\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"C#4\", \"4n\", now + 0.5);\n                break;\n            case \"M2\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"D4\", \"4n\", now + 0.5);\n                break;\n            case \"m3\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"D#4\", \"4n\", now + 0.5);\n                break;\n            case \"M3\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"E4\", \"4n\", now + 0.5);\n                break;\n            case \"P4\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"F4\", \"4n\", now + 0.5);\n                break;\n            case \"D5\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"F#4\", \"4n\", now + 0.5);\n                break;\n            case \"P5\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"G4\", \"4n\", now + 0.5);\n                break;\n            case \"m6\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"G#4\", \"4n\", now + 0.5);\n                break;\n            case \"M6\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"A4\", \"4n\", now + 0.5);\n                break;\n            case \"m7\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"A#4\", \"4n\", now + 0.5);\n                break;\n            case \"M7\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"B4\", \"4n\", now + 0.5);\n                break;\n            case \"P8\":\n                synth.triggerAttackRelease(\"C4\", \"4n\", now);\n                synth.triggerAttackRelease(\"C5\", \"4n\", now + 0.5);\n                break;\n            default:\n                break;\n        }\n    };\n    const handleIntervalSelection = (interval, index)=>{\n        setSelectedInterval(interval);\n        setAttemptedQuestions(attemptedQuestions + 1);\n        if (interval === generatedInterval) {\n            setCorrectAnswers(correctAnswers + 1);\n            generateRandomInterval();\n            document.getElementById(\"intervalButton-\".concat(index)).classList.add((_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().correct));\n            setTimeout(()=>{\n                document.getElementById(\"intervalButton-\".concat(index)).classList.remove((_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().correct));\n            }, 400);\n        } else {\n            document.getElementById(\"intervalButton-\".concat(index)).classList.add((_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().incorrect));\n            setTimeout(()=>{\n                document.getElementById(\"intervalButton-\".concat(index)).classList.remove((_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().incorrect));\n            }, 400);\n        }\n    };\n    const intervalButtons = intervals.map((interval, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            id: \"intervalButton-\".concat(index),\n            onClick: ()=>handleIntervalSelection(interval, index),\n            className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().intervalButton),\n            children: interval\n        }, index, false, {\n            fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n            lineNumber: 105,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),\n                        children: \"Interval Generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: generateRandomInterval,\n                        className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        children: \"Generate Random Interval\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().space)\n                    }, void 0, false, {\n                        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>playInterval(generatedInterval),\n                        className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        children: \"Replay Interval\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGrid),\n                        children: intervalButtons\n                    }, void 0, false, {\n                        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                        lineNumber: 123,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_interval_module_css__WEBPACK_IMPORTED_MODULE_4___default().stats),\n                        children: [\n                            \"Attempted: \",\n                            attemptedQuestions,\n                            \" | Correct: \",\n                            correctAnswers\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                        lineNumber: 126,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bradk/Documents/GitHub/Ear_Elevation_Front_Two/src/pages/interval.js\",\n        lineNumber: 116,\n        columnNumber: 9\n    }, undefined);\n};\n_s(IntervalGenerator, \"XQxLW5EJDk8Ju0D9T0M8GuSZF8o=\");\n_c = IntervalGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IntervalGenerator);\nvar _c;\n$RefreshReg$(_c, \"IntervalGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsV0FBV3pDLG9FQUFhO2tDQUFFOzs7Ozs7a0NBQ25FLDhEQUFDMkM7d0JBQUlGLFdBQVd6QyxtRUFBWTs7Ozs7O2tDQUM1Qiw4REFBQ3NDO3dCQUFPRSxTQUFTLElBQU1yQixhQUFhakI7d0JBQW9CdUMsV0FBV3pDLG9FQUFhO2tDQUFFOzs7Ozs7a0NBQ2xGLDhEQUFDMkM7d0JBQUlGLFdBQVd6Qyx3RUFBaUI7a0NBQzVCb0M7Ozs7OztrQ0FFTCw4REFBQ2E7d0JBQUVSLFdBQVd6QyxtRUFBWTs7NEJBQUU7NEJBQVlROzRCQUFtQjs0QkFBYUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEY7R0E1SE1UO0tBQUFBO0FBNkhOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ludGVydmFsLmpzPzRjNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVG9uZSBmcm9tICd0b25lJztcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW50ZXJ2YWwubW9kdWxlLmNzcyc7IFxuXG5jb25zdCBJbnRlcnZhbEdlbmVyYXRvciA9ICgpID0+IHtcbiAgICBjb25zdCBbZ2VuZXJhdGVkSW50ZXJ2YWwsIHNldEdlbmVyYXRlZEludGVydmFsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcHJldmlvdXNJbnRlcnZhbCwgc2V0UHJldmlvdXNJbnRlcnZhbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkSW50ZXJ2YWwsIHNldFNlbGVjdGVkSW50ZXJ2YWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthdHRlbXB0ZWRRdWVzdGlvbnMsIHNldEF0dGVtcHRlZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY29ycmVjdEFuc3dlcnMsIHNldENvcnJlY3RBbnN3ZXJzXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaW50ZXJ2YWxzID0gWydtMicsICdNMicsICdtMycsICdNMycsICdQNCcsICdENScsICdQNScsICdtNicsICdNNicsICdtNycsICdNNycsICdQOCddO1xuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21JbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbUludGVydmFsID0gcHJldmlvdXNJbnRlcnZhbDtcbiAgICAgICAgd2hpbGUgKHJhbmRvbUludGVydmFsID09PSBwcmV2aW91c0ludGVydmFsKSB7XG4gICAgICAgICAgICByYW5kb21JbnRlcnZhbCA9IGludGVydmFsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbnRlcnZhbHMubGVuZ3RoKV07XG4gICAgICAgIH1cblxuICAgICAgICBzZXRHZW5lcmF0ZWRJbnRlcnZhbChyYW5kb21JbnRlcnZhbCk7XG4gICAgICAgIHNldFByZXZpb3VzSW50ZXJ2YWwocmFuZG9tSW50ZXJ2YWwpO1xuICAgICAgICBwbGF5SW50ZXJ2YWwocmFuZG9tSW50ZXJ2YWwpO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5SW50ZXJ2YWwgPSAoaW50ZXJ2YWwpID0+IHtcbiAgICAgICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcbiAgICAgICAgY29uc3Qgbm93ID0gVG9uZS5ub3coKTtcblxuXG4gICAgICAgIHN3aXRjaCAoaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNhc2UgJ20yJzpcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzQnLCAnNG4nLCBub3cpO1xuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdDIzQnLCAnNG4nLCBub3cgKyAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTTInOlxuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdDNCcsICc0bicsIG5vdyk7XG4gICAgICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoJ0Q0JywgJzRuJywgbm93ICsgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20zJzpcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzQnLCAnNG4nLCBub3cpO1xuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdEIzQnLCAnNG4nLCBub3cgKyAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTTMnOlxuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdDNCcsICc0bicsIG5vdyk7XG4gICAgICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoJ0U0JywgJzRuJywgbm93ICsgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1A0JzpcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzQnLCAnNG4nLCBub3cpO1xuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdGNCcsICc0bicsIG5vdyArIDAuNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdENSc6XG4gICAgICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoJ0M0JywgJzRuJywgbm93KTtcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnRiM0JywgJzRuJywgbm93ICsgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1A1JzpcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzQnLCAnNG4nLCBub3cpO1xuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdHNCcsICc0bicsIG5vdyArIDAuNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtNic6XG4gICAgICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoJ0M0JywgJzRuJywgbm93KTtcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnRyM0JywgJzRuJywgbm93ICsgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ002JzpcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzQnLCAnNG4nLCBub3cpO1xuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdBNCcsICc0bicsIG5vdyArIDAuNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtNyc6XG4gICAgICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoJ0M0JywgJzRuJywgbm93KTtcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQSM0JywgJzRuJywgbm93ICsgMC41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ003JzpcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzQnLCAnNG4nLCBub3cpO1xuICAgICAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKCdCNCcsICc0bicsIG5vdyArIDAuNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQOCc6XG4gICAgICAgICAgICAgICAgc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoJ0M0JywgJzRuJywgbm93KTtcbiAgICAgICAgICAgICAgICBzeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZSgnQzUnLCAnNG4nLCBub3cgKyAwLjUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJbnRlcnZhbFNlbGVjdGlvbiA9IChpbnRlcnZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHNldEF0dGVtcHRlZFF1ZXN0aW9ucyhhdHRlbXB0ZWRRdWVzdGlvbnMgKyAxKTtcbiAgICBcbiAgICAgICAgaWYgKGludGVydmFsID09PSBnZW5lcmF0ZWRJbnRlcnZhbCkge1xuICAgICAgICAgICAgc2V0Q29ycmVjdEFuc3dlcnMoY29ycmVjdEFuc3dlcnMgKyAxKTtcbiAgICAgICAgICAgIGdlbmVyYXRlUmFuZG9tSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnRlcnZhbEJ1dHRvbi0ke2luZGV4fWApLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNvcnJlY3QpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGludGVydmFsQnV0dG9uLSR7aW5kZXh9YCkuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuY29ycmVjdCk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGludGVydmFsQnV0dG9uLSR7aW5kZXh9YCkuY2xhc3NMaXN0LmFkZChzdHlsZXMuaW5jb3JyZWN0KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnRlcnZhbEJ1dHRvbi0ke2luZGV4fWApLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmluY29ycmVjdCk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGludGVydmFsQnV0dG9ucyA9IGludGVydmFscy5tYXAoKGludGVydmFsLCBpbmRleCkgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaWQ9e2BpbnRlcnZhbEJ1dHRvbi0ke2luZGV4fWB9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSW50ZXJ2YWxTZWxlY3Rpb24oaW50ZXJ2YWwsIGluZGV4KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmludGVydmFsQnV0dG9ufSBcbiAgICAgICAgPlxuICAgICAgICAgICAge2ludGVydmFsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+IFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5JbnRlcnZhbCBHZW5lcmF0b3I8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2VuZXJhdGVSYW5kb21JbnRlcnZhbH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5HZW5lcmF0ZSBSYW5kb20gSW50ZXJ2YWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHBsYXlJbnRlcnZhbChnZW5lcmF0ZWRJbnRlcnZhbCl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+UmVwbGF5IEludGVydmFsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25HcmlkfT5cbiAgICAgICAgICAgICAgICAgICAge2ludGVydmFsQnV0dG9uc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+QXR0ZW1wdGVkOiB7YXR0ZW1wdGVkUXVlc3Rpb25zfSB8IENvcnJlY3Q6IHtjb3JyZWN0QW5zd2Vyc308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbnRlcnZhbEdlbmVyYXRvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9uZSIsIk5hdmJhciIsInN0eWxlcyIsIkludGVydmFsR2VuZXJhdG9yIiwiZ2VuZXJhdGVkSW50ZXJ2YWwiLCJzZXRHZW5lcmF0ZWRJbnRlcnZhbCIsInByZXZpb3VzSW50ZXJ2YWwiLCJzZXRQcmV2aW91c0ludGVydmFsIiwic2VsZWN0ZWRJbnRlcnZhbCIsInNldFNlbGVjdGVkSW50ZXJ2YWwiLCJhdHRlbXB0ZWRRdWVzdGlvbnMiLCJzZXRBdHRlbXB0ZWRRdWVzdGlvbnMiLCJjb3JyZWN0QW5zd2VycyIsInNldENvcnJlY3RBbnN3ZXJzIiwiaW50ZXJ2YWxzIiwiZ2VuZXJhdGVSYW5kb21JbnRlcnZhbCIsInJhbmRvbUludGVydmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicGxheUludGVydmFsIiwiaW50ZXJ2YWwiLCJzeW50aCIsIlN5bnRoIiwidG9EZXN0aW5hdGlvbiIsIm5vdyIsInRyaWdnZXJBdHRhY2tSZWxlYXNlIiwiaGFuZGxlSW50ZXJ2YWxTZWxlY3Rpb24iLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb3JyZWN0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImluY29ycmVjdCIsImludGVydmFsQnV0dG9ucyIsIm1hcCIsImJ1dHRvbiIsImlkIiwib25DbGljayIsImNsYXNzTmFtZSIsImludGVydmFsQnV0dG9uIiwiZGl2IiwiY29udGFpbmVyIiwiaDIiLCJoZWFkaW5nIiwic3BhY2UiLCJidXR0b25HcmlkIiwicCIsInN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/interval.js\n"));

/***/ })

});