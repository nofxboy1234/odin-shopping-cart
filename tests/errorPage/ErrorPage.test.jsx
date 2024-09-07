import { describe, it, expect } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/router';

function setup() {
  return {
    renderWithRouter,
    path: '/this-will-error',
  };
}

describe('ErrorPage component', () => {
  it('renders an error message', () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const heading = screen.getByRole('heading', {
      name: 'Sorry, this route does not exist!',
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the error status text', () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const statusText = screen.getByTestId('errorStatusText');
    expect(statusText).toHaveTextContent('Not Found');
  });

  it('renders the error data', () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const errorData = screen.getByTestId('errorData');
    expect(errorData).toHaveTextContent(
      'Error: No route matches URL "/this-will-error"'
    );
  });

  describe('when clicking the Go Back link', () => {
    it('renders the home page', async () => {
      const { renderWithRouter, path } = setup();
      renderWithRouter(path);

      const link = screen.getByRole('link', {
        name: 'Click here to go back to the home page',
      });

      const user = userEvent.setup();
      await user.click(link);

      const loadingText = screen.getByText('Loading...');
      expect(loadingText).toBeInTheDocument();

      await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

      const heading = screen.getByRole('heading', {
        name: 'Welcome to Shopping Cart!',
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
