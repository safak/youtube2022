'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('@emotion/cache');
var emotionElement = require('../../dist/emotion-element-20108edd.cjs.prod.js');
require('@babel/runtime/helpers/extends');
require('@emotion/weak-memoize');
require('hoist-non-react-statics');
require('../../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.prod.js');
require('@emotion/utils');
require('@emotion/serialize');
require('@emotion/use-insertion-effect-with-fallbacks');
var ReactJSXRuntimeDev = require('react/jsx-dev-runtime');

var Fragment = ReactJSXRuntimeDev.Fragment;
function jsxDEV(type, props, key, isStaticChildren, source, self) {
  if (!emotionElement.hasOwnProperty.call(props, 'css')) {
    return ReactJSXRuntimeDev.jsxDEV(type, props, key, isStaticChildren, source, self);
  }

  return ReactJSXRuntimeDev.jsxDEV(emotionElement.Emotion, emotionElement.createEmotionProps(type, props), key, isStaticChildren, source, self);
}

exports.Fragment = Fragment;
exports.jsxDEV = jsxDEV;
