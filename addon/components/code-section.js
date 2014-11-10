/* globals hljs */
import Ember from 'ember';
import SectionComponent from './section';

/**
 * The code section component
 *
 * @class CodeSectionComponent
 * @extends SectionComponent
 * @constructor
 */
var CodeSectionComponent = SectionComponent.extend({
  /**
   * @property classNames
   * @inheritDoc
   */
  classNames: ['code'],

  /**
   * @property delayedPropertyName
   * @inheritDoc
   */
  delayedPropertyName: 'codeMeta',

  /**
   * Used to have a property depending on both content and language
   * @property codeMeta
   * @type {{content: String, language: String}}
   */
  codeMeta: Ember.computed('content', 'language', function () {
    return this.getProperties('content', 'language');
  }).readOnly(),

  /**
   * @property delayedPropertyFunction
   * @inheritDoc
   */
  delayedPropertyFunction: function (meta) {
    var code;
    /* jshint -W116 */
    if (meta.content == null) {
      // just return an empty string if we are null or empty
      this.set('detectedLanguage', null);
      return '';
    }
    else {
      code = CodeSectionComponent.highlight(meta.content, meta.language, true);
      this.set('detectedLanguage', code.language);
      return code.value;
    }
  },

  /**
   * Language to use
   * @property language
   * @type String
   */
  language: null,

  /**
   * The detected language of the last highlighted code
   * @property detectedLanguage
   * @type String
   */
  detectedLanguage: null
});

// entities parsing when not using highlightjs
var ENTITIES = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;'
};
function entitiesReplacer(chr) {
  return ENTITIES[chr];
}

CodeSectionComponent.reopenClass({
  /**
   * Highlighter function, using highlight.js if available
   *
   * @method highlight
   * @param {String} code
   * @param {String} [language]
   * @param {Boolean} [bare=false]
   * @returns {String|{value: String, language: String}}
   */
  highlight: function (code, language, bare) {
    var result;
    if (typeof hljs !== 'undefined') {
      if (language) {
        result = hljs.highlight(language, code, true);
      }
      else {
        result = hljs.highlightAuto(code);
      }
      result.value = '<pre><code>' + result.value + '</code></pre>';
      if (bare) {
        return result;
      }
      else {
        return result.value;
      }
    }
    else {
      result = '<pre><code>' + (code || '').replace(/<>&/g, entitiesReplacer) + '</code></pre>';
      if (bare) {
        return {value: result, language: null};
      }
      else {
        return result;
      }
    }
  }
});

export default CodeSectionComponent;
