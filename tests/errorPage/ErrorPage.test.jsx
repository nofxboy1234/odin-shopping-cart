import { describe, it, expect } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/router';

function setup() {
  return {
    renderWithRouter,
  };
}
describe('ErrorPage component', () => {
  it('renders an error message', () => {
    const { renderWithRouter } = setup();
    renderWithRouter(3);

    const heading = screen.getByRole('heading', {
      name: 'Sorry, this route does not exist!',
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the error status text', () => {
    const { renderWithRouter } = setup();
    renderWithRouter(3);

    const statusText = screen.getByTestId('errorStatusText');
    expect(statusText).toHaveTextContent('Not Found');
  });

  it('renders the error data', () => {
    const { renderWithRouter } = setup();
    renderWithRouter(3);

    const errorData = screen.getByTestId('errorData');
    expect(errorData).toHaveTextContent(
      'Error: No route matches URL "/this-will-error"'
    );
  });

  describe('when clicking the Go Back link', () => {
    const user = userEvent.setup();

    it('renders the error data', async () => {
      const { renderWithRouter } = setup();
      renderWithRouter(3);

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
