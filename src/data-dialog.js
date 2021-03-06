/**
 * Created by liukai on 16/8/18.
 */

'use strict';
var tools = require('./wui-tools.js');
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
    if(target.formatDate){
      target.value = tools.getFormat(target.value,'yyyy-MM-dd HH:mm:ss');
    }
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
      case 'email':
        target.email = true;
        break;
      case 'date':
        target.value = target.format ? tools.getFormat(target.value,target.format) : tools.getFormat(target.value,'yyyy-MM-dd HH:mm:ss');
        target.text = true;
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
    textInfoShow:options.textInfoShow ? options.textInfoShow : false,
    buttonHide: options.buttonHide ? true : false,
    confirmButton : options.confirmButton ? options.confirmButton : false,
    cancelButton : options.cancelButton ?  options.cancelButton : false
  }));

  //$('#modal').click(function() {
  //  var paramArray = parentdiv.find('form').serializeArray();
  //  var paramObj = {};
  //  paramArray.forEach(function(param) {
  //    paramObj[param.name] = param.value;
  //  });
  //  onConfirm(paramObj);
  //  event.preventDefault();
  //});



  if(cancelFunc) {
    $('#cancelButton').click(function () {
      event.preventDefault();
      var paramArray = parentdiv.find('form').serializeArray();
      var paramObj = {};
      paramArray.forEach(function (param) {
        paramObj[param.name] = param.value;
      });
      cancelFunc(paramObj);
    });
  }

  $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(
    {
      submitSuccess: function ($form, event) {
        event.preventDefault();
        var paramArray = parentdiv.find('form').serializeArray();
        var paramObj = {};
        paramArray.forEach(function(param) {
          paramObj[param.name] = param.value;
        });

        options.fields.map(function(field) {
          var _func  = meta[field].voild ? meta[field].voild : false
          if(_func){
            var message = _func(paramObj[field]);
            if(message){
              var helpId = '#'+field+'help';
              $(helpId).text(message);
              return false;
            }
          }
        })
        console.log('12321',paramObj)
        //onConfirm(paramObj);
      }
    }
  ); } );

};

module.exports = {
  create: create
};




