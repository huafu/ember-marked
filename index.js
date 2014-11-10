'use strict';

module.exports = {
  name: 'ember-marked',

  contentFor: function (type, config) {
    var conf = config.marked || {}, what, content = [];
    if (type === 'head') {
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
        if (what.js) {
          content.push('<link rel="stylesheet" href="' + what.css + '">');
        }
        if (what.css) {
          content.push('<script src="' + what.js + '"></script>');
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
        content.push('<script src="' + conf.js + '"></script>');
      }
    }
    return content.join('') || null;
  }
};
