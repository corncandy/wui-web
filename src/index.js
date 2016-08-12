'use strict';

require('../templates/templates.js');

var SiteHeader = require('./site-header.js');

module.exports = {
  SiteHeader: SiteHeader,
  templates: Handlebars.templates
};

