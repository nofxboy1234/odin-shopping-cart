import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Food from './components/food/Food';
import Drinks from './components/drinks/Drinks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
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
]);

console.log('rendering root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
