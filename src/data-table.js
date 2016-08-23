/**
 * Created by liukai on 16/8/18.
 */


'use strict';

var create = function(options) {
  var $el = options.$el;
  var meta = options.meta;
  var fields = options.fields;
  var operations = options.operations;
  var groups = options.groups;
  var titles = fields.map(function(field) {
    return {
      title: meta[field].label,
      width: meta[field].width ? meta[field].width : ''
    };
  });
  var list = options.list.map(function(item) {
    return fields.map(function(field) {
      return item[field] == null ? '' : item[field];
    });
  });
  var ops = operations && operations.map(function(operation, index) {
      return {
        name: operation.name,
        className: 'operation-' + index,
        dialog: operation.dialog
      };
    });

  var groupList = groups && groups.map(function(group, index) {
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

  operations && operations.forEach(function(operation, i) {
    $el.find('.operation-' + i).each(function(j) {
      $(this).click(operation.callback.bind(null, options.list[j]));
    });
  });
  var checkItem = function() {
    var itemList = []
    $el.find("input[name='checkBox']:checked").each(function() {
      var item = options.list[$(this).index()];
      itemList.push(item)
    })
    return itemList;
  }
  groups && groups.forEach(function(group, i) {
    //$el.find("input[name='checkBox']").each(function(j) {
    //  $(this).click(group.callidback.bind(null, options.list[j]));
    //});
    $el.find('#' + group.id).click(group.callback.bind(null, checkItem));
  });
  var buttonStatus = function() {
    groups.forEach(function(group, i) {
      $el.find("input[name='checkBox']:checked").length > 0 ? $el.find('#' + group.id).removeAttr("disabled") : $el.find('#' + group.id).attr('disabled', 'true')
    });

  }
  $el.find("#checkAll").click(function() {
    $el.find('input[name="checkBox"]').prop("checked", this.checked);
    buttonStatus();
  });

  $el.find("input[name='checkBox']").click(function() {
    $el.find("#checkAll").prop("checked", $el.find("input[name='checkBox']").length == $el.find("input[name='checkBox']:checked").length ? true : false);
    buttonStatus();
  });
};

module.exports = {
  create: create
};


