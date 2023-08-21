"use strict";

exports.__esModule = true;
exports.default = void 0;

var _createWebStorage = _interopRequireDefault(require("./createWebStorage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWebStorage.default)('session');

exports.default = _default;