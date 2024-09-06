import { describe, it, expect } from 'vitest';
import {
  logRoles,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import { server, http, delay, HttpResponse } from '../setup';

function setup() {
  return {
    renderWithRouter,
    path: '/cart',
    overrideFetchedProducts: (items) => {
      const cartItems = items || [
        {
          id: 1,
          image: '',
          title: 'a product',
          price: 10.0,
          quantity: 5,
        },
        {
          id: 2,
          image: '',
          title: 'a product 2',
          price: 20.0,
          quantity: 2,
        },
        {
          id: 3,
          image: '',
          title: 'a product 3',
          price: 30.0,
          quantity: 3,
        },
        {
          id: 4,
          image: '',
          title: 'a product 4',
          price: 40.0,
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

describe('CartItem component', () => {
  it('renders the image', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    overrideFetchedProducts();
    const { container } = renderWithRouter(path);

    // await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    // logRoles(container);

    const image = await screen.findByRole('img', {
      name: 'image of a product',
    });
    expect(image).toBeInTheDocument();
  });

  it('renders the title', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    const cartItems = [
      {
        id: 1,
        image: '',
        title: 'a product',
        price: 10.0,
        quantity: 5,
      },
    ];
    overrideFetchedProducts(cartItems);
    renderWithRouter(path);

    const title = await screen.findByText('a product');
    expect(title).toBeInTheDocument();
  });

  it('renders the subtotal', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    const cartItems = [
      {
        id: 1,
        image: '',
        title: 'a product',
        price: 10.0,
        quantity: 5,
      },
    ];
    overrideFetchedProducts(cartItems);
    renderWithRouter(path);

    const subtotal = await screen.findByTestId('subtotal');
    expect(subtotal).toHaveTextContent('50.00');
  });

  it('renders the quantity', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    const cartItems = [
      {
        id: 1,
        image: '',
        title: 'a product',
        price: 10.0,
        quantity: 5,
      },
    ];
    overrideFetchedProducts(cartItems);
    renderWithRouter(path);

    const quantity = await screen.findByDisplayValue('5');
    expect(quantity).toBeInTheDocument();
  });

  it('renders the remove button', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    const cartItems = [
      {
        id: 1,
        image: '',
        title: 'a product',
        price: 10.0,
        quantity: 5,
      },
    ];
    overrideFetchedProducts(cartItems);
    renderWithRouter(path);

    const button = await screen.findByRole('button', {
      name: 'Remove from Cart',
    });
    expect(button).toBeInTheDocument();
  });
});
