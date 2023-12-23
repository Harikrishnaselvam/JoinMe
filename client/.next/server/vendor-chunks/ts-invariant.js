"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ts-invariant";
exports.ids = ["vendor-chunks/ts-invariant"];
exports.modules = {

/***/ "(ssr)/./node_modules/ts-invariant/lib/invariant.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvariantError: () => (/* binding */ InvariantError),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   invariant: () => (/* binding */ invariant),\n/* harmony export */   setVerbosity: () => (/* binding */ setVerbosity)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n\nvar genericMessage = \"Invariant Violation\";\nvar _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function(obj, proto) {\n    obj.__proto__ = proto;\n    return obj;\n} : _a;\nvar InvariantError = /** @class */ function(_super) {\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvariantError, _super);\n    function InvariantError(message) {\n        if (message === void 0) {\n            message = genericMessage;\n        }\n        var _this = _super.call(this, typeof message === \"number\" ? genericMessage + \": \" + message + \" (see https://github.com/apollographql/invariant-packages)\" : message) || this;\n        _this.framesToPop = 1;\n        _this.name = genericMessage;\n        setPrototypeOf(_this, InvariantError.prototype);\n        return _this;\n    }\n    return InvariantError;\n}(Error);\n\nfunction invariant(condition, message) {\n    if (!condition) {\n        throw new InvariantError(message);\n    }\n}\nvar verbosityLevels = [\n    \"debug\",\n    \"log\",\n    \"warn\",\n    \"error\",\n    \"silent\"\n];\nvar verbosityLevel = verbosityLevels.indexOf(\"log\");\nfunction wrapConsoleMethod(name) {\n    return function() {\n        if (verbosityLevels.indexOf(name) >= verbosityLevel) {\n            // Default to console.log if this host environment happens not to provide\n            // all the console.* methods we need.\n            var method = console[name] || console.log;\n            return method.apply(console, arguments);\n        }\n    };\n}\n(function(invariant) {\n    invariant.debug = wrapConsoleMethod(\"debug\");\n    invariant.log = wrapConsoleMethod(\"log\");\n    invariant.warn = wrapConsoleMethod(\"warn\");\n    invariant.error = wrapConsoleMethod(\"error\");\n})(invariant || (invariant = {}));\nfunction setVerbosity(level) {\n    var old = verbosityLevels[verbosityLevel];\n    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));\n    return old;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invariant); //# sourceMappingURL=invariant.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L2xpYi9pbnZhcmlhbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0M7QUFDbEMsSUFBSUMsaUJBQWlCO0FBQ3JCLElBQUlDLEtBQUtDLE9BQU9DLGNBQWMsRUFBRUEsaUJBQWlCRixPQUFPLEtBQUssSUFBSSxTQUFVRyxHQUFHLEVBQUVDLEtBQUs7SUFDakZELElBQUlFLFNBQVMsR0FBR0Q7SUFDaEIsT0FBT0Q7QUFDWCxJQUFJSDtBQUNKLElBQUlNLGlCQUFpQixXQUFXLEdBQUksU0FBVUMsTUFBTTtJQUNoRFQsZ0RBQVNBLENBQUNRLGdCQUFnQkM7SUFDMUIsU0FBU0QsZUFBZUUsT0FBTztRQUMzQixJQUFJQSxZQUFZLEtBQUssR0FBRztZQUFFQSxVQUFVVDtRQUFnQjtRQUNwRCxJQUFJVSxRQUFRRixPQUFPRyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU9GLFlBQVksV0FDM0NULGlCQUFpQixPQUFPUyxVQUFVLCtEQUNsQ0EsWUFBWSxJQUFJO1FBQ3RCQyxNQUFNRSxXQUFXLEdBQUc7UUFDcEJGLE1BQU1HLElBQUksR0FBR2I7UUFDYkcsZUFBZU8sT0FBT0gsZUFBZU8sU0FBUztRQUM5QyxPQUFPSjtJQUNYO0lBQ0EsT0FBT0g7QUFDWCxFQUFFUTtBQUN3QjtBQUNuQixTQUFTQyxVQUFVQyxTQUFTLEVBQUVSLE9BQU87SUFDeEMsSUFBSSxDQUFDUSxXQUFXO1FBQ1osTUFBTSxJQUFJVixlQUFlRTtJQUM3QjtBQUNKO0FBQ0EsSUFBSVMsa0JBQWtCO0lBQUM7SUFBUztJQUFPO0lBQVE7SUFBUztDQUFTO0FBQ2pFLElBQUlDLGlCQUFpQkQsZ0JBQWdCRSxPQUFPLENBQUM7QUFDN0MsU0FBU0Msa0JBQWtCUixJQUFJO0lBQzNCLE9BQU87UUFDSCxJQUFJSyxnQkFBZ0JFLE9BQU8sQ0FBQ1AsU0FBU00sZ0JBQWdCO1lBQ2pELHlFQUF5RTtZQUN6RSxxQ0FBcUM7WUFDckMsSUFBSUcsU0FBU0MsT0FBTyxDQUFDVixLQUFLLElBQUlVLFFBQVFDLEdBQUc7WUFDekMsT0FBT0YsT0FBT0csS0FBSyxDQUFDRixTQUFTRztRQUNqQztJQUNKO0FBQ0o7QUFDQyxVQUFVVixTQUFTO0lBQ2hCQSxVQUFVVyxLQUFLLEdBQUdOLGtCQUFrQjtJQUNwQ0wsVUFBVVEsR0FBRyxHQUFHSCxrQkFBa0I7SUFDbENMLFVBQVVZLElBQUksR0FBR1Asa0JBQWtCO0lBQ25DTCxVQUFVYSxLQUFLLEdBQUdSLGtCQUFrQjtBQUN4QyxHQUFHTCxhQUFjQSxDQUFBQSxZQUFZLENBQUM7QUFDdkIsU0FBU2MsYUFBYUMsS0FBSztJQUM5QixJQUFJQyxNQUFNZCxlQUFlLENBQUNDLGVBQWU7SUFDekNBLGlCQUFpQmMsS0FBS0MsR0FBRyxDQUFDLEdBQUdoQixnQkFBZ0JFLE9BQU8sQ0FBQ1c7SUFDckQsT0FBT0M7QUFDWDtBQUNBLGlFQUFlaEIsU0FBU0EsRUFBQyxDQUN6QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L2xpYi9pbnZhcmlhbnQuanM/NzY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBnZW5lcmljTWVzc2FnZSA9IFwiSW52YXJpYW50IFZpb2xhdGlvblwiO1xudmFyIF9hID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLCBzZXRQcm90b3R5cGVPZiA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAob2JqLCBwcm90bykge1xuICAgIG9iai5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gb2JqO1xufSA6IF9hO1xudmFyIEludmFyaWFudEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnZhcmlhbnRFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnZhcmlhbnRFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IGdlbmVyaWNNZXNzYWdlOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGVvZiBtZXNzYWdlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICA/IGdlbmVyaWNNZXNzYWdlICsgXCI6IFwiICsgbWVzc2FnZSArIFwiIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvaW52YXJpYW50LXBhY2thZ2VzKVwiXG4gICAgICAgICAgICA6IG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZyYW1lc1RvUG9wID0gMTtcbiAgICAgICAgX3RoaXMubmFtZSA9IGdlbmVyaWNNZXNzYWdlO1xuICAgICAgICBzZXRQcm90b3R5cGVPZihfdGhpcywgSW52YXJpYW50RXJyb3IucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW52YXJpYW50RXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnQgeyBJbnZhcmlhbnRFcnJvciB9O1xuZXhwb3J0IGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgSW52YXJpYW50RXJyb3IobWVzc2FnZSk7XG4gICAgfVxufVxudmFyIHZlcmJvc2l0eUxldmVscyA9IFtcImRlYnVnXCIsIFwibG9nXCIsIFwid2FyblwiLCBcImVycm9yXCIsIFwic2lsZW50XCJdO1xudmFyIHZlcmJvc2l0eUxldmVsID0gdmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YoXCJsb2dcIik7XG5mdW5jdGlvbiB3cmFwQ29uc29sZU1ldGhvZChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZlcmJvc2l0eUxldmVscy5pbmRleE9mKG5hbWUpID49IHZlcmJvc2l0eUxldmVsKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGNvbnNvbGUubG9nIGlmIHRoaXMgaG9zdCBlbnZpcm9ubWVudCBoYXBwZW5zIG5vdCB0byBwcm92aWRlXG4gICAgICAgICAgICAvLyBhbGwgdGhlIGNvbnNvbGUuKiBtZXRob2RzIHdlIG5lZWQuXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gY29uc29sZVtuYW1lXSB8fCBjb25zb2xlLmxvZztcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4oZnVuY3Rpb24gKGludmFyaWFudCkge1xuICAgIGludmFyaWFudC5kZWJ1ZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZGVidWdcIik7XG4gICAgaW52YXJpYW50LmxvZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwibG9nXCIpO1xuICAgIGludmFyaWFudC53YXJuID0gd3JhcENvbnNvbGVNZXRob2QoXCJ3YXJuXCIpO1xuICAgIGludmFyaWFudC5lcnJvciA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZXJyb3JcIik7XG59KShpbnZhcmlhbnQgfHwgKGludmFyaWFudCA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gc2V0VmVyYm9zaXR5KGxldmVsKSB7XG4gICAgdmFyIG9sZCA9IHZlcmJvc2l0eUxldmVsc1t2ZXJib3NpdHlMZXZlbF07XG4gICAgdmVyYm9zaXR5TGV2ZWwgPSBNYXRoLm1heCgwLCB2ZXJib3NpdHlMZXZlbHMuaW5kZXhPZihsZXZlbCkpO1xuICAgIHJldHVybiBvbGQ7XG59XG5leHBvcnQgZGVmYXVsdCBpbnZhcmlhbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnZhcmlhbnQuanMubWFwIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImdlbmVyaWNNZXNzYWdlIiwiX2EiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIm9iaiIsInByb3RvIiwiX19wcm90b19fIiwiSW52YXJpYW50RXJyb3IiLCJfc3VwZXIiLCJtZXNzYWdlIiwiX3RoaXMiLCJjYWxsIiwiZnJhbWVzVG9Qb3AiLCJuYW1lIiwicHJvdG90eXBlIiwiRXJyb3IiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJ2ZXJib3NpdHlMZXZlbHMiLCJ2ZXJib3NpdHlMZXZlbCIsImluZGV4T2YiLCJ3cmFwQ29uc29sZU1ldGhvZCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJhcHBseSIsImFyZ3VtZW50cyIsImRlYnVnIiwid2FybiIsImVycm9yIiwic2V0VmVyYm9zaXR5IiwibGV2ZWwiLCJvbGQiLCJNYXRoIiwibWF4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ts-invariant/lib/invariant.js\n");

/***/ })

};
;