import {FunctionComponent} from 'react';
import * as stripeJs from '@stripe/stripe-js';

export interface ElementProps {
  /**
   * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
   */
  id?: string;

  /**
   * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
   */
  className?: string;

  /**
   * Triggered when the Element loses focus.
   */
  onBlur?: () => any;

  /**
   * Triggered when the Element receives focus.
   */
  onFocus?: () => any;
}

export interface AuBankAccountElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=auBankAccount).
   */
  options?: stripeJs.StripeAuBankAccountElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=auBankAccountElement).
   */
  onChange?: (event: stripeJs.StripeAuBankAccountElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeAuBankAccountElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type AuBankAccountElementComponent = FunctionComponent<
  AuBankAccountElementProps
>;

export interface CardElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=card).
   */
  options?: stripeJs.StripeCardElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardElement).
   */
  onChange?: (event: stripeJs.StripeCardElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeCardElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type CardElementComponent = FunctionComponent<CardElementProps>;

export interface CardNumberElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardNumber).
   */
  options?: stripeJs.StripeCardNumberElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardNumberElement).
   */
  onChange?: (event: stripeJs.StripeCardNumberElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeCardNumberElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type CardNumberElementComponent = FunctionComponent<
  CardNumberElementProps
>;

export interface CardExpiryElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardExpiry).
   */
  options?: stripeJs.StripeCardExpiryElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardExpiryElement).
   */
  onChange?: (event: stripeJs.StripeCardExpiryElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeCardExpiryElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type CardExpiryElementComponent = FunctionComponent<
  CardExpiryElementProps
>;

export interface CardCvcElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardCvc).
   */
  options?: stripeJs.StripeCardCvcElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardCvcElement).
   */
  onChange?: (event: stripeJs.StripeCardCvcElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeCardCvcElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type CardCvcElementComponent = FunctionComponent<CardCvcElementProps>;

export interface FpxBankElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=fpxBank).
   */
  options?: stripeJs.StripeFpxBankElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=fpxBankElement).
   */
  onChange?: (event: stripeJs.StripeFpxBankElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeFpxBankElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type FpxBankElementComponent = FunctionComponent<FpxBankElementProps>;

export interface IbanElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=iban).
   */
  options?: stripeJs.StripeIbanElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=ibanElement).
   */
  onChange?: (event: stripeJs.StripeIbanElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeIbanElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type IbanElementComponent = FunctionComponent<IbanElementProps>;

export interface IdealBankElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=idealBank).
   */
  options?: stripeJs.StripeIdealBankElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=idealBankElement).
   */
  onChange?: (event: stripeJs.StripeIdealBankElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeIdealBankElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type IdealBankElementComponent = FunctionComponent<
  IdealBankElementProps
>;

export interface P24BankElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=p24Bank).
   */
  options?: stripeJs.StripeP24BankElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=p24BankElement).
   */
  onChange?: (event: stripeJs.StripeP24BankElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeP24BankElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export interface LinkAuthenticationElementProps extends ElementProps {
  /**
   * An object containing Element configuration options.
   */
  options?: stripeJs.StripeLinkAuthenticationElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=auBankAccountElement).
   */
  onChange?: (
    event: stripeJs.StripeLinkAuthenticationElementChangeEvent
  ) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeLinkAuthenticationElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type LinkAuthenticationElementComponent = FunctionComponent<
  LinkAuthenticationElementProps
>;

export type P24BankElementComponent = FunctionComponent<P24BankElementProps>;

export interface EpsBankElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=epsBank).
   */
  options?: stripeJs.StripeEpsBankElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=epsBankElement).
   */
  onChange?: (event: stripeJs.StripeEpsBankElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeEpsBankElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type EpsBankElementComponent = FunctionComponent<EpsBankElementProps>;

export interface PaymentElementProps extends ElementProps {
  /**
   * An object containing Element configuration options.
   */
  options?: stripeJs.StripePaymentElementOptions;

  /**
   * Triggered when data exposed by this Element is changed.
   */
  onChange?: (event: stripeJs.StripePaymentElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripePaymentElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type PaymentElementComponent = FunctionComponent<PaymentElementProps>;

export interface PaymentRequestButtonElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=paymentRequestButton).
   */
  options?: stripeJs.StripePaymentRequestButtonElementOptions;

  /**
   * Triggered when the Element is clicked.
   */
  onClick?: (
    event: stripeJs.StripePaymentRequestButtonElementClickEvent
  ) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripePaymentRequestButtonElement) => any;
}

