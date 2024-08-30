import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '../../src/components/product/Product';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import useProducts from '../../src/api/products';

const noop = () => {};

vi.mock('../../src/api/products', () => {
  return {
    default: {
      useProducts: () => ({
        products: [
          { image: '', title: 'a product', price: 99.99, quantity: 0 },
        ],
        setProducts: noop,
        error: null,
        loading: false,
      }),
    },
  };
});

function setup() {
  return {
    renderWithRouter: () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/shop'],
        initialIndex: 0,
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
    // screen.debug();
    expect(image).toBeInTheDocument();
  });
});
