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
})();