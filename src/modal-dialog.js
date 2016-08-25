/**
 * Created by liukai on 16/8/18.
 */

'use strict';
var tools = require('./wui-tools.js');
var create = function(options) {
  var message = options.message;
  var parentdiv=$('<div></div>');
  parentdiv.attr('id','html-dialog');
  parentdiv.appendTo('body');

  parentdiv.html(Handlebars.templates['modal-dialog']({
    message : message ? message : false,
    title : options.title ? options.title : false
  }));

};

module.exports = {
  create: create
};




