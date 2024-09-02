import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

vi.mock('../../src/api/products', () => {
  return {
    default: () => ({
      products: [
        {
          id: 1,
          image: '',
          title: 'a product',
          price: 99.99,
          quantity: 0,
        },
      ],
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
  it('renders an image of the product', () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const image = screen.getByRole('img', {
      name: 'image of a product',
    });
    expect(image).toBeInTheDocument();
  });

  it('renders the title of the product', () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const title = screen.getByText('a product');
    expect(title).toBeInTheDocument();
  });
});
