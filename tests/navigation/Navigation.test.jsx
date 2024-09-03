import { describe, it, expect } from 'vitest';
import {
  getByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

function setup() {
  return {
    renderWithRouter: () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
        initialIndex: 0,
      });

      return render(<RouterProvider router={router} />);
    },
  };
}

describe('Navigation component', () => {
  it('renders the home link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();

    const link = await screen.findByRole(
      'link',
      { name: 'Home' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the shop link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();

    const link = await screen.findByRole(
      'link',
      { name: 'Shop' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the cart link', async () => {
    const { renderWithRouter } = setup();
    renderWithRouter();

    const link = await screen.findByRole(
      'link',
      { name: 'Cart (0)' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the navigation bar above the home page', async () => {
    const { renderWithRouter } = setup();
    const { container } = renderWithRouter();

    await waitFor(() => {
      expect(screen.getByText('Welcome to Shopping Cart!')).toBeInTheDocument();
    });
    screen.debug();
    expect(container).toMatchSnapshot();
  });
});
