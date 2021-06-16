/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls, RichText */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 2);\n/**\n * Gutenberg Blocks\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(/*! ./attributes */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(/*! ./edit */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__(/*! ./icon */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(/*! ./save */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(/*! ./style.scss */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_scss__);\n/**\r\n * Block Name: Test Block\r\n*/\n\n//  Import CSS.\n\n\n\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n/**\r\n * Register: Test Block.\r\n */\n\nregisterBlockType('bcb/alert', {\n\ttitle: __('Alert'),\n\tdescription: __('Provide contextual feedback messages for typical user actions.'),\n\ticon: {\n\t\tsrc: __WEBPACK_IMPORTED_MODULE_3__icon__[\"a\" /* default */],\n\t\tforeground: '#7952B3'\n\t},\n\tcategory: 'bootstrap-components-blocks',\n\tkeywords: [__('Test Block')],\n\tattributes: __WEBPACK_IMPORTED_MODULE_0__attributes__[\"a\" /* default */],\n\tedit: __WEBPACK_IMPORTED_MODULE_1__edit__[\"a\" /* default */],\n\tsave: __WEBPACK_IMPORTED_MODULE_4__save__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCbG9jayBOYW1lOiBUZXN0IEJsb2NrXHJcbiovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0IGFsZXJ0IGZyb20gJy4vaWNvbic7XG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG4vKipcclxuICogUmVnaXN0ZXI6IFRlc3QgQmxvY2suXHJcbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYmNiL2FsZXJ0Jywge1xuXHR0aXRsZTogX18oJ0FsZXJ0JyksXG5cdGRlc2NyaXB0aW9uOiBfXygnUHJvdmlkZSBjb250ZXh0dWFsIGZlZWRiYWNrIG1lc3NhZ2VzIGZvciB0eXBpY2FsIHVzZXIgYWN0aW9ucy4nKSxcblx0aWNvbjoge1xuXHRcdHNyYzogYWxlcnQsXG5cdFx0Zm9yZWdyb3VuZDogJyM3OTUyQjMnXG5cdH0sXG5cdGNhdGVnb3J5OiAnYm9vdHN0cmFwLWNvbXBvbmVudHMtYmxvY2tzJyxcblx0a2V5d29yZHM6IFtfXygnVGVzdCBCbG9jaycpXSxcblx0YXR0cmlidXRlczogYXR0cmlidXRlcyxcblx0ZWRpdDogZWRpdCxcblx0c2F2ZTogc2F2ZVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ./src/block/attributes.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var attributes = {\n    message: {\n        type: 'string'\n    },\n    type: {\n        type: 'string',\n        default: 'primary'\n    },\n    tag: {\n        type: 'string',\n        default: 'div'\n    },\n    dismissable: {\n        type: 'boolean',\n        default: false\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (attributes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9hdHRyaWJ1dGVzLmpzPzg4MDEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfSxcbiAgICBkaXNtaXNzYWJsZToge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9hdHRyaWJ1dGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);\nvar Fragment = wp.element.Fragment;\n\n\n\nvar __ = wp.i18n.__;\n\n\nvar alertTypes = [{ label: 'Primary', value: 'primary' }, { label: 'Secondary', value: 'secondary' }, { label: 'Success', value: 'success' }, { label: 'Danger', value: 'danger' }, { label: 'Warning', value: 'warning' }, { label: 'Info', value: 'info' }, { label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }];\n\nvar tags = [{ label: 'h1', value: 'h1' }, { label: 'h2', value: 'h2' }, { label: 'h3', value: 'h3' }, { label: 'h4', value: 'h4' }, { label: 'h5', value: 'h5' }, { label: 'h6', value: 'h6' }, { label: 'p', value: 'p' }, { label: 'div', value: 'div' }, { label: 'span', value: 'span' }];\n\nvar Edit = function Edit(_ref) {\n    var attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n    var message = attributes.message,\n        type = attributes.type,\n        tag = attributes.tag,\n        dismissable = attributes.dismissable;\n\n    var dismissableClass = dismissable ? 'alert-dismissible' : null;\n    return wp.element.createElement(\n        Fragment,\n        null,\n        wp.element.createElement(\n            __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InspectorControls\"],\n            null,\n            wp.element.createElement(\n                __WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"PanelBody\"],\n                {\n                    title: __(\"Alert Options\"),\n                    initialOpen: true\n                },\n                wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"SelectControl\"], {\n                    label: __(\"Select Alert Message Tag\"),\n                    value: tag,\n                    options: tags,\n                    onChange: function onChange(tag) {\n                        setAttributes({ tag: tag });\n                    }\n                }),\n                wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"SelectControl\"], {\n                    label: __(\"Select Alert Type\"),\n                    value: type,\n                    options: alertTypes,\n                    onChange: function onChange(type) {\n                        setAttributes({ type: type });\n                    }\n                }),\n                wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"ToggleControl\"], {\n                    label: 'Show Dismissable Icon',\n                    checked: dismissable,\n                    onChange: function onChange() {\n                        return setAttributes({ dismissable: !dismissable });\n                    }\n                })\n            )\n        ),\n        wp.element.createElement(\n            'div',\n            { className: 'alert alert-' + type + ' ' + dismissableClass, role: 'alert' },\n            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"RichText\"], {\n                tagName: tag,\n                value: message,\n                onChange: function onChange(message) {\n                    return setAttributes({ message: message });\n                },\n                placeholder: 'Write Alert Message..'\n            }),\n            dismissable && wp.element.createElement('button', { type: 'button', className: 'btn-close', 'data-bs-dismiss': 'alert', 'aria-label': 'Close' })\n        )\n    );\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (Edit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0LmpzPzNmZTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMsIFJpY2hUZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgUGFuZWxCb2R5LCBTZWxlY3RDb250cm9sLCBUb2dnbGVDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbnZhciBfXyA9IHdwLmkxOG4uX187XG5cblxudmFyIGFsZXJ0VHlwZXMgPSBbeyBsYWJlbDogJ1ByaW1hcnknLCB2YWx1ZTogJ3ByaW1hcnknIH0sIHsgbGFiZWw6ICdTZWNvbmRhcnknLCB2YWx1ZTogJ3NlY29uZGFyeScgfSwgeyBsYWJlbDogJ1N1Y2Nlc3MnLCB2YWx1ZTogJ3N1Y2Nlc3MnIH0sIHsgbGFiZWw6ICdEYW5nZXInLCB2YWx1ZTogJ2RhbmdlcicgfSwgeyBsYWJlbDogJ1dhcm5pbmcnLCB2YWx1ZTogJ3dhcm5pbmcnIH0sIHsgbGFiZWw6ICdJbmZvJywgdmFsdWU6ICdpbmZvJyB9LCB7IGxhYmVsOiAnTGlnaHQnLCB2YWx1ZTogJ2xpZ2h0JyB9LCB7IGxhYmVsOiAnRGFyaycsIHZhbHVlOiAnZGFyaycgfV07XG5cbnZhciB0YWdzID0gW3sgbGFiZWw6ICdoMScsIHZhbHVlOiAnaDEnIH0sIHsgbGFiZWw6ICdoMicsIHZhbHVlOiAnaDInIH0sIHsgbGFiZWw6ICdoMycsIHZhbHVlOiAnaDMnIH0sIHsgbGFiZWw6ICdoNCcsIHZhbHVlOiAnaDQnIH0sIHsgbGFiZWw6ICdoNScsIHZhbHVlOiAnaDUnIH0sIHsgbGFiZWw6ICdoNicsIHZhbHVlOiAnaDYnIH0sIHsgbGFiZWw6ICdwJywgdmFsdWU6ICdwJyB9LCB7IGxhYmVsOiAnZGl2JywgdmFsdWU6ICdkaXYnIH0sIHsgbGFiZWw6ICdzcGFuJywgdmFsdWU6ICdzcGFuJyB9XTtcblxudmFyIEVkaXQgPSBmdW5jdGlvbiBFZGl0KF9yZWYpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcbiAgICB2YXIgbWVzc2FnZSA9IGF0dHJpYnV0ZXMubWVzc2FnZSxcbiAgICAgICAgdHlwZSA9IGF0dHJpYnV0ZXMudHlwZSxcbiAgICAgICAgdGFnID0gYXR0cmlidXRlcy50YWcsXG4gICAgICAgIGRpc21pc3NhYmxlID0gYXR0cmlidXRlcy5kaXNtaXNzYWJsZTtcblxuICAgIHZhciBkaXNtaXNzYWJsZUNsYXNzID0gZGlzbWlzc2FibGUgPyAnYWxlcnQtZGlzbWlzc2libGUnIDogbnVsbDtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGcmFnbWVudCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfXyhcIkFsZXJ0IE9wdGlvbnNcIiksXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oXCJTZWxlY3QgQWxlcnQgTWVzc2FnZSBUYWdcIiksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRhZ3MsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB0YWc6IHRhZyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfXyhcIlNlbGVjdCBBbGVydCBUeXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogYWxlcnRUeXBlcyxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB0eXBlOiB0eXBlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaG93IERpc21pc3NhYmxlIEljb24nLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBkaXNtaXNzYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBkaXNtaXNzYWJsZTogIWRpc21pc3NhYmxlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2FsZXJ0IGFsZXJ0LScgKyB0eXBlICsgJyAnICsgZGlzbWlzc2FibGVDbGFzcywgcm9sZTogJ2FsZXJ0JyB9LFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgICAgICAgICAgdGFnTmFtZTogdGFnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnV3JpdGUgQWxlcnQgTWVzc2FnZS4uJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkaXNtaXNzYWJsZSAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ2J0bi1jbG9zZScsICdkYXRhLWJzLWRpc21pc3MnOiAnYWxlcnQnLCAnYXJpYS1sYWJlbCc6ICdDbG9zZScgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9lZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: PanelBody, SelectControl, ToggleControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 6 */
/*!***************************!*\
  !*** ./src/block/icon.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var alert = wp.element.createElement(\n  \"svg\",\n  { xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\" },\n  wp.element.createElement(\"path\", { d: \"M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z\" })\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (alert);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9pY29uLmpzPzc0ZmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFsZXJ0ID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICBcInN2Z1wiLFxuICB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBcIjI0XCIsIGhlaWdodDogXCIyNFwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiIH0sXG4gIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0xMiA1LjE3N2w4LjYzMSAxNS44MjNoLTE3LjI2Mmw4LjYzMS0xNS44MjN6bTAtNC4xNzdsLTEyIDIyaDI0bC0xMi0yMnptLTEgOWgydjZoLTJ2LTZ6bTEgOS43NWMtLjY4OSAwLTEuMjUtLjU2LTEuMjUtMS4yNXMuNTYxLTEuMjUgMS4yNS0xLjI1IDEuMjUuNTYgMS4yNSAxLjI1LS41NjEgMS4yNS0xLjI1IDEuMjV6XCIgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFsZXJ0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2ljb24uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************!*\
  !*** ./src/block/save.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\nvar Fragment = wp.element.Fragment;\n\n\nvar __ = wp.i18n.__;\n\n\nvar Save = function Save(_ref) {\n    var attributes = _ref.attributes;\n    var message = attributes.message,\n        type = attributes.type,\n        tag = attributes.tag,\n        dismissable = attributes.dismissable;\n\n    var dismissableClass = dismissable ? 'alert-dismissible' : null;\n    return wp.element.createElement(\n        'div',\n        { className: 'alert alert-' + type + ' ' + dismissableClass, role: 'alert' },\n        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"RichText\"].Content, {\n            tagName: tag,\n            value: message\n        }),\n        dismissable && wp.element.createElement('button', { type: 'button', className: 'btn-close', 'data-bs-dismiss': 'alert', 'aria-label': 'Close' })\n    );\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (Save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zYXZlLmpzP2M0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG52YXIgX18gPSB3cC5pMThuLl9fO1xuXG5cbnZhciBTYXZlID0gZnVuY3Rpb24gU2F2ZShfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXM7XG4gICAgdmFyIG1lc3NhZ2UgPSBhdHRyaWJ1dGVzLm1lc3NhZ2UsXG4gICAgICAgIHR5cGUgPSBhdHRyaWJ1dGVzLnR5cGUsXG4gICAgICAgIHRhZyA9IGF0dHJpYnV0ZXMudGFnLFxuICAgICAgICBkaXNtaXNzYWJsZSA9IGF0dHJpYnV0ZXMuZGlzbWlzc2FibGU7XG5cbiAgICB2YXIgZGlzbWlzc2FibGVDbGFzcyA9IGRpc21pc3NhYmxlID8gJ2FsZXJ0LWRpc21pc3NpYmxlJyA6IG51bGw7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnYWxlcnQgYWxlcnQtJyArIHR5cGUgKyAnICcgKyBkaXNtaXNzYWJsZUNsYXNzLCByb2xlOiAnYWxlcnQnIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgICAgICB0YWdOYW1lOiB0YWcsXG4gICAgICAgICAgICB2YWx1ZTogbWVzc2FnZVxuICAgICAgICB9KSxcbiAgICAgICAgZGlzbWlzc2FibGUgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdidG4tY2xvc2UnLCAnZGF0YS1icy1kaXNtaXNzJzogJ2FsZXJ0JywgJ2FyaWEtbGFiZWwnOiAnQ2xvc2UnIH0pXG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3NhdmUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);