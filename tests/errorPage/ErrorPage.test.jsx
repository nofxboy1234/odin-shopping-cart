import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

beforeEach(() => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/hello'],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />);
});

describe('ErrorPage component', () => {
  it('renders an error message', () => {
    const heading = screen.getByRole('heading', {
      name: 'Sorry, this route does not exist!',
    });
    expect(heading).toBeInTheDocument();
  });
});
