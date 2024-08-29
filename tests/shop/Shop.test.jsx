import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shop from '../../src/components/shop/Shop';

describe('Shop component', () => {
  it('renders the title', () => {
    render(<Shop />);
  });

  it('renders products', () => {});
});
