import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/react';

import useProducts from '../../src/api/products';
import renderWithRouter from '../helpers/router';

vi.mock('../../src/api/products', () => {
  return {
    default: vi.fn(),
  };
});

function setup() {
  return {
    renderWithRouter,
    path: '/shop',
  };
}

describe('Product component with API mocked', () => {
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

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const image = screen.getByRole('img', {
      name: 'image of a product',
    });
    expect(image).toBeInTheDocument();
  });

  it('renders the title of the product', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const title = screen.getByText('a product');
    expect(title).toBeInTheDocument();
  });

  it('renders the price of the product', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const price = screen.getByText('Price: 99.99');
    expect(price).toBeInTheDocument();
  });

  it('renders the initial quantity to add to the cart', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const quantity = screen.getByDisplayValue('1');
    expect(quantity).toBeInTheDocument();
  });

  it('renders a button to add to the cart', () => {
    vi.mocked(useProducts).mockReturnValue(useProductsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const button = screen.getByRole('button', { name: 'Add to Cart' });
    expect(button).toBeInTheDocument();
  });

  describe('Product component using API', () => {
    it('renders the title of a product', async () => {
      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const title = await screen.findByText('Mens Cotton Jacket');
      expect(title).toBeInTheDocument();
    });
  });
});
