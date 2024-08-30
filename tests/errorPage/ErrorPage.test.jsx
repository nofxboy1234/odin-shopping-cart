import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

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
});
