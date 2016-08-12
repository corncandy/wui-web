'use strict';

var create = function(options) {
  var $el = options.$el;

  $el.html(Handlebars.templates['site-header'](options));

  $el.find('#change-password').click(function() {
    WUI.ajax({
      url: '/upp/web/v1/sso/getResetPassword'
    }).done(function(resp) {
      window.location.href = resp.resetPasswordUrl;
    });
  });
  $el.find('#logout').click(function() {
    WUI.ajax({
      url: '/upp/web/v1/sso/logout'
    }).done(function(resp) {
      window.location.href = resp.loginUrl;
    });
  });
};

module.exports = {
  create: create
};
