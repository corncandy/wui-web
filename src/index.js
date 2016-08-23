'use strict';

require('../templates/templates.js');


var SiteHeader = require('./site-header.js');
var tools= require('./wui-tools.js');
var alert= require('./wui-alert.js');
var DataTable = require('./data-table.js');
var DataFilter = require('./data-filter');
var DataPaginator = require('./data-paginator.js');
var PageLoading = require('./page-loading.js');
var DataDialog = require('./data-dialog.js');
module.exports = {
  SiteHeader: SiteHeader,
  getUrl : tools.getUrl,
  getParams : tools.getParams,
  ajax:tools.ajax,
  warningAlert : alert,
  DataTable : DataTable,
  DataFilter : DataFilter,
  DataPaginator:DataPaginator,
  PageLoading:PageLoading,
  DataDialog:DataDialog,
  templates: Handlebars.templates
};

