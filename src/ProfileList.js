'use strict';

var create = function(options) {
  var $el = options.$el;

  $el.html(Handlebars.templates['profile-list']());
};

module.exports = {
  create: create
};
