import * as React from 'react';
import { useLayoutEffect } from 'react';

var isBrowser = typeof document !== 'undefined';

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || useLayoutEffect;

export { useInsertionEffectAlwaysWithSyncFallback, useInsertionEffectWithLayoutFallback };
