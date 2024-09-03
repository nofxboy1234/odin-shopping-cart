import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import useProducts from '../../src/api/products';

vi.mock('../../src/api/products', () => {
  return {
    default: vi.fn(),
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
  const useProductsMockValue = {
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
  };

  beforeEach(async () => {
    const actualUseProducts = await vi.importActual('../../src/api/products');
    vi.mocked(useProducts).mockImplementation(() =>
      actualUseProducts.default()
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders an image of the product', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter } = setup();
    renderWithRouter();
    const image = screen.getByRole('img', {
      name: 'image of a product',
    });
    expect(image).toBeInTheDocument();
  });

  it('renders the title of the product', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter } = setup();
    renderWithRouter();
    const title = screen.getByText('a product');
    expect(title).toBeInTheDocument();
  });

  it('renders the price of the product', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter } = setup();
    renderWithRouter();
    const price = screen.getByText('Price: 99.99');
    expect(price).toBeInTheDocument();
  });

  it('renders the initial quantity to add to the cart', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter } = setup();
    renderWithRouter();
    const quantity = screen.getByDisplayValue('1');
    expect(quantity).toBeInTheDocument();
  });

  it('renders a button to add to the cart', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter } = setup();
    renderWithRouter();
    const button = screen.getByRole('button', { name: 'Add to Cart' });
    expect(button).toBeInTheDocument();
  });
});
