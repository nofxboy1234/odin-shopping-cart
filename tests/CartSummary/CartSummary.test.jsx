import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import { server, http, delay, HttpResponse } from '../setup';
import userEvent from '@testing-library/user-event';

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

describe('CartSummary component', () => {
  it('renders the heading', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    overrideFetchedProducts();
    renderWithRouter(path);

    // await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    // logRoles(container);

    const heading = await screen.findByText('Cart Summary');
    expect(heading).toBeInTheDocument();
  });

  it('renders the total item quantity', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    overrideFetchedProducts();
    renderWithRouter(path);

    const total = await screen.findByText(/Total:/);
    expect(total).toHaveTextContent('Total: (10 item/s)');
  });

  it('renders the cart total price', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    overrideFetchedProducts();
    renderWithRouter(path);

    const total = await screen.findByText('180.00');
    expect(total).toBeInTheDocument();
  });

  it('renders a checkout button', async () => {
    const { renderWithRouter, path, overrideFetchedProducts } = setup();
    overrideFetchedProducts();
    renderWithRouter(path);

    const button = await screen.findByRole('button', { name: 'Check out' });
    expect(button).toBeInTheDocument();
  });

  describe('when clicking the checkout button', () => {
    it('renders the thanks for shopping heading and removes the cart summary', async () => {
      const user = userEvent.setup();

      const { renderWithRouter, path, overrideFetchedProducts } = setup();
      overrideFetchedProducts();
      renderWithRouter(path);

      const button = await screen.findByRole('button', { name: 'Check out' });

      let summaryHeading;
      summaryHeading = screen.getByText('Cart Summary');
      expect(summaryHeading).toBeInTheDocument();

      await user.click(button);

      const thanksHeading = screen.getByText('Thanks for shopping with us!');
      expect(thanksHeading).toBeInTheDocument();

      summaryHeading = screen.queryByText('Cart Summary');
      expect(summaryHeading).toBeNull();
    });
  });
});
