import 'react';
import '@emotion/cache';
import { h as hasOwnProperty, E as Emotion, c as createEmotionProps } from '../../dist/emotion-element-4644807c.worker.esm.js';
import '@babel/runtime/helpers/extends';
import '@emotion/weak-memoize';
import 'hoist-non-react-statics';
import '../../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js';
import '@emotion/utils';
import '@emotion/serialize';
import '@emotion/use-insertion-effect-with-fallbacks';
import { Fragment as Fragment$1, jsxDEV as jsxDEV$1 } from 'react/jsx-dev-runtime';

var Fragment = Fragment$1;
function jsxDEV(type, props, key, isStaticChildren, source, self) {
  if (!hasOwnProperty.call(props, 'css')) {
    return jsxDEV$1(type, props, key, isStaticChildren, source, self);
  }

  return jsxDEV$1(Emotion, createEmotionProps(type, props), key, isStaticChildren, source, self);
}

export { Fragment, jsxDEV };
