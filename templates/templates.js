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
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cancelButton : depth0),{"name":"if","hash":{},"fn":this.program(23, data, 0),"inverse":this.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.confirmButton : depth0),{"name":"if","hash":{},"fn":this.program(27, data, 0),"inverse":this.program(29, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"23":function(depth0,helpers,partials,data) {
    var helper;

  return "            <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">"
    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"25":function(depth0,helpers,partials,data) {
    return "            <button id=\"cancelButton\"  class=\"btn btn-default cancel-button\">取消</button>\n";
},"27":function(depth0,helpers,partials,data) {
    var helper;

  return "            <button id=\"modal\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-primary save-button\">"
    + this.escapeExpression(((helper = (helper = helpers.confirmButton || (depth0 != null ? depth0.confirmButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"confirmButton","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"29":function(depth0,helpers,partials,data) {
    return "            <button id=\"modal\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-primary save-button\">确定</button>\n";
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