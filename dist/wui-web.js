(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WUI"] = factory();
	else
		root["WUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var ProfileList = __webpack_require__(2);
	
	module.exports = {
	  ProfileList: ProfileList,
	  templates: Handlebars.templates
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	    var template = Handlebars.template,
	        templates = Handlebars.templates = Handlebars.templates || {};
	    templates['profile-list'] = template({ "compiler": [6, ">= 2.0.0-beta.1"], "main": function main(depth0, helpers, partials, data) {
	            return "<div>Profile List</div>\n";
	        }, "useData": true });
	    templates['sample-template'] = template({ "compiler": [6, ">= 2.0.0-beta.1"], "main": function main(depth0, helpers, partials, data) {
	            return "<div>Sample Template</div>\n";
	        }, "useData": true });
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var create = function create(options) {
	  var $el = options.$el;
	
	  $el.html(Handlebars.templates['profile-list']());
	};
	
	module.exports = {
	  create: create
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=wui-web.js.map