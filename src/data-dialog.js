/**
 * Created by liukai on 16/8/18.
 */

'use strict';

var create = function(options) {
  var $el = options.$el;
  var meta = options.meta;
  var onConfirm = options.onConfirm;
  var cancelFunc = options.onCancel;
  var fields = options.fields.map(function(field) {
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
  if($el){
    var parentdiv = $el;
  }else{
    var parentdiv=$('<div></div>');
    parentdiv.attr('id','table-body');
    parentdiv.addClass('row');
    parentdiv.appendTo('.data-table');
  }
  parentdiv.html(Handlebars.templates['data-dialog']({
    fields: fields,
    onConfirm: options.onConfirm ? true : false,
    cancelFunc: cancelFunc ? true : false,
    textInfo: options.textInfo ? options.textInfo : false,
    textInfoShow:options.textInfoShow ? options.textInfoShow : false,
    buttonHide: options.buttonHide ? true : false
  }));

  $('#modal').click(function() {
    var paramArray = parentdiv.find('form').serializeArray();
    var paramObj = {};
    paramArray.forEach(function(param) {
      paramObj[param.name] = param.value;
    });
    onConfirm(paramObj);
  });

  $('#cancelButton').click(function() {
    var paramArray = parentdiv.find('form').serializeArray();
    var paramObj = {};
    paramArray.forEach(function(param) {
      paramObj[param.name] = param.value;
    });
    cancelFunc(paramObj);
  });
};

module.exports = {
  create: create
};




