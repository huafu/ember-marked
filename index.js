'use strict';

module.exports = {
  name: 'ember-marked',

  contentFor: function (type, config) {
    var conf = config.marked || {}, what, cssContent = [], scriptContent = [];
    if (type === 'head' || type === 'body') {
      // include highlightjs
      if (!conf.hasOwnProperty('highlightjs') || conf.highlightjs) {
        if (conf.highlightjs && typeof conf.highlightjs === 'object') {
          what = conf.highlightjs;
        }
        else {
          what = {};
        }
        if (what.version == null) {
          what.version = '8.3';
        }
        if (what.js == null || what.js === true) {
          what.js = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/' + what.version + '/highlight.min.js';
        }
        if (what.css == null || what.css === true) {
          what.css = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/' + what.version + '/styles/default.min.css';
        }
        if (what.css) {
          cssContent.push('<link rel="stylesheet" href="' + what.css + '">');
        }
        if (what.js) {
          scriptContent.push('<script src="' + what.js + '"></script>');
        }
      }

      // include marked
      if (conf.version == null) {
        conf.version = '0.3.2';
      }
      if (conf.js == null || conf.js === true) {
        conf.js = '//cdnjs.cloudflare.com/ajax/libs/marked/' + conf.version + '/marked.min.js';
      }
      if (conf.js) {
        scriptContent.push('<script src="' + conf.js + '"></script>');
      }
    }
    if (type === 'head') {
      return cssContent.join('');
    }
    if (type === 'body') {
      return scriptContent.join('');
    }
    return null;
  }
};
