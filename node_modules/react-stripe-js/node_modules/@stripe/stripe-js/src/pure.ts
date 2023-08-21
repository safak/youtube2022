import {
  validateLoadParams,
  loadScript,
  initStripe,
  LoadStripe,
  LoadParams,
} from './shared';

type SetLoadParams = (params: LoadParams) => void;

let loadParams: null | LoadParams;
let loadStripeCalled = false;

export const loadStripe: LoadStripe & {setLoadParameters: SetLoadParams} = (
  ...args
) => {
  loadStripeCalled = true;
  const startTime = Date.now();

  return loadScript(loadParams).then((maybeStripe) =>
    initStripe(maybeStripe, args, startTime)
  );
};

loadStripe.setLoadParameters = (params): void => {
  if (loadStripeCalled) {
    throw new Error(
      'You cannot change load parameters after calling loadStripe'
    );
  }

  loadParams = validateLoadParams(params);
};
