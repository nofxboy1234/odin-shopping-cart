import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('renders the loading message', () => {
    render(<App />);
    const paragraph = screen.getByRole('paragraph');
    expect(paragraph.textContent).toMatch(/Loading.../i);
  });

  it('renders the Home link', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const link = await screen.findByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  describe.skip('renders the navigation bar', () => {});
});
