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
	var tools = __webpack_require__(3);
	var alert = __webpack_require__(4);
	var DataTable = __webpack_require__(6);
	var DataFilter = __webpack_require__(7);
	var DataPaginator = __webpack_require__(8);
	var PageLoading = __webpack_require__(5);
	var DataDialog = __webpack_require__(9);
	module.exports = {
	  SiteHeader: SiteHeader,
	  getUrl: tools.getUrl,
	  getParams: tools.getParams,
	  ajax: tools.ajax,
	  warningAlert: alert,
	  DataTable: DataTable,
	  DataFilter: DataFilter,
	  DataPaginator: DataPaginator,
	  PageLoading: PageLoading,
	  DataDialog: DataDialog,
	  templates: Handlebars.templates
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() {
	  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
	templates['data-dialog'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "  <div class=\"col-sm-4 form-group\" >\n      <div class=\"col-sm-4 form-group\" >\n              <span>"
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</span>\n      </div>\n      <div class=\"col-sm-8 form-group\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.number : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </div>\n  </div>\n";
	},"2":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.edit : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "");
	},"3":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                    <input\n                            type=\"text\"\n                            maxlength=\"11\"\n                            class=\"form-control \"\n                            style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                            title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                            name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                    value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                            placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n                    </input>\n";
	},"5":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                <input\n                        type=\"text\"\n                        class=\"form-control \"\n                        readOnly\n                        style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                        title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                        name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                        value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                        placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n                </input>\n";
	},"7":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function";
	
	  return "                <input\n                        type=\"number\"\n                        maxlength=\"11\"\n                        class=\"form-control \"\n                        style=\"overflow: hidden; whitewhite-space: nowrap;text-overflow: ellipsis;\"\n                        title=\""
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\"\n                        name="
	    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n                                value='"
	    + ((stack1 = ((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "'\n                        placeholder="
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n                </input>\n";
	},"9":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "                <select\n                        name="
	    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                                class=\"form-control\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                </select>\n";
	},"10":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "");
	},"11":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                      <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + " selected=\"selected\">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"13":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "                      <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"15":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "  <div class=\"row col-sm-12  form-group\">\n      <div class=\"col-sm-2 form-group\" >\n          <span>"
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.label : stack1), depth0))
	    + "</span>\n      </div>\n      <div class=\"col-sm-10 form-group\" id=\"reviewComment\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.textInfoShow : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(18, data, 0),"data":data})) != null ? stack1 : "")
	    + "      </div>\n\n  </div>\n";
	},"16":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=this.escapeExpression;
	
	  return "              <textarea class=\"form-control\"  readonly=\"readonly\" name=\""
	    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.name : stack1), depth0))
	    + "\">"
	    + alias1(((helper = (helper = helpers.textInfoShow || (depth0 != null ? depth0.textInfoShow : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"textInfoShow","hash":{},"data":data}) : helper)))
	    + "</textarea>\n";
	},"18":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "              <textarea class=\"form-control\"  name=\""
	    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.textInfo : depth0)) != null ? stack1.name : stack1), depth0))
	    + "\"></textarea>\n";
	},"20":function(depth0,helpers,partials,data) {
	    return "  <div class=\"row\">\n\n  </div>\n";
	},"22":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div style=\"text-align: right; margin-right: 20px;\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelFunc : depth0),{"name":"if","hash":{},"fn":this.program(23, data, 0),"inverse":this.program(25, data, 0),"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"23":function(depth0,helpers,partials,data) {
	    return "            <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">拒绝</button>\n            <button id=\"modal\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-primary save-button\">通过</button>\n";
	},"25":function(depth0,helpers,partials,data) {
	    return "            <button  onclick=\"history.go(-1)\" class=\"btn btn-default cancel-button\">取消</button>\n            <button id=\"modal\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-primary save-button\">保存</button>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<form class=\"box-header\">\n  <div class=\"row\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.textInfo : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</form>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.buttonHide : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.program(22, data, 0),"data":data})) != null ? stack1 : "");
	},"useData":true});
	templates['data-filter'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label>"
	    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</label>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.number : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.select : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n  </div>\n";
	},"2":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "        <input\n          type=\"text\"\n          class=\"form-control\"\n          name="
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n          placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n        </input>\n";
	},"4":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "          <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  name="
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n                          placeholder="
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + ">\n          </input>\n";
	},"6":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "        <select\n          name="
	    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n          class=\"form-control\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "        </select>\n";
	},"7":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "          <option value="
	    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</option>\n";
	},"9":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "  <div class=\"col-sm-1\">\n    <input\n      type=\"button\"\n      style=\"margin-top: 24px;\"\n      class=\"btn btn-info filter\"\n      value="
	    + this.escapeExpression(((helper = (helper = helpers.queryButton || (depth0 != null ? depth0.queryButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"queryButton","hash":{},"data":data}) : helper)))
	    + ">\n    </input>\n  </div>\n";
	},"11":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "    <div class=\"col-sm-1\">\n        <input\n                type=\"button\"\n                style=\"margin-top: 24px;\"\n                class=\"btn btn-primary add\"\n                value="
	    + this.escapeExpression(((helper = (helper = helpers.addButton || (depth0 != null ? depth0.addButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"addButton","hash":{},"data":data}) : helper)))
	    + ">\n        </input>\n    </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<form class=\"box-header with-border\">\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.queryButton : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.addButton : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</form>\n";
	},"useData":true});
	templates['data-paginator'] = template({"1":function(depth0,helpers,partials,data) {
	    var stack1, alias1=helpers.helperMissing;
	
	  return "        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),1,{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"first\">\n            <i class=\"fa fa-fast-backward\" />\n          </a>\n        </li>\n        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),1,{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"prev\">\n            <i class=\"fa fa-backward\" />\n          </a>\n        </li>\n";
	},"2":function(depth0,helpers,partials,data) {
	    return "disabled";
	},"4":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, alias1=this.lambda, alias2=this.escapeExpression;
	
	  return "        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].currentPage : depths[1]),depth0,{"name":"equal","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role="
	    + alias2(alias1(depth0, depth0))
	    + ">"
	    + alias2(alias1(depth0, depth0))
	    + "</a>\n        </li>\n";
	},"5":function(depth0,helpers,partials,data) {
	    return "active";
	},"7":function(depth0,helpers,partials,data) {
	    var stack1, alias1=helpers.helperMissing;
	
	  return "        <li class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),(depth0 != null ? depth0.totalPage : depth0),{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"next\">\n            <i class=\"fa fa-forward\" />\n          </a>\n        </li>\n        <li\n          class=\""
	    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias1).call(depth0,(depth0 != null ? depth0.currentPage : depth0),(depth0 != null ? depth0.totalPage : depth0),{"name":"equal","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n          <a class=\"paginator\" data-role=\"last\">\n            <i class=\"fa fa-fast-forward\" />\n          </a>\n        </li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<div class=\"box-footer\">\n  <div class=\"row\" style=\"line-height: 35px\">\n    <div class=\"col-sm-5\">\n      当前显示 "
	    + alias3(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start","hash":{},"data":data}) : helper)))
	    + " 到 "
	    + alias3(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"end","hash":{},"data":data}) : helper)))
	    + " 条，共 "
	    + alias3(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"total","hash":{},"data":data}) : helper)))
	    + " 条\n    </div>\n    <div class=\"col-sm-7\">\n      <ul class=\"pagination pagination-sm pull-right\" style=\"margin: 0\">\n"
	    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.totalPage : depth0),1,{"name":"compare","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.paginators : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.totalPage : depth0),1,{"name":"compare","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </ul>\n    </div>\n  </div>\n</div>\n";
	},"useData":true,"useDepths":true});
	templates['data-table'] = template({"1":function(depth0,helpers,partials,data) {
	    return "      <th>选择</th>\n";
	},"3":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "        <th style=\"width: "
	    + alias3(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</th>\n";
	},"5":function(depth0,helpers,partials,data) {
	    return "        <th>操作</th>\n";
	},"7":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "      <tr>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].groups : depths[1]),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].operations : depths[1]),{"name":"if","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </tr>\n";
	},"8":function(depth0,helpers,partials,data) {
	    return "          <td>\n                <input name=\"checkBox\" type='checkbox' />\n          </td>\n";
	},"10":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "                <td>"
	    + ((stack1 = this.lambda(depth0, depth0)) != null ? stack1 : "")
	    + "</td>\n";
	},"12":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "            <td>\n"
	    + ((stack1 = helpers.each.call(depth0,(depths[2] != null ? depths[2].operations : depths[2]),{"name":"each","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "            </td>\n";
	},"13":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dialog : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "");
	},"14":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "              <a href=\"#\" data-toggle=\"modal\"\n                 data-target=\"#myModal\" class="
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</a>\n";
	},"16":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "              <a href=\"#\" class="
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + ">"
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</a>\n";
	},"18":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "        <div class='row'>\n        <label style='float: left; margin-left:30px; font-weight:normal'>\n            <input type='checkbox' id=\"checkAll\" style=\"margin-right: 5px\"/>\n            全选\n        </label>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\n    </div>\n";
	},"19":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "        <div class='col-sm-1 text-center'>\n            <button class='"
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + "' id='"
	    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
	    + "' disabled>\n                "
	    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\n            </button>\n        </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
	    var stack1;
	
	  return "<div class=\"box-body\">\n    <div class='row'>\n  <table class=\"table table-bordered table-hover text-center table-responsive\"  style=\"margin:10px;width:98%;minWidth:800px;\">\n    <thead>\n      <tr>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.titles : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.operations : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "      </tr>\n    </thead>\n    <tbody>\n"
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </tbody>\n  </table>\n      </div>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.groups : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</div>\n";
	},"useData":true,"useDepths":true});
	templates['page-alert'] = template({"1":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "      <div\n              style=\"position: relative;\n                      width: 360px;\n                      border: 1px solid #8dcdf3;\n                      border-radius: 5px;\n                      box-shadow: 0 0 6px #279fe5;\n                      margin: 0 auto;\n                      background: #FFFFFF;\n                      font-size: 20px;\n                      color: #279fe5;\n                      line-height: 60px;\n                      padding-left: 50px;\n                      overflow: hidden;\"\n      >\n          <img style=\" position: absolute; top: 20px; left: 15px;\" src=\"../images/upp/success-icon.png\" />\n          "
	    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
	    + "\n      </div>\n";
	},"3":function(depth0,helpers,partials,data) {
	    var helper;
	
	  return "         <div\n                 style=\"position: relative;\n                      width: 360px;\n                      border-radius: 5px;\n                      margin: 0 auto;\n                      background: #FFFFFF;\n                      font-size: 20px;\n                      line-height: 60px;\n                      padding-left: 50px;\n                      overflow: hidden;\n                      color: #df4a32;\n                      border: 1px solid #ffa293;\n                      box-shadow: 0 0 6px #df4a32;\"\n         >\n             <img style=\" position: absolute; top: 20px; left: 15px;\" src=\"../images/upp/fail-icon.png\" />\n           "
	    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
	    + "\n         </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return " <div id=\"alert-pop\" style=\"position: fixed; top: 60px; z-index: 1060; width: 100%;\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.success : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
	    + "  </div>\n";
	},"useData":true});
	templates['page-loading'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<div    id=\"loading-pop\"\n        style=\"\n        position:fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: rgba(0, 0, 0, 0.5);\n        zIndex: 10000;\n\">\n    <i style=\"\n              position: absolute;\n              top: 40%;\n              left: 50%;\n              color: white;\n              fontSize: 5rem;\n              \"\n       class='fa fa-refresh fa-spin' >\n    </i>\n</div>\n";
	},"useData":true});
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by liukai on 16/8/15.
	 */
	var alert = __webpack_require__(4);
	var loading = __webpack_require__(5);
	var getUrl = function getUrl(uri) {
	  var doc = document;
	
	  var elem = doc.createElement('a');
	
	  elem.href = uri;
	
	  return {
	    source: uri,
	    protocol: elem.protocol.replace(':', ''),
	    host: elem.hostname,
	    port: elem.port,
	    query: elem.search,
	    params: function () {
	      var ret = {},
	          seg = elem.search.replace(/^\?/, '').split('&'),
	          len = seg.length,
	          i = 0,
	          s;
	      for (; i < len; i++) {
	        if (!seg[i]) {
	          continue;
	        }
	        s = seg[i].split('=');
	        ret[s[0]] = s[1];
	      }
	      return ret;
	    }(),
	    file: (elem.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
	    hash: elem.hash.replace('#', ''),
	    path: elem.pathname.replace(/^([^\/])/, '/$1'),
	    relative: (elem.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
	    segments: elem.pathname.replace(/^\//, '').split('/')
	  };
	};
	
	var getParams = function getParams() {
	  var _url = getUrl(window.location.href),
	      _params = _url.params;
	  return _params;
	};
	
	var format = function format(time, _format) {
	  if (time == null) {
	    return '';
	  } else {
	    var t = new Date(time);
	    var tf = function tf(i) {
	      return (i < 10 ? '0' : '') + i;
	    };
	    return _format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
	      switch (a) {
	        case 'yyyy':
	          return tf(t.getFullYear());
	          break;
	        case 'MM':
	          return tf(t.getMonth() + 1);
	          break;
	        case 'mm':
	          return tf(t.getMinutes());
	          break;
	        case 'dd':
	          return tf(t.getDate());
	          break;
	        case 'HH':
	          return tf(t.getHours());
	          break;
	        case 'ss':
	          return tf(t.getSeconds());
	          break;
	      }
	      ;
	    });
	  }
	};
	
	var ajax = function ajax(options) {
	  loading.create();
	  var data = $.extend({}, options.jsonData || {}, {
	    reqHeader: {
	      entityId: 'upp',
	      appId: WUI.config.system,
	      sessionId: '1462461678582',
	      reqId: new Date().getTime(),
	      accessToken: 'accessTokenTest'
	    }
	  });
	  var params = $.extend({}, options, {
	    method: options.method ? options.method : 'POST',
	    contentType: 'application/json;charset=utf-8',
	    data: options.method === 'GET' || options.method === 'get' ? 'jsonString=' + JSON.stringify(data) : JSON.stringify(data)
	  });
	
	  return $.ajax(params).then(function (resp, textStatus, jqXHR) {
	    $('#loading-pop').remove();
	    var code = resp.respHeader.respCode;
	    if (code === 'UPP-10000' || code === 'UPP-10000' || code === 'AAS-10000') {
	      return resp;
	    } else if (code === 'AAS-920001' || code === 'AAS-920006') {
	      window.location.href = resp.loginUrl;
	    } else {
	      var errorMessage = resp.respHeader.resMessageExt;
	
	      if (!errorMessage) {
	        errorMessage = resp.respHeader.respMessage || '';
	      }
	      alert.create({
	        message: errorMessage,
	        fail: true
	      });
	      return $.Deferred().reject(jqXHR, resp, errorMessage).promise();
	    }
	  }).fail(function (resp, jqXHR, errorMessage) {
	    alert.create({
	      message: errorMessage || 'Ajax Failed!',
	      fail: true
	    });
	  });
	};
	
	module.exports = {
	  getUrl: getUrl,
	  getParams: getParams,
	  getFormat: format,
	  ajax: ajax
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by liukai on 16/8/15.
	 */
	
	var create = function create(options) {
	  var message = options.message;
	  var parentdiv = $('<div></div>');
	  parentdiv.attr('id', 'alert-pop');
	  parentdiv.appendTo('.main-header');
	
	  parentdiv.html(Handlebars.templates['page-alert']({
	    message: message,
	    success: options.success ? true : false,
	    fail: options.fail ? true : false
	  }));
	
	  setTimeout(function () {
	    $('#alert-pop').remove();
	  }, 2000);
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var create = function create(options) {
	  var parentdiv = $('<div></div>');
	  parentdiv.attr('id', 'loadingPop');
	  parentdiv.appendTo('body');
	  $('#loadingPop').html(Handlebars.templates['page-loading']());
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var create = function create(options) {
	  var $el = options.$el;
	  var meta = options.meta;
	  var fields = options.fields;
	  var operations = options.operations;
	  var groups = options.groups;
	  var titles = fields.map(function (field) {
	    return {
	      title: meta[field].label,
	      width: meta[field].width ? meta[field].width : ''
	    };
	  });
	  var list = options.list.map(function (item) {
	    return fields.map(function (field) {
	      return item[field] == null ? '' : item[field];
	    });
	  });
	  var ops = operations && operations.map(function (operation, index) {
	    return {
	      name: operation.name,
	      className: 'operation-' + index,
	      dialog: operation.dialog
	    };
	  });
	
	  var groupList = groups && groups.map(function (group, index) {
	    return {
	      name: group.name,
	      className: group.className,
	      id: group.id
	    };
	  });
	
	  $el.html(Handlebars.templates['data-table']({
	    titles: titles,
	    list: list,
	    operations: ops,
	    groups: groupList
	  }));
	
	  operations && operations.forEach(function (operation, i) {
	    $el.find('.operation-' + i).each(function (j) {
	      $(this).click(operation.callback.bind(null, options.list[j]));
	    });
	  });
	  var checkItem = function checkItem() {
	    var itemList = [];
	    $el.find("input[name='checkBox']:checked").each(function () {
	      var item = options.list[$(this).index()];
	      itemList.push(item);
	    });
	    return itemList;
	  };
	  groups && groups.forEach(function (group, i) {
	    //$el.find("input[name='checkBox']").each(function(j) {
	    //  $(this).click(group.callidback.bind(null, options.list[j]));
	    //});
	    $el.find('#' + group.id).click(group.callback.bind(null, checkItem));
	  });
	  var buttonStatus = function buttonStatus() {
	    groups.forEach(function (group, i) {
	      $el.find("input[name='checkBox']:checked").length > 0 ? $el.find('#' + group.id).removeAttr("disabled") : $el.find('#' + group.id).attr('disabled', 'true');
	    });
	  };
	  $el.find("#checkAll").click(function () {
	    $el.find('input[name="checkBox"]').prop("checked", this.checked);
	    buttonStatus();
	  });
	
	  $el.find("input[name='checkBox']").click(function () {
	    $el.find("#checkAll").prop("checked", $el.find("input[name='checkBox']").length == $el.find("input[name='checkBox']:checked").length ? true : false);
	    buttonStatus();
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var create = function create(options) {
	  var $el = options.$el;
	  var onFilter = options.onFilter;
	  var addFunc = options.addFunc;
	  var meta = options.meta;
	  var fields = options.fields.map(function (field) {
	    var target = $.extend({}, meta[field], {
	      name: field
	    });
	
	    switch (target.type) {
	      case 'text':
	        target.text = true;
	        break;
	      case 'select':
	        target.select = true;
	        break;
	      case 'number':
	        target.number = true;
	        break;
	      default:
	        target.text = true;
	        break;
	    }
	
	    return target;
	  });
	
	  $el.html(Handlebars.templates['data-filter']({
	    fields: fields,
	    addButton: options.addButton ? options.addButton : false,
	    queryButton: options.queryButton ? options.queryButton : false
	  }));
	
	  $el.find('.filter').click(function () {
	    var paramArray = $el.find('form').serializeArray();
	    var paramObj = {};
	
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	
	    onFilter(paramObj);
	  });
	
	  $el.find('.add').click(function () {
	    var paramArray = $el.find('form').serializeArray();
	    var paramObj = {};
	
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	
	    addFunc(paramObj);
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var calPaginators = function calPaginators(totalPage, currentPage) {
	  var paginators = [];
	  var i;
	
	  if (totalPage > 9) {
	    if (currentPage < 5) {
	      for (i = 0; i < 9; i++) {
	        paginators.push(i + 1);
	      }
	    } else if (currentPage > totalPage - 5) {
	      for (i = 0; i < 9; i++) {
	        paginators.push(totalPage - 9 + i + 1);
	      }
	    } else {
	      for (i = 0; i < 9; i++) {
	        paginators.push(currentPage - 4 + i + 1);
	      }
	    }
	  } else {
	    for (i = 0; i < totalPage; i++) {
	      paginators.push(i + 1);
	    }
	  }
	
	  return paginators;
	};
	
	var create = function create(options) {
	  var $el = options.$el;
	  var total = options.total;
	  var currentPage = options.currentPage + 1;
	  var pageSize = options.pageSize;
	  var offset = currentPage * pageSize;
	  var totalPage = total % pageSize ? parseInt(total / pageSize, 10) + 1 : parseInt(total / pageSize, 10);
	  var start = (currentPage - 1) * pageSize + 1;
	  var end = offset > total ? total : offset;
	  var onSwitchPage = options.onSwitchPage;
	
	  $el.html(Handlebars.templates['data-paginator']({
	    currentPage: currentPage,
	    pageSize: pageSize,
	    total: total,
	    totalPage: totalPage,
	    start: start,
	    end: end,
	    paginators: calPaginators(totalPage, currentPage)
	  }));
	
	  $el.find('.paginator').click(function () {
	    var target = $(this).data('role');
	
	    switch (target) {
	      case 'first':
	        if (currentPage !== 1) {
	          onSwitchPage(0);
	        }
	        break;
	      case 'last':
	        if (currentPage !== totalPage) {
	          onSwitchPage(totalPage - 1);
	        }
	        break;
	      case 'prev':
	        if (currentPage > 1) {
	          onSwitchPage(currentPage - 2);
	        }
	        break;
	      case 'next':
	        if (currentPage < totalPage) {
	          onSwitchPage(currentPage);
	        }
	        break;
	      default:
	        var targetPage = parseInt(target, 10);
	        if (targetPage !== currentPage) {
	          onSwitchPage(targetPage - 1);
	        }
	        break;
	    }
	  });
	};
	
	module.exports = {
	  create: create
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by liukai on 16/8/18.
	 */
	
	'use strict';
	
	var create = function create(options) {
	  var $el = options.$el;
	  var meta = options.meta;
	  var onConfirm = options.onConfirm;
	  var cancelFunc = options.onCancel;
	  var fields = options.fields.map(function (field) {
	    var target = $.extend({}, meta[field], {
	      name: field,
	      value: options.list[field] ? options.list[field] : ''
	    });
	    switch (target.type) {
	      case 'text':
	        target.text = true;
	        break;
	      case 'select':
	        target.select = true;
	        break;
	      case 'number':
	        target.number = true;
	        break;
	      default:
	        target.text = true;
	        break;
	    }
	
	    return target;
	  });
	  if ($el) {
	    var parentdiv = $el;
	  } else {
	    var parentdiv = $('<div></div>');
	    parentdiv.attr('id', 'table-body');
	    parentdiv.addClass('row');
	    parentdiv.appendTo('.data-table');
	  }
	  parentdiv.html(Handlebars.templates['data-dialog']({
	    fields: fields,
	    onConfirm: options.onConfirm ? true : false,
	    cancelFunc: cancelFunc ? true : false,
	    textInfo: options.textInfo ? options.textInfo : false,
	    textInfoShow: options.textInfoShow ? options.textInfoShow : false,
	    buttonHide: options.buttonHide ? true : false
	  }));
	
	  $('#modal').click(function () {
	    var paramArray = parentdiv.find('form').serializeArray();
	    var paramObj = {};
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	    onConfirm(paramObj);
	  });
	
	  $('#cancelButton').click(function () {
	    var paramArray = parentdiv.find('form').serializeArray();
	    var paramObj = {};
	    paramArray.forEach(function (param) {
	      paramObj[param.name] = param.value;
	    });
	    cancelFunc(paramObj);
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