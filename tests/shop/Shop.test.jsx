import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import Shop from '../../src/components/shop/Shop';
import routes from '../../src/routes/routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

describe('Shop component', () => {
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
    // render(<App />);

    const link = await screen.findByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  it('renders products', () => {});
});
