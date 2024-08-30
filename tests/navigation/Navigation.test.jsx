import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

function setup() {
  return {
    renderWithRouter: () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);
    },
  };
}

describe('Navigation component', () => {
  it('renders the home link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const link = await screen.findByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  it('renders the shop link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const link = await screen.findByRole('link', { name: 'Shop' });
    expect(link).toBeInTheDocument();
  });

  it('renders the cart link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const link = await screen.findByRole('link', { name: 'Cart (0)' });
    expect(link).toBeInTheDocument();
  });
});
