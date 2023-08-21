const library = require('./sass.dart.js');
library.load({
  util: require("util"),
  immutable: require("immutable"),
  fs: require("fs"),
});

module.exports = library;
