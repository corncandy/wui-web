/**
 * Created by liukai on 16/8/15.
 */
var xss = require('xss');
var alert = require('./wui-alert.js');
var loading = require('./page-loading.js')
var getUrl = function (uri) {
  var doc = document;
  var elem = doc.createElement('a');

  elem.href = uri;

  return {
    source: uri,
    protocol: elem.protocol.replace(':', ''),
    host: elem.hostname,
    port: elem.port,
    query: elem.search,
    params: (function () {
      var ret = {},
        seg = elem.search.replace(/^\?/, '').split('&'),
        len = seg.length,
        i = 0,
        s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue; }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
      }
      return ret;
    })(),
    file: (elem.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: elem.hash.replace('#', ''),
    path: elem.pathname.replace(/^([^\/])/, '/$1'),
    relative: (elem.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: elem.pathname.replace(/^\//, '').split('/')
  };

};

var getParams = function () {
  var _url = getUrl(window.location.href),
    _params = _url.params;
  return _params;
};

var format = function (time, format) {
  if (time == null) {
    return '';
  } else {
    var t = new Date(time);
    var tf = function (i) {
      return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
          break;
        case 'MM':
          return tf(t.getMonth() + 1);
          break;
        case 'mm':
          return tf(t.getMinutes());
          break;
        case 'dd':
          return tf(t.getDate());
          break;
        case 'HH':
          return tf(t.getHours());
          break;
        case 'ss':
          return tf(t.getSeconds());
          break;
      };
    });
  }
};

var ajax = function (options) {
  loading.create();
  if (options.jsonData) {
    for (var p in options.jsonData) {
      options.jsonData[p] = xss(options.jsonData[p]);
    }
  }
  var data = $.extend({}, options.jsonData || {}, {
    reqHeader: {
      entityId: 'upp',
      appId: WUI.config.system,
      sessionId: '1462461678582',
      reqId: (new Date()).getTime(),
      accessToken: 'accessTokenTest'
    }
  });
  var params = $.extend({}, options, {
    method: options.method ? options.method : 'POST',
    contentType: 'application/json;charset=utf-8',
    data: (options.method === 'GET' || options.method === 'get') ? 'jsonString=' + JSON.stringify(data) : JSON.stringify(data)
  });

  return $.ajax(params)
    .then(function (resp, textStatus, jqXHR) {
      $('#loading-pop').remove();
      var code = resp.respHeader.respCode;
      if (code === 'UPP-10000' || code === 'AAS-10000') {
        resp.etag = jqXHR.getResponseHeader('ETag');
        return resp;
      } else if (code === 'AAS-920001' || code === 'AAS-920006') {
        window.location.href = resp.loginUrl;
      } else {
        var errorMessage = resp.respHeader.resMessageExt;

        if (!errorMessage) {
          errorMessage = resp.respHeader.respMessage || '';
        }
        alert.create({
          message: errorMessage,
          fail: true
        });
        return $.Deferred().reject(jqXHR, resp, errorMessage).promise();
      }
    }).fail(function (resp, jqXHR, errorMessage) {
      alert.create({
        message: errorMessage || 'Ajax Failed!',
        fail: true
      });
    });
};


module.exports = {
  getUrl: getUrl,
  getParams: getParams,
  getFormat: format,
  ajax: ajax
};
