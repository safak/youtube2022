"use strict";

exports.__esModule = true;
exports.default = persistCombineReducers;

var _redux = require("redux");

var _persistReducer = _interopRequireDefault(require("./persistReducer"));

var _autoMergeLevel = _interopRequireDefault(require("./stateReconciler/autoMergeLevel2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
function persistCombineReducers(config, reducers) {
  config.stateReconciler = config.stateReconciler === undefined ? _autoMergeLevel.default : config.stateReconciler;
  return (0, _persistReducer.default)(config, (0, _redux.combineReducers)(reducers));
}