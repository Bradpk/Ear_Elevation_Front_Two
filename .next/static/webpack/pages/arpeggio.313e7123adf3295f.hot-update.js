/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/arpeggio",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/arpeggio.module.css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/arpeggio.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".arpeggio_correct__shfi_ {\\n    background-color: lightgreen\\n}\\n\\n.arpeggio_incorrect__fU4a3 {\\n    background-color: rgb(255, 78, 78)\\n}\\n\\n.arpeggio_container__9nI2h {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    margin-top: 50px;\\n    padding: 20px; \\n    font-size: 20px; \\n    font-family:'Courier New', Courier, monospace\\n}\\n\\n.arpeggio_buttonGrid__E1TFf {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr); \\n    grid-gap: 10px;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n\\n.arpeggio_button__9wMrA {\\n    margin: 10px; \\n    padding: 15px 30px; \\n    font-size: inherit; \\n    border: none; \\n    border-radius: 10px;\\n    color: rgb(240, 247, 254);\\n    background-color: rgb(38, 115, 148);;\\n}\\n\\n.arpeggio_button__9wMrA:hover {\\n    background-color: rgb(50, 150, 200);\\n}\\n\\n.arpeggio_arpeggioButton__i3TEb {\\n    margin: 10px;\\n    padding: 15px 30px; \\n    font-size: inherit;\\n    border: none; \\n    border-radius: 10px;\\n    color: rgb(38, 115, 148);;\\n}\\n\\n.arpeggio_intervalButton__1Eybq:hover:not(.arpeggio_correct__shfi_):not(.arpeggio_incorrect__fU4a3) {\\n    background-color: rgba(38, 115, 148, 0.1);\\n}\\n\\n.arpeggio_stats__kbdx3 {\\n    font-size: 20px;\\n    margin-top: 10px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/arpeggio.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf;AACJ;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,uBAAuB;IACvB,gBAAgB;AACpB;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB\",\"sourcesContent\":[\".correct {\\n    background-color: lightgreen\\n}\\n\\n.incorrect {\\n    background-color: rgb(255, 78, 78)\\n}\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    margin-top: 50px;\\n    padding: 20px; \\n    font-size: 20px; \\n    font-family:'Courier New', Courier, monospace\\n}\\n\\n.buttonGrid {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr); \\n    grid-gap: 10px;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n\\n.button {\\n    margin: 10px; \\n    padding: 15px 30px; \\n    font-size: inherit; \\n    border: none; \\n    border-radius: 10px;\\n    color: rgb(240, 247, 254);\\n    background-color: rgb(38, 115, 148);;\\n}\\n\\n.button:hover {\\n    background-color: rgb(50, 150, 200);\\n}\\n\\n.arpeggioButton {\\n    margin: 10px;\\n    padding: 15px 30px; \\n    font-size: inherit;\\n    border: none; \\n    border-radius: 10px;\\n    color: rgb(38, 115, 148);;\\n}\\n\\n.intervalButton:hover:not(.correct):not(.incorrect) {\\n    background-color: rgba(38, 115, 148, 0.1);\\n}\\n\\n.stats {\\n    font-size: 20px;\\n    margin-top: 10px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"correct\": \"arpeggio_correct__shfi_\",\n\t\"incorrect\": \"arpeggio_incorrect__fU4a3\",\n\t\"container\": \"arpeggio_container__9nI2h\",\n\t\"buttonGrid\": \"arpeggio_buttonGrid__E1TFf\",\n\t\"button\": \"arpeggio_button__9wMrA\",\n\t\"arpeggioButton\": \"arpeggio_arpeggioButton__i3TEb\",\n\t\"intervalButton\": \"arpeggio_intervalButton__1Eybq\",\n\t\"stats\": \"arpeggio_stats__kbdx3\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9hcnBlZ2dpby5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSxvRUFBb0UscUNBQXFDLGdDQUFnQywyQ0FBMkMsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix1QkFBdUIscUJBQXFCLHVCQUF1QixzREFBc0QsaUNBQWlDLG9CQUFvQiw2Q0FBNkMscUJBQXFCLDhCQUE4Qix1QkFBdUIsR0FBRywrQkFBK0Isb0JBQW9CLDBCQUEwQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixnQ0FBZ0MsMkNBQTJDLEdBQUcsbUNBQW1DLDBDQUEwQyxHQUFHLHFDQUFxQyxtQkFBbUIsMEJBQTBCLHlCQUF5QixvQkFBb0IsMEJBQTBCLGdDQUFnQyxHQUFHLHlHQUF5RyxnREFBZ0QsR0FBRyw0QkFBNEIsc0JBQXNCLHVCQUF1QixHQUFHLE9BQU8sK0ZBQStGLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLG9DQUFvQyxxQ0FBcUMsZ0JBQWdCLDJDQUEyQyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLHNEQUFzRCxpQkFBaUIsb0JBQW9CLDZDQUE2QyxxQkFBcUIsOEJBQThCLHVCQUF1QixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixnQ0FBZ0MsMkNBQTJDLEdBQUcsbUJBQW1CLDBDQUEwQyxHQUFHLHFCQUFxQixtQkFBbUIsMEJBQTBCLHlCQUF5QixvQkFBb0IsMEJBQTBCLGdDQUFnQyxHQUFHLHlEQUF5RCxnREFBZ0QsR0FBRyxZQUFZLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDbi9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2FycGVnZ2lvLm1vZHVsZS5jc3M/YTQ0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFycGVnZ2lvX2NvcnJlY3RfX3NoZmlfIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlblxcbn1cXG5cXG4uYXJwZWdnaW9faW5jb3JyZWN0X19mVTRhMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc4LCA3OClcXG59XFxuXFxuLmFycGVnZ2lvX2NvbnRhaW5lcl9fOW5JMmgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgcGFkZGluZzogMjBweDsgXFxuICAgIGZvbnQtc2l6ZTogMjBweDsgXFxuICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZVxcbn1cXG5cXG4uYXJwZWdnaW9fYnV0dG9uR3JpZF9fRTFURmYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5cXG4uYXJwZWdnaW9fYnV0dG9uX185d01yQSB7XFxuICAgIG1hcmdpbjogMTBweDsgXFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDsgXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgXFxuICAgIGJvcmRlcjogbm9uZTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDcsIDI1NCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMTE1LCAxNDgpOztcXG59XFxuXFxuLmFycGVnZ2lvX2J1dHRvbl9fOXdNckE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDE1MCwgMjAwKTtcXG59XFxuXFxuLmFycGVnZ2lvX2FycGVnZ2lvQnV0dG9uX19pM1RFYiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4OyBcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogcmdiKDM4LCAxMTUsIDE0OCk7O1xcbn1cXG5cXG4uYXJwZWdnaW9faW50ZXJ2YWxCdXR0b25fXzFFeWJxOmhvdmVyOm5vdCguYXJwZWdnaW9fY29ycmVjdF9fc2hmaV8pOm5vdCguYXJwZWdnaW9faW5jb3JyZWN0X19mVTRhMykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxMTUsIDE0OCwgMC4xKTtcXG59XFxuXFxuLmFycGVnZ2lvX3N0YXRzX19rYmR4MyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvYXJwZWdnaW8ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW5cXG59XFxuXFxuLmluY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc4LCA3OClcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG4gICAgZm9udC1zaXplOiAyMHB4OyBcXG4gICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlXFxufVxcblxcbi5idXR0b25HcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgXFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuXFxuLmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweDsgXFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDsgXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgXFxuICAgIGJvcmRlcjogbm9uZTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDcsIDI1NCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMTE1LCAxNDgpOztcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTUwLCAyMDApO1xcbn1cXG5cXG4uYXJwZWdnaW9CdXR0b24ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDsgXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHJnYigzOCwgMTE1LCAxNDgpOztcXG59XFxuXFxuLmludGVydmFsQnV0dG9uOmhvdmVyOm5vdCguY29ycmVjdCk6bm90KC5pbmNvcnJlY3QpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTE1LCAxNDgsIDAuMSk7XFxufVxcblxcbi5zdGF0cyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29ycmVjdFwiOiBcImFycGVnZ2lvX2NvcnJlY3RfX3NoZmlfXCIsXG5cdFwiaW5jb3JyZWN0XCI6IFwiYXJwZWdnaW9faW5jb3JyZWN0X19mVTRhM1wiLFxuXHRcImNvbnRhaW5lclwiOiBcImFycGVnZ2lvX2NvbnRhaW5lcl9fOW5JMmhcIixcblx0XCJidXR0b25HcmlkXCI6IFwiYXJwZWdnaW9fYnV0dG9uR3JpZF9fRTFURmZcIixcblx0XCJidXR0b25cIjogXCJhcnBlZ2dpb19idXR0b25fXzl3TXJBXCIsXG5cdFwiYXJwZWdnaW9CdXR0b25cIjogXCJhcnBlZ2dpb19hcnBlZ2dpb0J1dHRvbl9faTNURWJcIixcblx0XCJpbnRlcnZhbEJ1dHRvblwiOiBcImFycGVnZ2lvX2ludGVydmFsQnV0dG9uX18xRXlicVwiLFxuXHRcInN0YXRzXCI6IFwiYXJwZWdnaW9fc3RhdHNfX2tiZHgzXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/arpeggio.module.css\n"));

/***/ })

});