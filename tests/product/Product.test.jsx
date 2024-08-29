import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '../../src/components/product/Product';

describe.skip('Product component', () => {
  it('renders a product image, title, price, quantity input, Add to Cart button', () => {});

  describe('when the product is in the cart', () => {
    describe('when clicking the up arrow in the quantity input', () => {
      it('increases the quantity in the cart', () => {});
    });

    describe('when clicking the down arrow in the quantity input', () => {
      it('decreases the quantity in the cart', () => {});
    });

    describe('when clicking the `Add to Cart` button', () => {
      it('decreases the quantity in the cart');
    });
  });

  describe('when the product is not in the cart', () => {
    describe('when clicking the up arrow in the quantity input', () => {
      it('does not increase the quantity in the cart', () => {});
    });

    describe('when clicking the down arrow in the quantity input', () => {
      it('does not decrease the quantity in the cart', () => {});
    });

    describe('when clicking the `Add to Cart` button', () => {
      it('increases the quantity in the cart');
    });
  });
});
