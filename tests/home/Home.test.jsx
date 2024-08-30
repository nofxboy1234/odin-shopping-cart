import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/components/home/Home';

describe('Home component', () => {
  it('renders the home heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: 'Welcome to Shopping Cart!',
    });
    expect(heading).toBeInTheDocument();
  });
});
