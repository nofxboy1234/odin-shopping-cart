import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

vi.mock('../../src/api/products', () => {
  return {
    default: () => ({
      products: [{ image: '', title: 'a product', price: 99.99, quantity: 0 }],
      setProducts: () => {},
      error: null,
      loading: false,
    }),
  };
});

function setup() {
  return {
    renderWithRouter: () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/', '/shop'],
        initialIndex: 1,
      });

      render(<RouterProvider router={router} />);
    },
  };
}

describe('Product component', () => {
  it('renders an image of the product', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const image = await screen.findByRole(
      'img',
      {
        name: 'image of a product',
      },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(image).toBeInTheDocument();
  });
});
