'use strict';

require('../templates/templates.js');
require('./jqBootstrapValidation.js');

var SiteHeader = require('./site-header.js');
var tools= require('./wui-tools.js');
var alert= require('./wui-alert.js');
var DataTable = require('./data-table.js');
var DataFilter = require('./data-filter');
var DataPaginator = require('./data-paginator.js');
var PageLoading = require('./page-loading.js');
var DataDialog = require('./data-dialog.js');
var ContentHeader = require('./content-header.js');
var ModalDialog = require('./modal-dialog.js');
var ConfirmDialog = require('./confirm-dialog.js');
module.exports = {
  SiteHeader: SiteHeader,
  getUrl : tools.getUrl,
  link : tools.getParams,
  ajax:tools.ajax,
  format:tools.getFormat,
  t: tools.t,
  alert : alert,
  DataTable : DataTable,
  DataFilter : DataFilter,
  DataPaginator:DataPaginator,
  loading:PageLoading,
  dataDialog:DataDialog,
  ContentHeader:ContentHeader,
  ModalDialog:ModalDialog,
  ConfirmDialog:ConfirmDialog,
  templates: Handlebars.templates
};

