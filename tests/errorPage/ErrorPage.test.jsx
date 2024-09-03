import { describe, it, expect } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

function setup() {
  return {
    renderWithRouter: () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/hello'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);
    },
  };
}

describe('ErrorPage component', () => {
  it('renders an error message', () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const heading = screen.getByRole('heading', {
      name: 'Sorry, this route does not exist!',
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the error status text', () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const statusText = screen.getByTestId('errorStatusText');
    expect(statusText).toHaveTextContent('Not Found');
  });

  it('renders the error data', () => {
    const { renderWithRouter } = setup();
    renderWithRouter();
    const errorData = screen.getByTestId('errorData');
    expect(errorData).toHaveTextContent('Error: No route matches URL "/hello"');
  });

  describe('when clicking the Go Back link', () => {
    const user = userEvent.setup();

    it('renders the error data', async () => {
      const { renderWithRouter } = setup();
      renderWithRouter();

      const link = screen.getByRole('link');
      await user.click(link);

      await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

      const heading = screen.getByRole('heading', {
        name: 'Welcome to Shopping Cart!',
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
