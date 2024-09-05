import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/router';
import userEvent from '@testing-library/user-event';

function setup() {
  return {
    renderWithRouter,
    path: '/shop',
  };
}

describe('Shop component', () => {
  it('renders the heading', async () => {
    const user = userEvent.setup();

    const { renderWithRouter, path } = setup();
    renderWithRouter(path);

    const heading = await screen.findByTestId('shop-heading');
    expect(heading).toBeInTheDocument();
  });

  it.skip('renders all the products', () => {
    //
  });
});
