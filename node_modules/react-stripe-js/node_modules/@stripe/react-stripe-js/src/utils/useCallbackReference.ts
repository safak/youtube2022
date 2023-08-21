import React from 'react';

export const useCallbackReference = <A extends unknown[]>(
  cb?: (...args: A) => any
): ((...args: A) => void) => {
  const ref = React.useRef(cb);

  React.useEffect(() => {
    ref.current = cb;
  }, [cb]);

  return (...args): void => {
    if (ref.current) {
      ref.current(...args);
    }
  };
};
