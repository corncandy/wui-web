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
	
	var SiteHeader = __webpack_require__(2);
	
	module.exports = {
	  SiteHeader: SiteHeader,
	  templates: Handlebars.templates
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() {
	  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
	templates['profile-list'] = template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "<li>\n  <img src=\""
	    + this.escapeExpression(((helper = (helper = helpers.avatarUrl || (depth0 != null ? depth0.avatarUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"avatarUrl","hash":{},"data":data}) : helper)))
	    + "\" />\n</li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "<img class=\"avatar-active\" src=\"../images/sample/sample-page-avatar-active.png\" />\n";
	},"useData":true});
	templates['site-header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<header class=\"main-header\">\n  <a href=\"home.html\" class=\"logo\">\n    <span class=\"logo-mini\"><b>O</b>SP</span>\n    <span class=\"logo-lg\"><b>Operation</b>SP</span>\n  </a>\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </a>\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"user-header\">\n              <img src=\"/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n              <p>\n                "
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                <small>"
	    + alias3(((helper = (helper = helpers.roles || (depth0 != null ? depth0.roles : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"roles","hash":{},"data":data}) : helper)))
	    + "</small>\n              </p>\n            </li>\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a id='change-password' href=\"#\" class=\"btn btn-default btn-flat\">修改密码</a>\n              </div>\n              <div class=\"pull-right\">\n                <a id='logout' href=\"#\" class=\"btn btn-danger btn-flat\">安全退出</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n";
	},"useData":true});
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var create = function create(options) {
	  var $el = options.$el;
	
	  $el.html(Handlebars.templates['site-header'](options));
	
	  $el.find('#change-password').click(function () {
	    WUI.ajax({
	      url: '/upp/web/v1/sso/getResetPassword'
	    }).done(function (resp) {
	      window.location.href = resp.resetPasswordUrl;
	    });
	  });
	  $el.find('#logout').click(function () {
	    WUI.ajax({
	      url: '/upp/web/v1/sso/logout'
	    }).done(function (resp) {
	      window.location.href = resp.loginUrl;
	    });
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=wui-web.js.map