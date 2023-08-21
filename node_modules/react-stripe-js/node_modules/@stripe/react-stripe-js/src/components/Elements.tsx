// Must use `import *` or named imports for React's types
import {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';
import * as stripeJs from '@stripe/stripe-js';

import React from 'react';
import PropTypes from 'prop-types';

import {usePrevious} from '../utils/usePrevious';
import {
  extractAllowedOptionsUpdates,
  UnknownOptions,
} from '../utils/extractAllowedOptionsUpdates';
import {isStripe, isPromise} from '../utils/guards';

const INVALID_STRIPE_ERROR =
  'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';

// We are using types to enforce the `stripe` prop in this lib, but in a real
// integration `stripe` could be anything, so we need to do some sanity
// validation to prevent type errors.
const validateStripe = (maybeStripe: unknown): null | stripeJs.Stripe => {
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }

  throw new Error(INVALID_STRIPE_ERROR);
};

type ParsedStripeProp =
  | {tag: 'empty'}
  | {tag: 'sync'; stripe: stripeJs.Stripe}
  | {tag: 'async'; stripePromise: Promise<stripeJs.Stripe | null>};

const parseStripeProp = (raw: unknown): ParsedStripeProp => {
  if (isPromise(raw)) {
    return {
      tag: 'async',
      stripePromise: Promise.resolve(raw).then(validateStripe),
    };
  }

  const stripe = validateStripe(raw);

  if (stripe === null) {
    return {tag: 'empty'};
  }

  return {tag: 'sync', stripe};
};

interface ElementsContextValue {
  elements: stripeJs.StripeElements | null;
  stripe: stripeJs.Stripe | null;
}

const ElementsContext = React.createContext<ElementsContextValue | null>(null);
ElementsContext.displayName = 'ElementsContext';

export const parseElementsContext = (
  ctx: ElementsContextValue | null,
  useCase: string
): ElementsContextValue => {
  if (!ctx) {
    throw new Error(
      `Could not find Elements context; You need to wrap the part of your app that ${useCase} in an <Elements> provider.`
    );
  }

  return ctx;
};

interface ElementsProps {
  /**
   * A [Stripe object](https://stripe.com/docs/js/initializing) or a `Promise` resolving to a `Stripe` object.
   * The easiest way to initialize a `Stripe` object is with the the [Stripe.js wrapper module](https://github.com/stripe/stripe-js/blob/master/README.md#readme).
   * Once this prop has been set, it can not be changed.
   *
   * You can also pass in `null` or a `Promise` resolving to `null` if you are performing an initial server-side render or when generating a static site.
   */
  stripe: PromiseLike<stripeJs.Stripe | null> | stripeJs.Stripe | null;

  /**
   * Optional [Elements configuration options](https://stripe.com/docs/js/elements_object/create).
   * Once the stripe prop has been set, these options cannot be changed.
   */
  options?: stripeJs.StripeElementsOptions;
}

interface PrivateElementsProps {
  stripe: unknown;
  options?: UnknownOptions;
  children?: ReactNode;
}

/**
 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
 *
 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
 * Pass the returned `Promise` to `Elements`.
 *
 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
 */
export const Elements: FunctionComponent<PropsWithChildren<ElementsProps>> = (({
  stripe: rawStripeProp,
  options,
  children,
}: PrivateElementsProps) => {
  const final = React.useRef(false);
  const isMounted = React.useRef(true);
  const parsed = React.useMemo(() => parseStripeProp(rawStripeProp), [
    rawStripeProp,
  ]);
  const [ctx, setContext] = React.useState<ElementsContextValue>(() => ({
    stripe: null,
    elements: null,
  }));

  const prevStripe = usePrevious(rawStripeProp);
  if (prevStripe !== null) {
    if (prevStripe !== rawStripeProp) {
      console.warn(
        'Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.'
      );
    }
  }

  if (!final.current) {
    if (parsed.tag === 'sync') {
      final.current = true;
      setContext({
        stripe: parsed.stripe,
        elements: parsed.stripe.elements(options),
      });
    }

    if (parsed.tag === 'async') {
      final.current = true;
      parsed.stripePromise.then((stripe) => {
        if (stripe && isMounted.current) {
          // Only update Elements context if the component is still mounted
          // and stripe is not null. We allow stripe to be null to make
          // handling SSR easier.
          setContext({
            stripe,
            elements: stripe.elements(options),
          });
        }
      });
    }
  }

  const prevOptions = usePrevious(options);
  React.useEffect(() => {
    if (!ctx.elements) {
      return;
    }

    const updates = extractAllowedOptionsUpdates(options, prevOptions, [
      'clientSecret',
      'fonts',
    ]);

    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]);

  React.useEffect(() => {
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    const anyStripe: any = ctx.stripe;

    if (
      !anyStripe ||
      !anyStripe._registerWrapper ||
      !anyStripe.registerAppInfo
    ) {
      return;
    }

    anyStripe._registerWrapper({name: 'react-stripe-js', version: _VERSION});

    anyStripe.registerAppInfo({
      name: 'react-stripe-js',
      version: _VERSION,
      url: 'https://stripe.com/docs/stripe-js/react',
    });
  }, [ctx.stripe]);

  return (
    <ElementsContext.Provider value={ctx}>{children}</ElementsContext.Provider>
  );
}) as FunctionComponent<PropsWithChildren<ElementsProps>>;

Elements.propTypes = {
  stripe: PropTypes.any,
  options: PropTypes.object as any,
};

export const useElementsContextWithUseCase = (
  useCaseMessage: string
): ElementsContextValue => {
  const ctx = React.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};

/**
 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
 */
export const useElements = (): stripeJs.StripeElements | null => {
  const {elements} = useElementsContextWithUseCase('calls useElements()');
  return elements;
};

/**
 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
 */
export const useStripe = (): stripeJs.Stripe | null => {
  const {stripe} = useElementsContextWithUseCase('calls useStripe()');
  return stripe;
};

interface ElementsConsumerProps {
  children: (props: ElementsContextValue) => ReactNode;
}

/**
 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
 */
export const ElementsConsumer: FunctionComponent<ElementsConsumerProps> = ({
  children,
}) => {
  const ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>');

  // Assert to satisfy the busted React.FC return type (it should be ReactNode)
  return children(ctx) as ReactElement | null;
};

ElementsConsumer.propTypes = {
  children: PropTypes.func.isRequired,
};
