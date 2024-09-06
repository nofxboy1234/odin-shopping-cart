import { describe, it, expect } from 'vitest';
import { getRoles, logRoles, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import userEvent from '@testing-library/user-event';

function setup() {
  return {
    renderWithRouter,
    path: '/',
  };
}

describe('Navigation component', () => {
  it('renders the home link', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const link = await screen.findByRole(
      'link',
      { name: 'Home' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the shop link', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const link = await screen.findByRole(
      'link',
      { name: 'Shop' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });

  it('renders the cart link', async () => {
    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const link = await screen.findByRole(
      'link',
      { name: 'Cart (0)' },
      { timeout: 2000 }
    );
    expect(link).toBeInTheDocument();
  });
});
