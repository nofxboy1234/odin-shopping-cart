import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

describe('Navigation component', () => {
  it('renders the Home link', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const link = await screen.findByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  it('renders the Home heading', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole('heading', {
      name: 'Welcome to Shopping Cart!',
    });
    expect(heading).toBeInTheDocument();
  });
});
