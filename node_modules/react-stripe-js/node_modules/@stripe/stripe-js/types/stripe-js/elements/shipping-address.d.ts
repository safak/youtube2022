import {StripeElementBase, StripeElementChangeEvent} from './base';

export type StripeShippingAddressElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeShippingAddressElementChangeEvent) => any
  ): StripeShippingAddressElement;
  once(
    eventType: 'change',
    handler: (event: StripeShippingAddressElementChangeEvent) => any
  ): StripeShippingAddressElement;
  off(
    eventType: 'change',
    handler?: (event: StripeShippingAddressElementChangeEvent) => any
  ): StripeShippingAddressElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'shippingAddress'}) => any
  ): StripeShippingAddressElement;

  /**
   * Updates the options the `ShippingAddressElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(
    options: Partial<StripeShippingAddressElementOptions>
  ): StripeShippingAddressElement;
};

export interface StripeShippingAddressElementOptions {
  /**
   * Control which countries are displayed in the shippingAddress Element.
   */
  allowedCountries?: string[] | null;

  /**
   * Whether or not ShippingAddressElement accepts PO boxes
   */
  blockPoBox?: boolean;

  /**
   * Default value for ShippingAddressElement fields
   */
  defaultValues?: {
    name?: string | null;
    address?: {
      line1?: string | null;
      line2?: string | null;
      city?: string | null;
      state?: string | null;
      postal_code?: string | null;
      country: string;
    };
  };

  /**
   * Whether or not ShippingAddressElement provides autocomplete suggestions
   */
  disableAutocomplete?: boolean;
}

export interface StripeShippingAddressElementChangeEvent
  extends StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'shippingAddress';

  /**
   * Whether or not the shippingAddress Element is currently empty.
   */
  empty: boolean;

  /**
   * Whether or not the shippingAddress Element is complete.
   */
  complete: boolean;

  /**
   * Whether or not the the shipping address is new.
   */
  isNewAddress: boolean;

  /**
   * An object containing the current address.
   */
  value: {
    name: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  };
}
