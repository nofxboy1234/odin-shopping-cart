import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartItem from '../../src/components/cartItem/CartItem';

describe.skip('CartItem component', () => {
  it('renders the cart item with image, title, subtotal, quantity, Remove from Cart button', () => {});

  describe('when clicking the up arrow on a cart item', () => {
    it('increases the cart quantity in the navigation bar', () => {});

    it('increases the subtotal', () => {});

    it('increases the total items in the cart summary', () => {});

    it('increases the total price in the cart summary', () => {});
  });

  describe('when clicking the down arrow on a cart item', () => {
    it('decreases the cart quantity in the navigation bar', () => {});

    it('decreases the subtotal', () => {});

    it('decreases the total items in the cart summary', () => {});

    it('decreases the total price in the cart summary', () => {});
  });

  describe('when clicking the Remove from Cart button', () => {
    it('removes the product from the cart', () => {});

    it('decreases the cart quantity in the navigation bar', () => {});

    it('decreases the total items in the cart summary', () => {});

    it('decreases the total price in the cart summary', () => {});
  });
});
