import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import routes from '../../src/routes/routes';

const renderWithRouter = (path) => {
  const initialEntries = ['/', '/shop', '/cart', '/this-will-error'];
  let initialIndex = 0;

  if (initialEntries.includes(path)) {
    initialIndex = initialEntries.indexOf(path);
  }

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });

  return render(<RouterProvider router={router} />);
};

export default renderWithRouter;
