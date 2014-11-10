/* globals hljs */
import Ember from 'ember';

/* jshint -W101 */
var MARKDOWN_SOURCE = "# ember-marked\n\nEmber component to easily render markdown (using `marked`, so GFM and syntax highlighting supported from scratch).\nA very basic example application using those components is available [there](http://huafu.github.io/ember-marked/).\n\n## Installation\n\n* `npm install --save-dev ember-marked`\n\n## Using\n\n* To render markdown content, simply use the component in your templates: `{{markdown-section someMarkdownProperty}}`\n* You also have access to a `code-section` component used to render syntax highlighted code: `{{code-section someSourceCode language=\'javascript\'}}`\n* You can look at the example application under `tests/dummy`, especially the `app/templates/application.hbs` showing a very simple example of using this addon.\n\n## Credits\n\n* Author: **[Huafu Gandon](http://github.com/huafu)**\n* This is using [marked](https://github.com/chjj/marked) and optionally [highlightjs](https://github.com/isagalaev/highlight.js) to render syntax highlighting sections\n";

/* jshint -W101 */
var CODE_SOURCE = "/* globals hljs */\nimport Ember from \'ember\';\n\n\nvar MARKDOWN_SOURCE = \'...\';\nvar CODE_SOURCE = \'...\';\n\nexport default Ember.Route.extend({\n  model: function () {\n    if (typeof hljs !== \'undefined\') {\n      return Ember.A(hljs.listLanguages());\n    }\n    else {\n      return Ember.A();\n    }\n  },\n\n  setupController: function (controller) {\n    this._super.apply(this, arguments);\n    controller.set(\'markdownSource\', MARKDOWN_SOURCE);\n    controller.set(\'codeSource\', CODE_SOURCE);\n  }\n});\n";

export default Ember.Route.extend({
  model: function () {
    if (typeof hljs !== 'undefined') {
      return Ember.A(hljs.listLanguages());
    }
    else {
      return Ember.A();
    }
  },

  setupController: function (controller) {
    this._super.apply(this, arguments);
    controller.setProperties({
      markdownSource:         MARKDOWN_SOURCE,
      markdownSideBySideMode: true,
      
      codeSource:         CODE_SOURCE,
      codeSideBySideMode: true
    });
  }
});
