import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import userEvent from '@testing-library/user-event';

function setup() {
  return {
    renderWithRouter,
    path: '/',
  };
}

describe('App component', () => {
  describe('when on the root page', () => {
    it('renders the navigation bar above the home page', async () => {
      const { renderWithRouter, path } = setup();
      const { container } = renderWithRouter(path);

      await waitFor(() => {
        expect(
          screen.getByText('Welcome to Shopping Cart!')
        ).toBeInTheDocument();
      });

      expect(container).toMatchSnapshot();
    });
  });

  describe('when clicking the Shop navbar link', async () => {
    it('renders the shop page', async () => {
      const user = userEvent.setup();

      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const link = await screen.findByRole('link', { name: 'Shop' });
      await user.click(link);

      const heading = await screen.findByTestId('shop-heading');
      expect(heading).toBeInTheDocument();
    });
  });

  describe('when clicking the Cart navbar link', async () => {
    it('renders the cart page', async () => {
      const user = userEvent.setup();

      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const link = await screen.findByRole('link', { name: 'Cart (0)' });
      await user.click(link);

      const heading = await screen.findByText('Your shopping cart is empty');
      expect(heading).toBeInTheDocument();
    });
  });

  describe('when clicking the Home navbar link', async () => {
    it('renders the home page', async () => {
      const user = userEvent.setup();

      const { renderWithRouter } = setup();
      renderWithRouter('/cart');

      const link = await screen.findByRole('link', { name: 'Home' });
      await user.click(link);

      const heading = await screen.findByText('Welcome to Shopping Cart!');
      expect(heading).toBeInTheDocument();
    });
  });
});
