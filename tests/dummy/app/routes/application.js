/* globals hljs */
import Ember from 'ember';


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
    controller.set('markdownSource', '# Some title\n---\nHello **you**!');
    controller.set('codeSource', 'if (a === b) {\n  alert("hello");\n}');
  }
});
