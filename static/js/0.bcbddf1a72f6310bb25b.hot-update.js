webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    data: function data() {\n        return {\n            people: null,\n            base: window.location.pathname\n        };\n    },\n\n\n    methods: {\n        fetchPeople: function fetchPeople() {\n            var _this = this;\n\n            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.base + '/services/api/person').then(function (res) {\n                return _this.people = res.data.rows;\n            });\n        }\n    },\n    mounted: function mounted() {\n        this.fetchPeople();\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGVvcGxlLnZ1ZT9lMmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBRkE7QUFJQSxLQU5BOzs7QUFRQTtBQUNBLG1CQURBLHlCQUNBO0FBQUE7O0FBQ0Esa0dBQ0EsSUFEQSxDQUNBO0FBQUE7QUFBQSxhQURBO0FBRUE7QUFKQSxLQVJBO0FBY0EsV0FkQSxxQkFjQTtBQUNBO0FBQ0E7QUFoQkEiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuXHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyIHRhYmxlLWJvcmRlcmVkXCI+XG5cdCAgICA8dGhlYWQ+XG5cdFx0PHRyPlxuXHRcdCAgICA8dGg+TmFtZTwvdGg+XG5cdFx0ICAgIDx0aD5MYXN0bmFtZTwvdGg+XG5cdFx0ICAgIDx0aD5BZ2U8L3RoPlxuXHRcdCAgICA8dGg+QWRkcmVzczwvdGg+XG5cdFx0PC90cj5cblx0ICAgIDwvdGhlYWQ+XG5cdCAgICA8dGJvZHk+XG5cdFx0PHRyIHYtZm9yPVwicGVyc29uIGluIHBlb3BsZVwiPlxuXHRcdCAgICA8dGQ+e3twZXJzb24ubmFtZX19PC90ZD5cblx0XHQgICAgPHRkPnt7cGVyc29uLmxhc3RuYW1lfX08L3RkPlxuXHRcdCAgICA8dGQ+e3twZXJzb24uYWdlfX08L3RkPlxuXHRcdCAgICA8dGQ+e3twZXJzb24uYWRkcmVzc319PC90ZD5cblx0XHQ8L3RyPlxuXHQgICAgPC90Ym9keT5cblx0PC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiBleHBvcnQgZGVmYXVsdCB7XG4gICAgIGRhdGEoKSB7XG5cdCByZXR1cm4ge1xuXHQgICAgIHBlb3BsZTpudWxsLFxuXHQgICAgIGJhc2U6d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG5cdCB9XG4gICAgIH0sXG5cbiAgICAgbWV0aG9kczp7XG5cdCBmZXRjaFBlb3BsZSgpe1xuXHQgICAgIGF4aW9zLmdldChgJHt0aGlzLmJhc2V9L3NlcnZpY2VzL2FwaS9wZXJzb25gKVxuXHRcdCAgLnRoZW4ocmVzPT50aGlzLnBlb3BsZT1yZXMuZGF0YS5yb3dzKTtcblx0IH1cbiAgICAgfSxcbiAgICAgbW91bnRlZCgpe1xuXHQgdGhpcy5mZXRjaFBlb3BsZSgpO1xuICAgICB9XG4gfVxuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9QZW9wbGUudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ })

})