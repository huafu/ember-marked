/* globals marked */
import Ember from 'ember';
import SectionComponent from './section';
import CodeSectionComponent from './code-section';

/**
 * The markdown section component
 *
 * @class MarkdownSectionComponent
 * @extends SectionComponent
 * @constructor
 */
var MarkdownSectionComponent = SectionComponent.extend({
  /**
   * @property classNames
   * @inheritDoc
   */
  classNames: ['markdown'],

  /**
   * @property delayedPropertyFunction
   * @inheritDoc
   */
  delayedPropertyFunction:    function (source) {
    var self = this;
    /* jshint -W116 */
    if (source == null) {
      // just return an empty string if we are null or empty
      return '';
    }
    else {
      // return a promise resolving to rendered marked section
      return new Ember.RSVP.Promise(function (resolve, reject) {
        var options = self.get('_markedOptions');
        marked(source, options, function (err, content) {
          if (err) {
            reject(err);
          }
          else {
            resolve(content);
          }
        });
      }, 'Rendering markdown source');
    }
  },

  /**
   * Marked options
   * @property options
   * @type Object
   */
  options: null,

  /**
   * Markdown options, completed with default ones
   * @property _markedOptions
   * @type Object
   * @private
   */
  _markedOptions: Ember.computed('options', function () {
    var options = {};
    var localOptions = this.get('options');
    var defaultOptions = Ember.get(MarkdownSectionComponent, 'defaultOptions');
    Ember.merge(options, defaultOptions);
    if (localOptions) {
      Ember.merge(options, localOptions);
    }
    return options;
  }).readOnly()
});

MarkdownSectionComponent.reopenClass({
  /**
   * The default marked options
   * @property defaultOptions
   * @type {Object}
   */
  defaultOptions: Ember.computed(function () {
    var options = {
      gfm:         true,
      tables:      true,
      breaks:      false,
      pedantic:    false,
      sanitize:    false,
      smartLists:  true,
      smartypants: false
    };

    /**
     * The highlight  method
     * @property highlight
     * @type Function
     */
    options.highlight = CodeSectionComponent.highligt;

    return options;
  })
});

export default MarkdownSectionComponent;
