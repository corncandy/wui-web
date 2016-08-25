/**
 * Created by liukai on 16/8/24.
 */

'use strict';
var create = function(options) {
  var $el = options.$el;
  var meta = options.meta;

  $el.html(Handlebars.templates['content-header']({
    paths:meta
  }));

};

module.exports = {
  create: create
};




