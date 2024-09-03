import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/router';

function setup() {
  return {
    renderWithRouter,
  };
}

describe('Navigation component', () => {
  it('renders the home link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter(0);

    const link = await screen.findByRole(
      'link',
      { name: 'Home' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the shop link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter(0);

    const link = await screen.findByRole(
      'link',
      { name: 'Shop' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the cart link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter(0);

    const link = await screen.findByRole(
      'link',
      { name: 'Cart (0)' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the navigation bar above the home page', async () => {
    const { renderWithRouter } = setup();
    const { container } = renderWithRouter(0);

    await waitFor(() => {
      expect(screen.getByText('Welcome to Shopping Cart!')).toBeInTheDocument();
    });
    screen.debug();
    expect(container).toMatchSnapshot();
  });
});
