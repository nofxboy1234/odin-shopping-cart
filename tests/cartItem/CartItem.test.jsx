import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
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
    renderWithRouter(path);

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

  describe('when updating the quantity', () => {
    it('updates the cart navigation menu quantity', async () => {
      const user = userEvent.setup();

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

      const link = await screen.findByRole('link', { name: 'Cart (5)' });

      const quantity = await screen.findByRole('spinbutton');
      expect(quantity).toHaveValue(5);

      await user.click(quantity);
      await user.keyboard('{Control>}A{/Control}{7}');
      expect(quantity).toHaveValue(7);
      expect(link).toHaveTextContent('Cart (7)');
    });
  });

  describe('when there is one item in the cart', () => {
    describe('when clicking the Remove from Cart button', () => {
      it('removes the cart item from the cart', async () => {
        const user = userEvent.setup();

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

        await user.click(button);

        const title = screen.queryByText('a product');
        expect(title).toBeNull();
      });

      it('updates the cart navigation menu quantity to 0', async () => {
        const user = userEvent.setup();

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
        const link = await screen.findByRole('link', { name: 'Cart (5)' });

        await user.click(button);
        expect(link).toHaveTextContent('Cart (0)');
      });

      it('the cart shows the empty cart heading', async () => {
        const user = userEvent.setup();

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
        const heading = await screen.findByRole('heading', { name: 'Cart' });

        await user.click(button);
        expect(heading).toHaveTextContent('Your shopping cart is empty');
      });
    });
  });

  describe('when there are multiple items in the cart', () => {
    describe('when clicking the Remove from Cart button on one of the items', () => {
      it('removes the cart item from the cart', async () => {
        const user = userEvent.setup();

        const { renderWithRouter, path, overrideFetchedProducts } = setup();
        const cartItems = [
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
        ];
        overrideFetchedProducts(cartItems);
        renderWithRouter(path);

        const product1 = await screen.findByTestId('product1');
        const product1Button = await within(product1).findByRole('button', {
          name: 'Remove from Cart',
        });
        await user.click(product1Button);

        const title = screen.queryByText('a product');
        expect(title).toBeNull();
      });

      it('does not remove any other cart items from the cart', async () => {
        const user = userEvent.setup();

        const { renderWithRouter, path, overrideFetchedProducts } = setup();
        const cartItems = [
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
        ];
        overrideFetchedProducts(cartItems);
        renderWithRouter(path);

        const product1 = await screen.findByTestId('product1');
        const product1Button = await within(product1).findByRole('button', {
          name: 'Remove from Cart',
        });
        await user.click(product1Button);

        const title = await screen.findByText('a product 2');
        expect(title).toBeInTheDocument();
      });

      it('subtracts the item quantity from the cart navigation menu', async () => {
        const user = userEvent.setup();

        const { renderWithRouter, path, overrideFetchedProducts } = setup();
        const cartItems = [
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
        ];
        overrideFetchedProducts(cartItems);
        renderWithRouter(path);

        const product1 = await screen.findByTestId('product1');
        const product1Button = await within(product1).findByRole('button', {
          name: 'Remove from Cart',
        });

        const link = await screen.findByRole('link', { name: 'Cart (7)' });
        await user.click(product1Button);

        expect(link).toHaveTextContent('Cart (2)');
      });
    });
  });
});
