import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import { server, http, delay, HttpResponse } from '../setup';

vi.mock('../../src/components/product/Product', () => {
  return {
    default: ({ product }) => <div>{product.title}</div>,
  };
});

function setup() {
  return {
    renderWithRouter,
    path: '/shop',
  };
}

describe('Shop component', () => {
  it('renders the heading', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const heading = await screen.findByTestId('shop-heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders all products', async () => {
    const products = [
      {
        id: 1,
        image: '',
        title: 'a product',
        price: 99.99,
        quantity: 0,
      },
      {
        id: 2,
        image: '',
        title: 'a product 2',
        price: 999.99,
        quantity: 0,
      },
      {
        id: 3,
        image: '',
        title: 'a product 3',
        price: 9999.99,
        quantity: 0,
      },
    ];

    server.use(
      http.get('https://fakestoreapi.com/products', async () => {
        // Wait for 500ms before responding.
        await delay(500);

        return HttpResponse.json(products);
      })
    );

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const renderedProducts = await screen.findAllByText(/a product/);
    expect(renderedProducts).toHaveLength(3);
  });
});
