# `cli-columns`

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Columnated lists for the CLI. Unicode and ANSI safe.

## Install

    $ npm install --save cli-columns

## Usage

```js
const columns = require('cli-columns');
const chalk = require('chalk');

const values = [
    'blue' + chalk.bgBlue('berry'),
    '笔菠萝' + chalk.yellow('苹果笔'),
    chalk.red('apple'), 'pomegranate',
    'durian', chalk.green('star fruit'),
    'パイナップル', 'apricot', 'banana',
    'pineapple', chalk.bgRed.yellow('orange')
];

console.log(columns(values));
```

<img alt="screenshot" src="https://user-images.githubusercontent.com/155164/28672800-bd415c86-72ae-11e7-855c-6f6aa108921b.png">

## API

### columns(values [, options]): String

- `values` `{Array<String>}` Array of strings to display.
- `options` `{Object}`
  - `character` `{String}` (default: `' '`) Padding character.
  - `newline` `{String}` (default: `'\n'`) Newline character.
  - `padding` `{Number}` (default: `2`) Space between columns.
  - `sort` `{Boolean}` (default: `true`) Whether to sort results.
  - `width` `{Number}` (default: `process.stdout.columns`) Max width of list.

Sorts and formats a list of values into columns suitable to display in a given width.

## Contribute

Standards for this project, including tests, code coverage, and semantics are enforced with a build tool. Pull requests must include passing tests with 100% code coverage and no linting errors.

### Test

    $ npm test

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/cli-columns.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/cli-columns.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/cli-columns
