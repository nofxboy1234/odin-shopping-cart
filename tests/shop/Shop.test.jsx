import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shop from '../../src/components/shop/Shop';
import App from '../../src/App';

describe('Shop component', () => {
  it('renders the title', () => {
    render(<App />);
    const paragraph = screen.getByRole('paragraph');
    expect(paragraph.textContent).toMatch(/Loading.../i);
  });

  it('renders products', () => {});
});
