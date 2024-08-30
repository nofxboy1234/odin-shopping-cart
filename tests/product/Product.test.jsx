import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '../../src/components/product/Product';
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

describe.skip('Product component', () => {
  it('renders an image of the product', () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    // const mockProduct = { title: 'a product' };
    // render(<Product product={mockProduct} />);
    const image = screen.getByRole('img', {
      name: 'image of a product',
    });
    // screen.debug();
    expect(image).toBeInTheDocument();
  });
});
