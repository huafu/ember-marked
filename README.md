# ember-marked

Ember component to easily render markdown (using `marked`, so GFM and syntax highlighting supported from scratch).
A very basic example application using those components is available [there](http://huafu.github.io/ember-marked/).

## Installation

* `npm install --save-dev ember-marked`

## Using

* To render markdown content, simply use the component in your templates: `{{markdown-section someMarkdownProperty}}`
* You also have access to a `code-section` component used to render syntax highlighted code: `{{code-section someSourceCode language='javascript'}}`
* You can look at the example application under `tests/dummy`, especially the `app/templates/application.hbs` showing a very simple example of using this addon.

## Credits

* Author: **[Huafu Gandon](http://github.com/huafu)**
* This is using [marked](https://github.com/chjj/marked) and optionally [highlightjs](https://github.com/isagalaev/highlight.js) to render syntax highlighting sections
