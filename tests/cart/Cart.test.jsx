import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import { server, http, delay, HttpResponse } from '../setup';

vi.mock('../../src/components/cartItem/CartItem', () => {
  return {
    default: ({ product }) => <div>{product.title}</div>,
  };
});

vi.mock('../../src/components/CartSummary/CartSummary', () => {
  return {
    default: () => <div>Cart Summary</div>,
  };
});

function setup() {
  return {
    renderWithRouter,
    path: '/cart',
    overrideFetchedProducts: () => {
      const cartItems = [
        {
          id: 1,
          image: '',
          title: 'a product',
          price: 99.99,
          quantity: 1,
        },
        {
          id: 2,
          image: '',
          title: 'a product 2',
          price: 999.99,
          quantity: 2,
        },
        {
          id: 3,
          image: '',
          title: 'a product 3',
          price: 9999.99,
          quantity: 3,
        },
        {
          id: 4,
          image: '',
          title: 'a product 4',
          price: 99999.99,
          quantity: 4,
        },
      ];

      server.use(
        http.get('https://fakestoreapi.com/products', async () => {
          // Wait for 500ms before responding.
          await delay(500);

          return HttpResponse.json(cartItems);
        })
      );
    },
  };
}

describe('Cart component', () => {
  describe('when the shopping cart is empty', () => {
    it('renders the empty shopping cart heading', async () => {
      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const heading = await screen.findByText('Your shopping cart is empty');
      expect(heading).toBeInTheDocument();
    });

    it('renders no products', () => {
      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const renderedProducts = screen.queryAllByText(/a product/);
      expect(renderedProducts).toHaveLength(0);
    });
  });

  describe('when the shopping cart has items in it', () => {
    it('renders the shopping cart heading', async () => {
      const { renderWithRouter, path, overrideFetchedProducts } = setup();
      overrideFetchedProducts();
      renderWithRouter(path);

      const heading = await screen.findByText('Cart');
      expect(heading).toBeInTheDocument();
    });

    it('renders all products', async () => {
      const { renderWithRouter, path, overrideFetchedProducts } = setup();
      overrideFetchedProducts();
      renderWithRouter(path);

      const renderedProducts = await screen.findAllByText(/a product/);
      expect(renderedProducts).toHaveLength(4);
    });

    it('renders the cart summary', async () => {
      const { renderWithRouter, path, overrideFetchedProducts } = setup();
      overrideFetchedProducts();
      renderWithRouter(path);

      const cartSummary = await screen.findByText('Cart Summary');
      expect(cartSummary).toBeInTheDocument();
    });
  });
});
