import React from 'react';
import {render, act} from '@testing-library/react';

import {Elements} from './Elements';
import createElementComponent from './createElementComponent';
import * as mocks from '../../test/mocks';
import {
  CardElementComponent,
  PaymentRequestButtonElementComponent,
} from '../types';

describe('createElementComponent', () => {
  let mockStripe: any;
  let mockElements: any;
  let mockElement: any;
  let simulateChange: any;
  let simulateBlur: any;
  let simulateFocus: any;
  let simulateEscape: any;
  let simulateReady: any;
  let simulateClick: any;

  beforeEach(() => {
    mockStripe = mocks.mockStripe();
    mockElements = mocks.mockElements();
    mockElement = mocks.mockElement();
    mockStripe.elements.mockReturnValue(mockElements);
    mockElements.create.mockReturnValue(mockElement);
    jest.spyOn(React, 'useLayoutEffect');
    mockElement.on = jest.fn((event, fn) => {
      switch (event) {
        case 'change':
          simulateChange = fn;
          break;
        case 'blur':
          simulateBlur = fn;
          break;
        case 'focus':
          simulateFocus = fn;
          break;
        case 'escape':
          simulateEscape = fn;
          break;
        case 'ready':
          simulateReady = fn;
          break;
        case 'click':
          simulateClick = fn;
          break;
        default:
          throw new Error('TestSetupError: Unexpected event registration.');
      }
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('on the server', () => {
    const CardElement = createElementComponent('card', true);

    it('gives the element component a proper displayName', () => {
      expect(CardElement.displayName).toBe('CardElement');
    });

    it('stores the element component`s type as a static property', () => {
      expect((CardElement as any).__elementType).toBe('card');
    });

    it('passes id to the wrapping DOM element', () => {
      const {container} = render(
        <Elements stripe={null}>
          <CardElement id="foo" />
        </Elements>
      );

      const elementContainer = container.firstChild as Element;

      expect(elementContainer.id).toBe('foo');
    });

    it('passes className to the wrapping DOM element', () => {
      const {container} = render(
        <Elements stripe={null}>
          <CardElement className="bar" />
        </Elements>
      );
      const elementContainer = container.firstChild as Element;
      expect(elementContainer).toHaveClass('bar');
    });

    it('throws when the Element is mounted outside of Elements context', () => {
      // Prevent the console.errors to keep the test output clean
      jest.spyOn(console, 'error');
      (console.error as any).mockImplementation(() => {});

      expect(() => render(<CardElement />)).toThrow(
        'Could not find Elements context; You need to wrap the part of your app that mounts <CardElement> in an <Elements> provider.'
      );
    });

    it('does not call useLayoutEffect', () => {
      render(
        <Elements stripe={null}>
          <CardElement />
        </Elements>
      );

      expect(React.useLayoutEffect).not.toHaveBeenCalled();
    });
  });

  describe('on the client', () => {
    const CardElement: CardElementComponent = createElementComponent(
      'card',
      false
    );
    const PaymentRequestButtonElement: PaymentRequestButtonElementComponent = createElementComponent(
      'card',
      false
    );

    it('Can remove and add CardElement at the same time', () => {
      let cardMounted = false;
      mockElement.mount.mockImplementation(() => {
        if (cardMounted) {
          throw new Error('Card already mounted');
        }
        cardMounted = true;
      });
      mockElement.destroy.mockImplementation(() => {
        cardMounted = false;
      });

      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement key={'1'} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <CardElement key={'2'} />
        </Elements>
      );

      expect(mockElement.mount).toHaveBeenCalledTimes(2);
    });

    it('gives the element component a proper displayName', () => {
      expect(CardElement.displayName).toBe('CardElement');
    });

    it('stores the element component`s type as a static property', () => {
      expect((CardElement as any).__elementType).toBe('card');
    });

    it('passes id to the wrapping DOM element', () => {
      const {container} = render(
        <Elements stripe={mockStripe}>
          <CardElement id="foo" />
        </Elements>
      );
      const elementContainer = container.firstChild as Element;

      expect(elementContainer.id).toBe('foo');
    });

    it('passes className to the wrapping DOM element', () => {
      const {container} = render(
        <Elements stripe={mockStripe}>
          <CardElement className="bar" />
        </Elements>
      );
      const elementContainer = container.firstChild as Element;

      expect(elementContainer).toHaveClass('bar');
    });

    it('creates the element with options', () => {
      const options: any = {foo: 'foo'};
      render(
        <Elements stripe={mockStripe}>
          <CardElement options={options} />
        </Elements>
      );

      expect(mockElements.create).toHaveBeenCalledWith('card', options);
    });

    it('mounts the element', () => {
      const {container} = render(
        <Elements stripe={mockStripe}>
          <CardElement />
        </Elements>
      );

      expect(mockElement.mount).toHaveBeenCalledWith(container.firstChild);
      expect(React.useLayoutEffect).toHaveBeenCalled();
    });

    it('does not create and mount until Elements has been instantiated', () => {
      const {rerender} = render(
        <Elements stripe={null}>
          <CardElement />
        </Elements>
      );

      expect(mockElement.mount).not.toHaveBeenCalled();
      expect(mockElements.create).not.toHaveBeenCalled();

      rerender(
        <Elements stripe={mockStripe}>
          <CardElement />
        </Elements>
      );

      expect(mockElement.mount).toHaveBeenCalled();
      expect(mockElements.create).toHaveBeenCalled();
    });

    it('throws when the Element is mounted outside of Elements context', () => {
      // Prevent the console.errors to keep the test output clean
      jest.spyOn(console, 'error');
      (console.error as any).mockImplementation(() => {});

      expect(() => render(<CardElement />)).toThrow(
        'Could not find Elements context; You need to wrap the part of your app that mounts <CardElement> in an <Elements> provider.'
      );
    });

    it('propagates the Element`s ready event to the current onReady prop', () => {
      const mockHandler = jest.fn();
      const mockHandler2 = jest.fn();
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement onReady={mockHandler} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <CardElement onReady={mockHandler2} />
        </Elements>
      );

      simulateReady();
      expect(mockHandler2).toHaveBeenCalledWith(mockElement);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('propagates the Element`s change event to the current onChange prop', () => {
      const mockHandler = jest.fn();
      const mockHandler2 = jest.fn();
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement onChange={mockHandler} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <CardElement onChange={mockHandler2} />
        </Elements>
      );

      const changeEventMock = Symbol('change');
      simulateChange(changeEventMock);
      expect(mockHandler2).toHaveBeenCalledWith(changeEventMock);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('propagates the Element`s blur event to the current onBlur prop', () => {
      const mockHandler = jest.fn();
      const mockHandler2 = jest.fn();
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement onBlur={mockHandler} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <CardElement onBlur={mockHandler2} />
        </Elements>
      );

      simulateBlur();
      expect(mockHandler2).toHaveBeenCalledWith();
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('propagates the Element`s focus event to the current onFocus prop', () => {
      const mockHandler = jest.fn();
      const mockHandler2 = jest.fn();
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement onFocus={mockHandler} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <CardElement onFocus={mockHandler2} />
        </Elements>
      );

      simulateFocus();
      expect(mockHandler2).toHaveBeenCalledWith();
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('propagates the Element`s escape event to the current onEscape prop', () => {
      const mockHandler = jest.fn();
      const mockHandler2 = jest.fn();
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement onEscape={mockHandler} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <CardElement onEscape={mockHandler2} />
        </Elements>
      );

      simulateEscape();
      expect(mockHandler2).toHaveBeenCalledWith();
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('propagates the Element`s click event to the current onClick prop', () => {
      const mockHandler = jest.fn();
      const mockHandler2 = jest.fn();
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <PaymentRequestButtonElement onClick={mockHandler} />
        </Elements>
      );
      rerender(
        <Elements stripe={mockStripe}>
          <PaymentRequestButtonElement onClick={mockHandler2} />
        </Elements>
      );

      const clickEventMock = Symbol('click');
      simulateClick(clickEventMock);
      expect(mockHandler2).toHaveBeenCalledWith(clickEventMock);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('updates the Element when options change', () => {
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement options={{style: {base: {fontSize: '20px'}}}} />
        </Elements>
      );

      rerender(
        <Elements stripe={mockStripe}>
          <CardElement options={{style: {base: {fontSize: '30px'}}}} />
        </Elements>
      );

      expect(mockElement.update).toHaveBeenCalledWith({
        style: {base: {fontSize: '30px'}},
      });
    });

    it('does not trigger unnecessary updates', () => {
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <CardElement options={{style: {base: {fontSize: '20px'}}}} />
        </Elements>
      );

      rerender(
        <Elements stripe={mockStripe}>
          <CardElement options={{style: {base: {fontSize: '20px'}}}} />
        </Elements>
      );

      expect(mockElement.update).not.toHaveBeenCalled();
    });

    it('warns on changes to non-updatable options', () => {
      jest.spyOn(console, 'warn');
      (console.warn as any).mockImplementation(() => {});

      const {rerender} = render(
        <Elements stripe={mockStripe}>
          <PaymentRequestButtonElement
            options={{
              paymentRequest: Symbol('PaymentRequest') as any,
            }}
          />
        </Elements>
      );

      rerender(
        <Elements stripe={mockStripe}>
          <PaymentRequestButtonElement
            options={{
              paymentRequest: Symbol('PaymentRequest') as any,
            }}
          />
        </Elements>
      );

      expect(mockElement.update).not.toHaveBeenCalled();

      expect(console.warn).toHaveBeenCalledWith(
        'Unsupported prop change: options.paymentRequest is not a mutable property.'
      );
    });

    it('destroys an existing Element when the component unmounts', () => {
      const {unmount} = render(
        <Elements stripe={null}>
          <CardElement />
        </Elements>
      );

      unmount();

      // not called when Element has not been mounted (because stripe is still loading)
      expect(mockElement.destroy).not.toHaveBeenCalled();

      const {unmount: unmount2} = render(
        <Elements stripe={mockStripe}>
          <CardElement />
        </Elements>
      );

      unmount2();
      expect(mockElement.destroy).toHaveBeenCalled();
    });

    it('destroys an existing Element when the component unmounts with an async stripe prop', async () => {
      const stripePromise = Promise.resolve(mockStripe);

      const {unmount} = render(
        <Elements stripe={stripePromise}>
          <CardElement />
        </Elements>
      );

      await act(() => stripePromise);

      unmount();
      expect(mockElement.destroy).toHaveBeenCalled();
    });

    it('updates the Element when options change from null to non-null value', () => {
      const {rerender} = render(
        <Elements stripe={mockStripe}>
          {/* @ts-expect-error */}
          <CardElement options={null} />
        </Elements>
      );

      rerender(
        <Elements stripe={mockStripe}>
          <CardElement options={{style: {base: {fontSize: '30px'}}}} />
        </Elements>
      );

      expect(mockElement.update).toHaveBeenCalledWith({
        style: {base: {fontSize: '30px'}},
      });
    });
  });
});
