import Ember from 'ember';
import WithDelayedPropertyMixin from '../mixins/with-delayed-property';


/**
 * Our base component
 * @class SectionComponent
 * @extends Ember.Component
 * @uses WithDelayedPropertyMixin
 * @abstract
 */
var SectionComponent = Ember.Component.extend(WithDelayedPropertyMixin, {
  /**
   * @property tagName
   * @inheritDoc
   */
  tagName:                    'section',
  /**
   * @property delayedPropertyName
   * @inheritDoc
   */
  delayedPropertyName:        'content',
  /**
   * @property delayedPropertyDestination
   * @inheritDoc
   */
  delayedPropertyDestination: 'html',
  /**
   * @property delayedPropertyMethod
   * @inheritDoc
   */
  delayedPropertyMethod:      'debounce',

  /**
   * The rendered html
   * @property html
   * @type String
   */
  html: '',

  /**
   * The HTML string, for Handlebars to not escape the html tags and simply render it as-is
   * @property handlebarsHtml
   * @type String
   */
  handlebarsHtml: Ember.computed('html', function () {
    return Ember.String.htmlSafe(this.get('html') || '');
  }).readOnly()
});

export default SectionComponent;
