import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cart from '../../src/components/cart/Cart';

describe.skip('Cart component', () => {
  describe('when the cart is empty', () => {
    it('shows a message about the cart being empty', () => {});

    it('the cart quantity in the navigation bar shows 0', () => {});
  });

  describe('when the cart has items', () => {
    it('renders the cart items', () => {});

    it('the cart quantity in the navigation bar shows a positive number', () => {});

    it('renders the cart summary', () => {});
  });
});
