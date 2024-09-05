import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/router';
import userEvent from '@testing-library/user-event';

function setup() {
  return {
    renderWithRouter,
    path: '/shop',
  };
}

describe('Product component with API mocked', () => {
  it('renders an image of a product', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const image = await screen.findByRole('img', {
      name: 'image of a product',
    });
    expect(image).toBeInTheDocument();
  });

  it('renders the title of the product', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const title = await screen.findByText('a product');
    expect(title).toBeInTheDocument();
  });

  it('renders the price of the product', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const price = await screen.findByText('Price: 99.99');
    expect(price).toBeInTheDocument();
  });

  it('renders the initial quantity to add to the cart', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const quantity = await screen.findByDisplayValue('1');
    expect(quantity).toBeInTheDocument();
  });

  it('renders a button to add to the cart', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const button = await screen.findByRole('button', { name: 'Add to Cart' });
    expect(button).toBeInTheDocument();
  });

  describe.only('when clicking the Add to Cart button', () => {
    it('updates the cart navigation menu quantity', async () => {
      const user = userEvent.setup();

      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const button = await screen.findByRole('button', { name: 'Add to Cart' });
      const link = await screen.findByRole('link', {
        name: 'Cart (0)',
      });
      expect(link).toBeInTheDocument();
      await user.click(button);
      expect(link).toHaveTextContent('Cart (1)');

      screen.debug();
    });
  });
});
