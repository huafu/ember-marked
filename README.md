# ember-marked

Ember component to easily render markdown (using `marked`, so GFM and syntax highlighting supported from scratch).
A very basic example application using those components is available [there](http://huafu.github.io/ember-marked/).

## Installation

* `npm install --save-dev ember-marked`

## Using

* To render markdown content, simply use the component in your templates: `{{markdown-section content=someMarkdownProperty}}`
* You also have access to a `code-section` component used to render syntax highlighted code: `{{code-section content=someSourceCode language='javascript'}}`
* You can look at the example application under `tests/dummy`, especially the `app/templates/application.hbs` showing a very simple example of using this addon.

## Configuration

* You can configure which  `marked` and `highlight.js` to use in your application configuration (`config/environment.js`) by adding a `marked` section like this:
    ```js
    marked: {
      // marked settings
      //version: '0.3.2', // default version, used when the js is not specified
      //js: false, // disable inclusion of the javascript (can be the URL to some other CDN)
      
      // highlight.js settings
      highlightjs: { // <== set to false to disable totally the inclusion of highlightjs
        //version: '8.3', // default version, used when the js and/or css are not specified
        //js: false, // disable inclusion of the javascript (can be the URL to some other CDN)
        //css: false, // disable inclusion of the css (can be the URL to some other CDN)
      }
    }
    ```

## Credits

* Author: **[Huafu Gandon](http://github.com/huafu)**
* This is using [marked](https://github.com/chjj/marked) and optionally [highlightjs](https://github.com/isagalaev/highlight.js) to render syntax highlighting sections
