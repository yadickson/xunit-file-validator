xunit-file-validator
==============


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/xunit-file-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/xunit-file-validator
[travis-image]: https://img.shields.io/travis/yadickson/xunit-file-validator.svg?style=flat-square
[travis-url]: https://travis-ci.org/yadickson/xunit-file-validator
[download-image]: https://img.shields.io/npm/dm/xunit-file-validator.svg?style=flat-square
[download-url]: https://npmjs.org/package/xunit-file-validator

NodeJS utility to validate xunit files and find duplicate lines

Install
-------

```script
$ npm i xunit-file-validator --save-dev
```

Add in package.json scripts
---------------------------

```js
"scripts": {
  "xunit-validator": "xunit-file-validator ./test-reports/junit.xml"
}
```

License
-------

GPL-3.0 © [Yadickson Soto](https://github.com/yadickson)
