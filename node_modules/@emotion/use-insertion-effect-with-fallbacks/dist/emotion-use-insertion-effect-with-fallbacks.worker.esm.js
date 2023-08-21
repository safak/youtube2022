import * as React from 'react';
import { useLayoutEffect } from 'react';

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  syncFallback ;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || useLayoutEffect;

export { useInsertionEffectAlwaysWithSyncFallback, useInsertionEffectWithLayoutFallback };
