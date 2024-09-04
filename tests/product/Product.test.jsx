import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/router';

function setup() {
  return {
    renderWithRouter,
    path: '/shop',
  };
}

describe('Product component with API mocked', () => {
  const productsMockValue = [
    {
      id: 1,
      image: '',
      title: 'a product',
      price: 99.99,
      quantity: 0,
    },
  ];

  // const useProductsMockValue = {
  //   products: [
  //     {
  //       id: 1,
  //       image: '',
  //       title: 'a product',
  //       price: 99.99,
  //       quantity: 0,
  //     },
  //   ],
  //   setProducts: () => {},
  //   error: null,
  //   loading: false,
  // };

  beforeEach(async () => {
    // const actualUseProducts = await vi.importActual('../../src/api/products');
    // vi.mocked(useProducts).mockImplementation(() =>
    //   actualUseProducts.default()
    // );
  });

  afterEach(() => {
    // vi.restoreAllMocks();
  });

  it('renders an image of a product', async () => {
    // vi.mocked(useProducts).mockReturnValue(useProductsMockValue);
    window.fetch = vi.fn(() => {
      const response = {
        json: () => Promise.resolve(productsMockValue),
        ok: true,
      };

      return Promise.resolve(response);
    });

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const image = await screen.findByRole('img', {
      name: 'image of a product',
    });
    expect(image).toBeInTheDocument();

    // vi.restoreAllMocks();
  });

  it.skip('renders the title of the product', () => {
    vi.mocked(useProducts).mockReturnValue(productsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const title = screen.getByText('a product');
    expect(title).toBeInTheDocument();
  });

  it.skip('renders the price of the product', () => {
    vi.mocked(useProducts).mockReturnValue(productsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const price = screen.getByText('Price: 99.99');
    expect(price).toBeInTheDocument();
  });

  it.skip('renders the initial quantity to add to the cart', () => {
    vi.mocked(useProducts).mockReturnValue(productsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const quantity = screen.getByDisplayValue('1');
    expect(quantity).toBeInTheDocument();
  });

  it.skip('renders a button to add to the cart', () => {
    vi.mocked(useProducts).mockReturnValue(productsMockValue);

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const button = screen.getByRole('button', { name: 'Add to Cart' });
    expect(button).toBeInTheDocument();
  });
});
