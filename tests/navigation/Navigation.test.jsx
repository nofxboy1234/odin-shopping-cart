import { describe, it, expect } from 'vitest';
import { getRoles, logRoles, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import userEvent from '@testing-library/user-event';

function setup() {
  return {
    renderWithRouter,
    path: '/',
  };
}

describe('Navigation component', () => {
  it('renders the home link', async () => {
    const { renderWithRouter, path } = setup();
    const { container } = renderWithRouter(path);

    // console.log('********Roles');
    // logRoles(container);
    // console.log(getRoles(container));
    // screen.debug();

    // const loadingText = screen.getByText('Loading...');
    // // const loadingText = screen.getByRole('paragraph');
    // console.log(loadingText);
    // screen.debug();
    // expect(loadingText).toBeInTheDocument();

    // The below block of code does not seem to work with msw
    // const loadingText = await screen.findByRole('paragraph');
    // console.log(loadingText);
    // screen.debug();
    // expect(loadingText).toBeInTheDocument();

    const link = await screen.findByRole(
      'link',
      { name: 'Home' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the shop link', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const link = await screen.findByRole(
      'link',
      { name: 'Shop' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the cart link', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const link = await screen.findByRole(
      'link',
      { name: 'Cart (0)' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it.skip('renders the navigation bar above the home page', async () => {
    const { renderWithRouter, path } = setup();
    const { container } = renderWithRouter(path);

    await waitFor(() => {
      expect(screen.getByText('Welcome to Shopping Cart!')).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });

  it.skip('renders the home page', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    await waitFor(() => {
      expect(screen.getByText('Welcome to Shopping Cart!')).toBeInTheDocument();
    });
  });

  describe.skip('when clicking the Shop navbar link', async () => {
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

  describe.skip('when clicking the Cart navbar link', async () => {
    describe('when the cart is empty', () => {
      it('renders the cart page with an empty shopping cart', async () => {
        const user = userEvent.setup();

        const { renderWithRouter, path } = setup();
        renderWithRouter(path);

        const link = await screen.findByRole('link', { name: 'Cart (0)' });
        await user.click(link);

        const heading = await screen.findByText('Your shopping cart is empty');
        expect(heading).toBeInTheDocument();
      });
    });

    describe.skip('when the cart has items in it', () => {
      it('renders the cart page with the items', async () => {
        const user = userEvent.setup();

        const { renderWithRouter, path } = setup();
        renderWithRouter(path);

        const link = await screen.findByRole('link', { name: 'Cart (0)' });
        await user.click(link);

        const heading = await screen.findByText('Your shopping cart is empty');
        expect(heading).toBeInTheDocument();
      });
    });
  });
});
