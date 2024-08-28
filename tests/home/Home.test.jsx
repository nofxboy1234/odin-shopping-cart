import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/components/home/Home';

describe('Home component', () => {
  it('renders correct heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'Welcome to Shopping Cart!' })
        .textContent
    ).toMatch(/Welcome to Shopping Cart!/i);
  });
});