export type PaymentRequestButtonElementComponent = FunctionComponent<
  PaymentRequestButtonElementProps
>;

export interface ShippingAddressElementProps extends ElementProps {
  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=afterpayClearpayMessage).
   */
  options?: stripeJs.StripeShippingAddressElementOptions;

  /**
   * Triggered when data exposed by this Element is changed (e.g., when there is an error).
   * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=auBankAccountElement).
   */
  onChange?: (event: stripeJs.StripeShippingAddressElementChangeEvent) => any;

  /**
   * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeShippingAddressElement) => any;

  /**
   * Triggered when the escape key is pressed within the Element.
   */
  onEscape?: () => any;
}

export type ShippingAddressElementComponent = FunctionComponent<
  ShippingAddressElementProps
>;

export interface AffirmMessageElementProps {
  /**
   * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
   */
  id?: string;

  /**
   * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
   */
  className?: string;

  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=afterpayClearpayMessage).
   */
  options?: stripeJs.StripeAffirmMessageElementOptions;

  /**
   * Triggered when the Element has been fully loaded, after initial method calls have been fired.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeAffirmMessageElement) => any;
}

export type AffirmMessageElementComponent = FunctionComponent<
  AffirmMessageElementProps
>;

export interface AfterpayClearpayMessageElementProps {
  /**
   * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
   */
  id?: string;

  /**
   * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
   */
  className?: string;

  /**
   * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=afterpayClearpayMessage).
   */
  options?: stripeJs.StripeAfterpayClearpayMessageElementOptions;

  /**
   * Triggered when the Element has been fully loaded, after initial method calls have been fired.
   * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
   */
  onReady?: (element: stripeJs.StripeAfterpayClearpayMessageElement) => any;
}

export type AfterpayClearpayMessageElementComponent = FunctionComponent<
  AfterpayClearpayMessageElementProps
>;

declare module '@stripe/stripe-js' {
  interface StripeElements {
    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     *
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=auBankAccount) for the `AuBankAccountElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `AuBankAccountElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: AuBankAccountElementComponent
    ): stripeJs.StripeAuBankAccountElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `CardElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: CardElementComponent
    ): stripeJs.StripeCardElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardNumberElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `CardNumberElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: CardNumberElementComponent
    ): stripeJs.StripeCardNumberElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardCvcElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `CardCvcElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: CardCvcElementComponent
    ): stripeJs.StripeCardCvcElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardExpiryElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `CardExpiryElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: CardExpiryElementComponent
    ): stripeJs.StripeCardExpiryElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=fpxBank) for the `FpxBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `FpxBankElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: FpxBankElementComponent
    ): stripeJs.StripeFpxBankElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `IbanElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `IbanElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: IbanElementComponent
    ): stripeJs.StripeIbanElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=idealBank) for the `IdealBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `IdealBankElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: IdealBankElementComponent
    ): stripeJs.StripeIdealBankElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=p24Bank) for the `P24BankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `P24BankElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: P24BankElementComponent
    ): stripeJs.StripeP24BankElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=epsBank) for the `EpsBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `EpsBankElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: EpsBankElementComponent
    ): stripeJs.StripeEpsBankElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `LinkAuthenticationElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `LinkAuthenticationElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: LinkAuthenticationElementComponent
    ): stripeJs.StripeLinkAuthenticationElement | null;

    getElement(
      component: PaymentElementComponent
    ): stripeJs.StripeElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `PaymentRequestButtonElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `PaymentRequestButtonElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: PaymentRequestButtonElementComponent
    ): stripeJs.StripePaymentRequestButtonElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `ShippingAddressElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `ShippingAddressElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: ShippingAddressElementComponent
    ): stripeJs.StripeShippingAddressElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `PaymentRequestButtonElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `PaymentRequestButtonElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: AffirmMessageElementComponent
    ): stripeJs.StripeAffirmMessageElement | null;

    /**
     * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `PaymentRequestButtonElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
     * Returns `null` if no `PaymentRequestButtonElement` is rendered in the current `Elements` provider tree.
     */
    getElement(
      component: AfterpayClearpayMessageElementComponent
    ): stripeJs.StripeAfterpayClearpayMessageElement | null;
  }
}
