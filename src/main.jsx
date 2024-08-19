import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Food from './components/food/Food';
import Drinks from './components/drinks/Drinks';
import Cart from './components/cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
        children: [
          {
            path: 'food',
            element: <Food />,
          },
          {
            path: 'drinks',
            element: <Drinks />,
          },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

console.log('rendering root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
