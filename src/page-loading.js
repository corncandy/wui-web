/**
 * Created by liukai on 16/8/18.
 */

'use strict';

var create = function(options) {
  var parentdiv=$('<div></div>');
  parentdiv.attr('id','loadingPop');
  parentdiv.appendTo('body');
  $('#loadingPop').html(Handlebars.templates['page-loading']());
};

module.exports = {
  create: create
};



