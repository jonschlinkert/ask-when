# ask-when [![NPM version](https://img.shields.io/npm/v/ask-when.svg?style=flat)](https://www.npmjs.com/package/ask-when) [![NPM downloads](https://img.shields.io/npm/dm/ask-when.svg?style=flat)](https://npmjs.org/package/ask-when)

Conditionally prompt the user based on options. For use with Base applications or question-store.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ask-when
```

## Compatibility

Can be used with any of the following libs:

* [question-cache](https://github.com/jonschlinkert/question-cache)
* [question-store](https://github.com/jonschlinkert/question-store)
* [base](https://github.com/node-base/base), when the [base-questions](https://github.com/node-base/base-questions) plugin is used
* [assemble](https://github.com/assemble/assemble), in your `assemblefile.js`
* [generate](https://github.com/generate/generate), in your `generator.js`
* [update](https://github.com/update/update), in your `updatefile.js`
* [verb](https://github.com/verbose/verb), in your `verbfile.js`

## API

### Options

This library wraps the `.ask` method from [base-questions](https://github.com/node-base/base-questions) to allow prompts to be conditionally skipped when one of the following values is defined on `options` (either on `app.options`, or options passed to `askWhen` directly)

* `never`: the question will always be skipped
* `always`: the question will always be asked
* `not-answered`: the question will only be asked if a value is not already defined

### askWhen

The main export is a function that can be passed to `.use()`, if you want to register this as a plugin.

```js
app.askWhen(name, options, cb);
```

**Params**

* `name` **{String}**: question name
* `options` **{Object|Function}**: Callback, or options object. If options, an "answer" value may be passed on `options[name]`.
* `cb` **{Function}**: callback

**Prerequisites**

* [base-questions](https://github.com/node-base/base-questions): the `base-questions` plugin must be registered before `ask-when` is registered
* `isApp` must be defined on the instance (either define `app.isApp = true`, or pass `{isApp: true}` to the constructor. This prevents the plugin from loading on [invalid instances](https://github.com/node-base/is-valid-app)):

**Register the plugin**

```js
var askWhen = require('ask-when');
var questions = require('base-questions');
var Base = require('base');
var app = new Base({isApp: true});

// register plugins
app.use(questions());
app.use(askWhen());
```

**Example usage**

```js
// define when 
app.options.askWhen = 'not-answered';

app.question('dest', 'Destination directory?', {default: process.cwd()})
  .askWhen('dest', function(err, answers) {
    if (err) return console.log(err);
    console.log(answers)
  });
```

### .when

Alternatively, a `.when` method is exposed if you don't want to register this as a plugin.

```js
ask.when(app, name, val, cb);
```

**Params**

* `app` **{Object}**: instance of [base](https://github.com/node-base/base) (one of the applications listed in the [compatibility section](#compatibility))
* `name` **{String}**: question name
* `options` **{Object|Function}**: Callback, or options object. If options, an "answer" value may be passed on `options[name]`.
* `cb` **{Function}**: callback

**Prerequisites**

* [base-questions](https://github.com/node-base/base-questions): the `base-questions` plugin must be registered before `ask-when` is registered

```js
var ask = require('ask-when');
var askWhen = require('ask-when');
var questions = require('base-questions');
var Base = require('base');
var app = new Base({isApp: true});

// register the `base-questions` plugin first
app.use(questions());

// ask questions
app.question('dest', 'Destination directory?', {default: process.cwd()})
ask.when(app, 'dest', function(err, answers) {
  if (err) return console.log(err);
  console.log(answers)
});
```

## About

### Related projects

* [base-questions](https://www.npmjs.com/package/base-questions): Plugin for base-methods that adds methods for prompting the user and storing the answers on… [more](https://github.com/node-base/base-questions) | [homepage](https://github.com/node-base/base-questions "Plugin for base-methods that adds methods for prompting the user and storing the answers on a project-by-project basis.")
* [question-cache](https://www.npmjs.com/package/question-cache): A wrapper around inquirer that makes it easy to create and selectively reuse questions. | [homepage](https://github.com/jonschlinkert/question-cache "A wrapper around inquirer that makes it easy to create and selectively reuse questions.")
* [question-store](https://www.npmjs.com/package/question-store): Ask questions, persist the answers. Basic support for i18n and storing answers based on current… [more](https://github.com/jonschlinkert/question-store) | [homepage](https://github.com/jonschlinkert/question-store "Ask questions, persist the answers. Basic support for i18n and storing answers based on current working directory.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/ask-when/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 11, 2016._