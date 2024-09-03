import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import routes from '../../src/routes/routes';

const renderWithRouter = (initialIndex) => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/shop', '/cart', '/this-will-error'],
    initialIndex,
  });

  render(<RouterProvider router={router} />);
};

export default renderWithRouter;
