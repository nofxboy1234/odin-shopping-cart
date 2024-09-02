import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

vi.mock('../../src/api/products', () => {
  return {
    default: () => {
      console.log('HELLO, this is useProducts mocked');
    },
    // default: () => ({ products: 2, setProducts: 4, error: 6, loading: 8 }),
    hello: () => console.log('hi!'),
    bye: () => console.log('bye!'),
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
    // const image = screen.getByRole('img', {
    //   name: 'image of a product',
    // });
    // expect(image).toBeInTheDocument();
  });
});
