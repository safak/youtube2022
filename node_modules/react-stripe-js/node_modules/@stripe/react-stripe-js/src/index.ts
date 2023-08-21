import createElementComponent from './components/createElementComponent';
import {
  AuBankAccountElementComponent,
  CardElementComponent,
  CardNumberElementComponent,
  CardExpiryElementComponent,
  CardCvcElementComponent,
  FpxBankElementComponent,
  IbanElementComponent,
  IdealBankElementComponent,
  P24BankElementComponent,
  EpsBankElementComponent,
  LinkAuthenticationElementComponent,
  PaymentElementComponent,
  PaymentRequestButtonElementComponent,
  ShippingAddressElementComponent,
  AffirmMessageElementComponent,
  AfterpayClearpayMessageElementComponent,
} from './types';

export * from './types';

export {
  useElements,
  useStripe,
  Elements,
  ElementsConsumer,
} from './components/Elements';

const isServer = typeof window === 'undefined';

/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const AuBankAccountElement: AuBankAccountElementComponent = createElementComponent(
  'auBankAccount',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const CardElement: CardElementComponent = createElementComponent(
  'card',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const CardNumberElement: CardNumberElementComponent = createElementComponent(
  'cardNumber',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const CardExpiryElement: CardExpiryElementComponent = createElementComponent(
  'cardExpiry',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const CardCvcElement: CardCvcElementComponent = createElementComponent(
  'cardCvc',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const FpxBankElement: FpxBankElementComponent = createElementComponent(
  'fpxBank',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const IbanElement: IbanElementComponent = createElementComponent(
  'iban',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const IdealBankElement: IdealBankElementComponent = createElementComponent(
  'idealBank',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const P24BankElement: P24BankElementComponent = createElementComponent(
  'p24Bank',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const EpsBankElement: EpsBankElementComponent = createElementComponent(
  'epsBank',
  isServer
);

export const PaymentElement: PaymentElementComponent = createElementComponent(
  'payment',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const PaymentRequestButtonElement: PaymentRequestButtonElementComponent = createElementComponent(
  'paymentRequestButton',
  isServer
);

/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const LinkAuthenticationElement: LinkAuthenticationElementComponent = createElementComponent(
  'linkAuthentication',
  isServer
);

/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const ShippingAddressElement: ShippingAddressElementComponent = createElementComponent(
  'shippingAddress',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const AffirmMessageElement: AffirmMessageElementComponent = createElementComponent(
  'affirmMessage',
  isServer
);

/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
export const AfterpayClearpayMessageElement: AfterpayClearpayMessageElementComponent = createElementComponent(
  'afterpayClearpayMessage',
  isServer
);
